"use client";

//core
import {
  setAccessToken,
  setRefreshToken,
  setLoggedUserInfoToStorage,
} from "@/core/services/authentication/authentication.service";
import { jwtDecode } from "jwt-decode";
import { IdecodeToken } from "../models/decode-token.model";
import { IUserInfoType } from "../models/user-info.model";
// import { authUrlEnum } from "../enums/auth-url.enum";
import { toastTypes } from "../enums/toast-types.enum";
import { ShowToast } from "./Notifications";

//createUserInfoObj
export const createUserInfoObj = (
  decode_token: IdecodeToken
): IUserInfoType => {
  return {
    name: decode_token.name,
    Username: decode_token.preferred_username,
    lastName: decode_token.family_name,
    phone_number: decode_token.phone_number,
    UserLocalId: decode_token.UserLocalId,
  };
};

//اگ (سرویس توکن) داشته باشه کاربر یعنی از قبل یه بار توی سرویس اومده باشه این فانکشن کال میشه
export const successLoginWithServiceTokenFun = (
  service_token: string,
  refreshToken: string,
  redirectUrl: string
) => {
  //variables
  const decode_token: IdecodeToken = jwtDecode(service_token);
  const userInfoObj = createUserInfoObj(decode_token);

  //save in cookies
  setAccessToken(service_token);
  setRefreshToken(refreshToken);
  setLoggedUserInfoToStorage(userInfoObj);

  // redirection
  ShowToast(
    [`سلام ${userInfoObj.name || "کاربر"} عزیز، خوش آمدید`],
    toastTypes.success
  );

  // globalShowToast?.(
  //   `سلام ${userInfoObj.name || "کاربر"} عزیز، خوش آمدید`,
  //   toastTypes.success
  // );

  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 1000);
};
