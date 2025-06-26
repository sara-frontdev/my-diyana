import { AxiosResponse } from "axios";

import { https } from "../../interceptors/https.interceptors";
import { useMutation } from "@tanstack/react-query";

import {
  IForgotPasswordPayload,
  IResetPasswordPayload,
} from "@/core/types/payload/ForgotPassword.payload";
import { IAxiosResult } from "@/core/models/axios-result.model";

//ForgotPassword
const ForgotPassword = async (
  payload: IForgotPasswordPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/ForgotPassword`, payload);
};

export const useForgotPassword = () => {
  return useMutation(ForgotPassword);
};

//ResetPassword

const ResetPassword = async (
  payload: IResetPasswordPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/ResetPassword`, payload);
};

export const useResetPassword = () => {
  return useMutation(ResetPassword);
};
