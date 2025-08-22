import { MouseEvent } from 'react';
// import { toast, ToastOptions } from 'react-toastify';
import {
  ENDPOINT_TESTING_PAGE_URLS,
  PAGE,
  PAGE_URLS,
  TOOL_PAGE,
  TOOLS_PAGE_URLS,
} from './constants';
// import config from '../config.json';
// path must begin with /
export function absoluteUrl(path: string = ''): string {
  if (path !== '' && !path.startsWith('/')) {
    path = '/' + path;
  }
  return `${getProtocol()}://${getOrigin()}${path}`;
}

export function getProtocol(): string {
  // Make sure to set the environment variables in your .env in the APP where you are importing this
  return process.env.NEXT_PUBLIC_APP_PROTOCOL!;
}

export function getOrigin(): string {
  return process.env.NEXT_PUBLIC_APP_ORIGIN!;
}

export function pageUrl(
  page: PAGE,
  data?: Record<string, string | number>
): string {
  if (PAGE_URLS[page]) {
    if (data && typeof PAGE_URLS[page] === 'function') {
      return PAGE_URLS[page](data);
    } else if (typeof PAGE_URLS[page] === 'string') {
      return PAGE_URLS[page];
    }
  } else if (ENDPOINT_TESTING_PAGE_URLS[page]) {
    return ENDPOINT_TESTING_PAGE_URLS[page];
  }

  throw new Error(`No URL found for page ${page}`);
}

export function stopClickPropagation(event: MouseEvent<HTMLElement>) {
  event.stopPropagation();
}

// export function notifySuccess(message: string, options: ToastOptions = {}) {
//   toast.success(message, options);
// }

// export function notifyError(message: string) {
//   toast.error(message);
// }

export function getBaseToolsAppPath(): string {
  return process.env.NEXT_PUBLIC_TOOLS_APP_BASE_PATH || '';
}
export function getAbsoluteToolsBasePath(): string {
  return `${getProtocol()}://${getOrigin()}${getBaseToolsAppPath()}`;
}

export function toolPageUrl(page: TOOL_PAGE): string {
  if (TOOLS_PAGE_URLS[page]) {
    return `${getBaseToolsAppPath()}${TOOLS_PAGE_URLS[page]}`;
  }
  throw new Error(`No URL found for page ${page}`);
}
