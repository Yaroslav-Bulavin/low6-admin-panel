import * as React from 'react';
import { FC, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';

import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from '@/utils/localStorage.util';

type Selector = () => any;

type LocalStorageContextType = {
  getState: () => Record<string, any>;
  setItem: typeof setStorageItem;
  removeItem: (key: string) => void;
  subscribe: (selector: Selector) => () => void;
};

const LocalStorageContext = React.createContext<LocalStorageContextType>({
  getState: () => ({}),
  setItem: () => undefined,
  removeItem: () => undefined,
  subscribe: () => () => undefined,
});

const LocalStorageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialValue = useMemo(
    () =>
      Object.keys(localStorage).reduce<Record<string, any>>(
        (obj, key) => ({ ...obj, [key]: getStorageItem(key) }),
        {},
      ),
    [],
  );
  const state = useRef<Record<any, any>>(initialValue);
  const subscribers = useRef(new Set<Selector>());

  const getState = useCallback(() => state.current, []);

  const setItem = useCallback<LocalStorageContextType['setItem']>(
    (key, value) => {
      setStorageItem(key, value);
      state.current[key] = value;
      subscribers.current.forEach((x) => x());
    },
    [],
  );

  const removeItem = useCallback<LocalStorageContextType['removeItem']>(
    (key) => {
      removeStorageItem(key);
      state.current[key] = null;
      subscribers.current.forEach((x) => x());
    },
    [],
  );

  const subscribe = useCallback((callback: Selector) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      state.current[e.key as string] = e.newValue;
      subscribers.current.forEach((x) => x());
    };

    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [setItem]);

  return (
    <LocalStorageContext.Provider
      value={{ getState, setItem, removeItem, subscribe }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

export { LocalStorageProvider, LocalStorageContext };
