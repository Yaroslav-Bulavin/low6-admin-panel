import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { LocalStorageContext } from '@/contexts/localStorage.context';

export const useLocalStorage = <T>(key: string) => {
  const context = React.useContext(LocalStorageContext);
  if (context === undefined) {
    throw new Error(
      'useLocalStorage must be used within a LocalStorageProvider',
    );
  }
  const {
    subscribe,
    getState,
    setItem: setStorageItem,
    removeItem: removeStoreItem,
  } = context;

  const initialValue = useMemo(() => getState()[key], [getState, key]);
  const [value, setValue] = useState<T>(initialValue);

  useEffect(
    () => subscribe(() => setValue(getState()[key])),
    [context, getState, key, subscribe],
  );

  useEffect(() => setValue(initialValue), [initialValue]);

  const setItem = useCallback(
    (val: T) => {
      setStorageItem(key, val);
    },
    [key, setStorageItem],
  );
  const removeItem = useCallback(() => {
    removeStoreItem(key);
  }, [key, removeStoreItem]);

  return { value, setItem, removeItem };
};
