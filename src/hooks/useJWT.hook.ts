import { StorageKeysEnum } from '@/enums/storageKeys.enum';

import { useLocalStorage } from '@/hooks/useLocalStorage.hook';

export const useJWT = () => {
  const {
    value: jwt,
    setItem: setJwt,
    removeItem: removeJwt,
  } = useLocalStorage(StorageKeysEnum.jwt);

  return { jwt, setJwt, removeJwt };
};
