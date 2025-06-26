import axios, { AxiosResponse } from "axios";

import { clearStorage } from "../common/storage.service";
import { clearAllCookies } from "../common/cookies.service";

import {
  getLoggedUserInfoFromStorage,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../authentication/authentication.service";

// core
import { IGetTokenOrLoginResult } from "@/core/types/response/Login.res";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { ShowToast } from "@/core/hooks/Notifications";

// configs
import { projectConfig } from "@/configs/project.config";
import { envConfig } from "@/configs/env.config";

//*** errorFun
const errorFun = () => {
  ShowToast(["توکن شما منقضی شده است ، دوباره وارد شوید!"], toastTypes.error);

  clearStorage(projectConfig.storage);
  clearAllCookies();

  window.location.href = authUrlEnum.logout; // هدایت به صفحه لاگین
};

//*** renewAccessToken
export const renewAccessToken = async () => {
  //authGuard
  const authGuard = axios.create({
    baseURL: envConfig.base_url,
  });

  //get new token
  try {
    const userInfo = getLoggedUserInfoFromStorage();
    const refreshToken = getRefreshToken();

    const payLoad = {
      refreshTokenValue: refreshToken,
      userId: userInfo?.UserLocalId,
      userName: userInfo?.Username,
    };

    const resApi: AxiosResponse<IAxiosResult> = await authGuard.post(
      `/api/User/RefreshToken`,
      payLoad
    );
    const result: IGetTokenOrLoginResult = resApi?.data?.result;

    if (result.accessToken && result.refreshToken) {
      setAccessToken(result.accessToken);
      setRefreshToken(result.refreshToken);

      return result.accessToken;
    } else {
      errorFun();
    }
  } catch (error) {
    errorFun();
  }
};
