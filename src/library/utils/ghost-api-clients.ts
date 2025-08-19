// Avoid static imports of optional Ghost packages so host apps that don't
// install them won't fail bundling. We use runtime-safe requires (via eval)
// and lazily initialize the clients. If the packages aren't installed we
// expose stubs that throw a helpful error when used.

function safeRequire(pkg: string) {
  try {
    // Use eval('require') to avoid bundlers statically resolving this
    // dependency at build-time.
    // eslint-disable-next-line no-eval, @typescript-eslint/no-implied-eval
    // @ts-ignore
    return eval('require')(pkg);
  } catch (e) {
    return null;
  }
}

let _contentApi: any = null;
let _adminApi: any = null;

function makeRequestWrapper() {
  return async ({ url, method, params, headers }: any) => {
    const apiUrl = new URL(url);
    Object.keys(params || {}).forEach((key) => apiUrl.searchParams.set(key, params[key]));
    const res = await fetch(apiUrl.toString(), { method, headers });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}, response data: ${await res.text()}`);
    }
    const data = await res.json();
    return { data };
  };
}

function missingPkgFactory(pkgName: string) {
  const msg = `Package \"${pkgName}\" is not installed. To use Ghost features install ${pkgName} in your app.`;
  const err = () => {
    throw new Error(msg);
  };
  return new Proxy(
    {},
    {
      get() {
        return err;
      },
      apply() {
        throw new Error(msg);
      },
    }
  );
}

export function getContentApi() {
  if (_contentApi) return _contentApi;

  const mod = safeRequire('@tryghost/content-api');
  const GhostContentAPI = mod && (mod.default || mod);

  if (!GhostContentAPI) {
    _contentApi = missingPkgFactory('@tryghost/content-api');
    return _contentApi;
  }

  _contentApi = new GhostContentAPI({
    // Make sure to set the environment variables in your .env in the APP where you are importing this
    url: process.env.GHOST_URL!,
    key: process.env.GHOST_ADMIN_API_KEY!,
    version: 'v5.0',
    makeRequest: makeRequestWrapper(),
  });

  return _contentApi;
}

export function getAdminApi() {
  if (_adminApi) return _adminApi;

  const mod = safeRequire('@tryghost/admin-api');
  const GhostAdminAPI = mod && (mod.default || mod);

  if (!GhostAdminAPI) {
    _adminApi = missingPkgFactory('@tryghost/admin-api');
    return _adminApi;
  }

  _adminApi = new GhostAdminAPI({
    url: process.env.GHOST_URL!,
    key: process.env.GHOST_ADMIN_API_KEY!,
    version: 'v5.0',
  });

  return _adminApi;
}

// Backwards-compatible exports: proxies that lazily forward to real clients.
export const contentApi: any = new Proxy(
  {},
  {
    get(_target, prop: string) {
      const real = getContentApi();
      const value = real[prop as any];
      if (typeof value === 'function') return value.bind(real);
      return value;
    },
    apply(_target, _thisArg, args) {
      const real = getContentApi();
      return (real as any).apply(_thisArg, args);
    },
  }
);

export const adminApi: any = new Proxy(
  {},
  {
    get(_target, prop: string) {
      const real = getAdminApi();
      const value = real[prop as any];
      if (typeof value === 'function') return value.bind(real);
      return value;
    },
    apply(_target, _thisArg, args) {
      const real = getAdminApi();
      return (real as any).apply(_thisArg, args);
    },
  }
);
