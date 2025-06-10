import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
interface QueuedRequest {
  request: AxiosRequestConfig;
  resolve: (
    value: AxiosResponse<any> | PromiseLike<AxiosResponse<any>>
  ) => void;
  reject: (reason?: any) => void;
}

const requestQueue: QueuedRequest[] = [];
let isRefreshingQueue = false;

export const addToQueue = (
  request: AxiosRequestConfig
): Promise<AxiosResponse<any>> => {
  return new Promise((resolve, reject) => {
    requestQueue.push({ request, resolve, reject });
  });
};

export const processQueue = (error: any, token: string | null = null): void => {
  requestQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else if (token) {
      promise.request.headers = promise.request.headers || {};
      promise.request.headers["Authorization"] = `Bearer ${token}`;
      promise.resolve(axios(promise.request));
    }
  });
  requestQueue.length = 0;
  isRefreshingQueue = false;
};

export const setIsRefreshingQueue = (status: boolean): void => {
  isRefreshingQueue = status;
};

export const getIsRefreshingQueue = (): boolean => {
  return isRefreshingQueue;
};
