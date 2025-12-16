import { DEBUG_STORAGE_KEY } from './constants';

export const BUILD_ID = import.meta.env.VITE_BUILD_ID ?? 'dev';
export const BUILD_TIME = import.meta.env.VITE_BUILD_TIME ?? 'dev';
export const BUILD_JSON_URL = '/build.json';

export const logBuildBanner = () => {
  if (typeof window === 'undefined') return;

  const host = window.location.host || 'unknown-host';
  const banner = `[ForRealScan] build=${BUILD_ID} time=${BUILD_TIME} host=${host}`;
  console.info(banner);
};

export const debugFlagIsEnabled = () => {
  const params = new URLSearchParams(window.location.search);
  const enabledByQuery = params.get('debug') === '1';
  const enabledByStorage = localStorage.getItem(DEBUG_STORAGE_KEY) === '1';

  if (enabledByQuery && !enabledByStorage) {
    localStorage.setItem(DEBUG_STORAGE_KEY, '1');
  }

  return enabledByQuery || enabledByStorage;
};
