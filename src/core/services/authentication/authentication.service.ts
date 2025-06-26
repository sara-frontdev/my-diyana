import * as storage from "../common/storage.service";
import * as cookies from "../common/cookies.service";

// lib
import { jwtDecode } from "jwt-decode";

// core
import { storageTypeEnum } from "@/core/enums/storage-type.enum";
import { IdecodeToken } from "@/core/models/decode-token.model";
import { IUserInfoType } from "@/core/models/user-info.model";
import { UserRoles } from "@/core/enums/user-roles.enum";

// config
import { projectConfig } from "@/configs/project.config";

//isUsingCookies
const isUsingCookies = projectConfig.storage === storageTypeEnum.cookies;

//===============userInfo================//
const setLoggedUserInfoToStorage = (user: IUserInfoType): void => {
  if (isUsingCookies) {
    cookies.setGenericCookie("userInfo", user);
  } else {
    storage.setItemGeneric(projectConfig.storage, "userInfo", user);
  }
};

const getLoggedUserInfoFromStorage = (): IUserInfoType => {
  if (isUsingCookies) {
    return cookies.getGenericCookie("userInfo");
  } else {
    return storage.getItemGeneric(projectConfig.storage, "userInfo");
  }
};

const removeLoggedUserInfoFromStorage = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("userInfo");
  } else {
    storage.removeItem(projectConfig.storage, "userInfo");
  }
};

//===============token================//
const setAccessToken = (token: string): void => {
  if (isUsingCookies) {
    cookies.setCookie("token", token);
  } else {
    storage.setItem(projectConfig.storage, "token", token);
  }
};

const getAccessToken = (): string | null => {
  if (isUsingCookies) {
    const value = cookies.getCookie("token");
    return value ? value : null;
  } else {
    const value = storage.getItem(projectConfig.storage, "token");

    return value ? value : null;
  }
};

const removeAccessToken = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("token");
  } else {
    storage.removeItem(projectConfig.storage, "token");
  }
};

const isUserLoggedIn = (): boolean => {
  const token = getAccessToken();

  let jwt_decode = null;
  if (token) jwt_decode = jwtDecode(token);

  if (token || jwt_decode) {
    return true;
  } else {
    return false;
  }
};

//===============refresh_token================//
const setRefreshToken = (refreshToken: string): void => {
  if (isUsingCookies) {
    cookies.setCookie("refresh_token", refreshToken);
  } else {
    storage.setItem(projectConfig.storage, "refresh_token", refreshToken);
  }
};

const getRefreshToken = () => {
  if (isUsingCookies) {
    return cookies.getCookie("refresh_token");
  } else {
    return storage.getItem(projectConfig.storage, "refresh_token");
  }
};

const removeRefreshToken = (): void => {
  if (isUsingCookies) {
    cookies.removeCookie("refresh_token");
  } else {
    storage.removeItem(projectConfig.storage, "refresh_token");
  }
};

//===============role================//
const getUserRoles = () => {
  //get token
  const token = getAccessToken();

  //check has valid token
  let jwt_decode = null;
  if (token) jwt_decode = jwtDecode(token);

  //userRoles
  let userRoles: string | string[] = [];

  //save user roles
  if (token || jwt_decode) {
    const decode_token: IdecodeToken = jwtDecode(String(token));

    userRoles = decode_token.Role
      ? typeof decode_token.Role === "string"
        ? [decode_token.Role]
        : decode_token.Role
      : [UserRoles.UserReal];
  } else {
    return [];
  }

  return userRoles;
};

export {
  setLoggedUserInfoToStorage,
  getLoggedUserInfoFromStorage,
  removeLoggedUserInfoFromStorage,
  isUserLoggedIn,
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  getUserRoles,
};
