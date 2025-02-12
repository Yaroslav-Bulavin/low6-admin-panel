export const formatStorageValue = <T>(val: T) => {
  try {
    return JSON.parse(val as any);
  } catch (_) {
    return val;
  }
};

export const getStorageItem = <T>(key: string) => {
  return formatStorageValue<T>(localStorage.getItem(key) as T);
};

export const setStorageItem = <T>(key: string, value: T) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorageItem = (key: string) => localStorage.removeItem(key);
