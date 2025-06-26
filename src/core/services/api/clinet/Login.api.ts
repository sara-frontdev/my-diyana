import { AxiosResponse } from "axios";

import { https } from "../../interceptors/https.interceptors";

import { IAxiosResult } from "@/core/models/axios-result.model";
import {
  ILoginPayload,
  ILoginSendCodePayload,
  ILoginValidationCodePayload,
} from "@/core/types/payload/Login.Payload";
import { useMutation } from "@tanstack/react-query";

//Login
const Login = async (
  payload: ILoginPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/Login`, payload);
};

export const useLogin = () => {
  return useMutation({ mutationFn: Login });
};

//LoginSendCode
const LoginSendCode = async (
  payload: ILoginSendCodePayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/LoginSendCode`, payload);
};

export const useLoginSendCode = () => {
  return useMutation({ mutationFn: LoginSendCode });
};

//LoginValidationCode
const LoginValidationCode = async (
  payload: ILoginValidationCodePayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/LoginValidationCode`, payload);
};

export const useLoginValidationCode = () => {
  return useMutation({ mutationFn: LoginValidationCode });
};
