import { storageTypeEnum } from "@/core/enums/storage-type.enum";

// check storage
const getStorage = (type: storageTypeEnum): Storage | null => {
  if (typeof window === "undefined") return null;

  return type === storageTypeEnum.sessionStorage
    ? window.sessionStorage
    : window.localStorage;
};

//setItem
const setItem = (type: storageTypeEnum, key: string, value: any): void => {
  const storage = getStorage(type);
  if (storage) {
    storage.setItem(key, value);
  }
};

//setItemGeneric
const setItemGeneric = (
  type: storageTypeEnum,
  key: string,
  value: any
): void => {
  const storage = getStorage(type);
  if (storage) {
    storage.setItem(key, JSON.stringify(value));
  }
};

//getItem
const getItem = (type: storageTypeEnum, key: string): any => {
  const storage = getStorage(type);
  if (storage && storage.getItem(key)) {
    return storage.getItem(key);
  } else {
    return false;
  }
};

//getItemGeneric
const getItemGeneric = (type: storageTypeEnum, key: string): any => {
  if (typeof window !== "undefined") {
    const storageValue = getItem(type, key);
    return storageValue ? JSON.parse(String(storageValue)) : false;
  }

  return false;
};

//removeItem
const removeItem = (type: storageTypeEnum, key: string): void | boolean => {
  const storage = getStorage(type);
  if (storage && getItem(type, key)) {
    storage.removeItem(key);
  } else {
    return false;
  }
};

//clearStorage
const clearStorage = (type: storageTypeEnum): void => {
  const storage = getStorage(type);
  if (storage) {
    storage.clear();
  }
};

export {
  setItem,
  getItem,
  removeItem,
  clearStorage,
  setItemGeneric,
  getItemGeneric,
};
