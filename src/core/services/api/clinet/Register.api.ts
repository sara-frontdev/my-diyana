import { AxiosResponse } from "axios";

import { IAxiosResult } from "@/core/models/axios-result.model";
import { https } from "../../interceptors/https.interceptors";
import {
  IFinalizeRegisterPayload,
  IRegisterPayload,
  IVerifyCodePayload,
} from "@/core/types/payload/Register.payload";
import { useMutation } from "@tanstack/react-query";

//Register
const Register = async (
  payload: IRegisterPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/Register`, payload);
};
export const useRegister = () => {
  return useMutation(Register);
};

//VerifyCode
const VerifyCode = async (
  payload: IVerifyCodePayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/VerifyCode`, payload);
};

export const useVerifyCode = () => {
  return useMutation(VerifyCode);
};

//FinalizeRegister
const FinalizeRegister = async (
  payload: IFinalizeRegisterPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/User/FinalizeRegister`, payload);
};

export const useFinalizeRegister = () => {
  return useMutation(FinalizeRegister);
};
