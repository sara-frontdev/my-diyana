import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import { https } from "../../interceptors/https.interceptors";

// core
import { IGetEducationalCommonPayload } from "@/core/types/common/common.payload";
import { IAxiosResult } from "@/core/models/axios-result.model";

// GetEducationalLevels
const GetEducationalLevels = async (
  payload: Partial<IGetEducationalCommonPayload>
): Promise<IAxiosResult> => {
  const response: AxiosResponse<IAxiosResult> = await https().post(
    "/api/EducationalLevel/GetEducationalLevels",
    payload
  );
  return response.data; // فقط داده‌ها را برگردان
};

export const useGetEducationalLevels = (
  payload: IGetEducationalCommonPayload
) => {
  return useQuery({
    queryKey: ["educationalLevels", payload],
    queryFn: () => GetEducationalLevels(payload),
    enabled: !!payload,
  });
};
