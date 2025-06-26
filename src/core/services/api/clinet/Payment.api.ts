import { AxiosResponse } from "axios";

import { https } from "../../interceptors/https.interceptors";

// core
import { IAxiosResult } from "@/core/models/axios-result.model";
import { IVerificationPayload } from "@/core/types/payload/Payment.payload";
import { useMutation } from "@tanstack/react-query";

//Request
const Request = async (
  orderKey: string | null
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().get(`/api/Payment/Request?orderKey=${orderKey}`);
};
export const useRequest = () => {
  return useMutation({ mutationFn: Request });
};

//Verification
const Verification = async (
  payload: IVerificationPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(`/api/Payment/Verification`, payload);
};
export const useVerification = () => {
  return useMutation({ mutationFn: Verification });
};
