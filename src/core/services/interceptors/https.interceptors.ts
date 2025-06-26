//lib
import axios, { AxiosResponse } from "axios";

import { getAccessToken } from "../authentication/authentication.service";
import { clearAllCookies } from "../common/cookies.service";
import { clearStorage } from "../common/storage.service";
import { renewAccessToken } from "./renewAccessToken";
import {
  addToQueue,
  getIsRefreshingQueue,
  processQueue,
  setIsRefreshingQueue,
} from "./requestQueue";

// core
import { toastTypes } from "@/core/enums/toast-types.enum";
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { ShowToast } from "@/core/hooks/Notifications";
import { IsIncludes } from "@/core/utils/url.utils";

// config
import { projectConfig } from "@/configs/project.config";
import { envConfig } from "@/configs/env.config";

export const https = () => {
  const authGuard = axios.create({
    baseURL: envConfig.base_url,
  });

  const onSuccess = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  const onError = async (error: any) => {
    const originalRequest = error?.config;
    const errorRespose = error?.response;
    const errorStatus = Number(errorRespose?.status);
    const expectedError = errorStatus >= 400 && errorStatus < 500;

    try {
      switch (true) {
        case !errorRespose:
          ShowToast(["دسترسی به اینترنت خود را بررسی کنید!"], toastTypes.error);

          break;

        // ------------ x === 401 ------------//
        case errorStatus == 401 && !originalRequest?._retry:
          originalRequest._retry = true;

          if (!getIsRefreshingQueue()) {
            setIsRefreshingQueue(true);
            try {
              const newAccessToken = await renewAccessToken();
              processQueue(null, newAccessToken as string);
              return authGuard(originalRequest);
            } catch (refreshError) {
              processQueue(refreshError, null);
              return Promise.reject(refreshError);
            }
          } else {
            return addToQueue(originalRequest);
          }

        case errorStatus === 401 && originalRequest._retry:
          clearStorage(projectConfig.storage);
          clearAllCookies();
          if (window !== undefined) window.location.href = authUrlEnum.logout;

          break;

        // ------------ x === 403 ------------//
        case errorStatus === 403:
          ShowToast(["شما به این قسمت دسترسی ندارید"], toastTypes.error);

          break;

        // ------------ x === 409 ------------//
        case errorStatus === 409:
          ShowToast(
            [
              "رکورد انتخابی دارای وابستگی میباشد، ابتدا وابستگی ها را پاک کنید",
            ],
            toastTypes.error
          );

          break;

        // ------------ x === expectedError ------------//
        case expectedError &&
          !IsIncludes(originalRequest?.url, "/api/User/GetUserInfo?username="):
          ShowToast(
            errorRespose.data.message || ["خطایی در سمت کلاینت پیش آمده است!"],
            toastTypes.error
          );

          break;

        case !expectedError &&
          !IsIncludes(originalRequest.url, "/api/User/RefreshToken"):
          if (typeof window !== "undefined") {
            ShowToast(["خطایی در سرور پیش آمده است!"], toastTypes.error);
          }
          break;

        default:
          break;
      }
    } catch (er) {}

    return Promise.reject(error);
  };

  //response headers
  authGuard.interceptors.response.use(onSuccess, onError);

  //request headers
  authGuard.interceptors.request.use((config) => {
    const token = getAccessToken();

    config.headers.Authorization = token
      ? token
      : "set.Invalid.TokenForGetRefreshToken";
    return config;
  });

  return authGuard;
};
