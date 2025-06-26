import { AxiosResponse } from "axios";
import { https } from "../../interceptors/https.interceptors";

import { IAxiosResult } from "@/core/models/axios-result.model";
import { IGetEducationalCommonPayload } from "@/core/types/common/common.payload";
import { useQuery } from "@tanstack/react-query";

// GetLessonGroups
// export const GetLessonGroups = async (
//   payload: IGetEducationalCommonPayload
// ): Promise<AxiosResponse<IAxiosResult>> => {
//   return await https().post("/api/LessonGroup/GetLessonGroups", payload);
// };

export const GetLessonGroups = async (
  payload: IGetEducationalCommonPayload
): Promise<IAxiosResult> => {
  const response: AxiosResponse<IAxiosResult> = await https().post(
    "/api/LessonGroup/GetLessonGroups",
    payload
  );

  return response.data;
};

export const useGetLessonGroups = (payload: IGetEducationalCommonPayload) => {
  return useQuery({
    queryKey: ["lessonGroups", payload],
    queryFn: () => GetLessonGroups(payload),
    enabled: !!payload,
  });
};
