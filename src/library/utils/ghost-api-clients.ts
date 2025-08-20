// Simple Ghost API client implementation
// Uses the same pattern as your original working code but with proper error handling

function missingPkgFactory(pkgName: string) {
  const msg = `Package "${pkgName}" is not installed. To use Ghost features install ${pkgName} in your app.`;
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

let _contentApi: any = null;
let _adminApi: any = null;

export function getContentApi() {
  if (_contentApi) return _contentApi;

  try {
    // Import the Ghost Content API - this will throw if not installed
    const GhostContentAPI = require('@tryghost/content-api');

    _contentApi = new GhostContentAPI({
      url: process.env.GHOST_URL!,
      key: process.env.GHOST_CONTENT_API_KEY!, // Fixed: Use CONTENT API key
      version: 'v5.0',
      makeRequest: async ({ url, method, params, headers }: any) => {
        const apiUrl = new URL(url);
        if (params) {
          Object.keys(params).forEach((key) => {
            if (params[key] !== undefined && params[key] !== null) {
              apiUrl.searchParams.set(key, params[key]);
            }
          });
        }
        const res = await fetch(apiUrl.toString(), {
          method: method || 'GET',
          headers: headers || {}
        });
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`HTTP error! status: ${res.status}, response data: ${errorText}`);
        }
        const data = await res.json();
        return { data };
      },
    });
  } catch (e) {
    // If @tryghost/content-api is not installed, create a stub
    _contentApi = missingPkgFactory('@tryghost/content-api');
  }

  return _contentApi;
}

export function getAdminApi() {
  if (_adminApi) return _adminApi;

  try {
    const GhostAdminAPI = require('@tryghost/admin-api');

    _adminApi = new GhostAdminAPI({
      url: process.env.GHOST_URL!,
      key: process.env.GHOST_ADMIN_API_KEY!,
      version: 'v5.0',
    });
  } catch (e) {
    _adminApi = missingPkgFactory('@tryghost/admin-api');
  }

  return _adminApi;
}

// Export the API instances directly (like your original implementation)
export const contentApi = getContentApi();
export const adminApi = getAdminApi();
