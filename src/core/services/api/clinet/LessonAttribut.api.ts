import { AxiosResponse } from "axios";
import { https } from "../../interceptors/https.interceptors";

import { useQuery } from "@tanstack/react-query";

// core
import { IGetLessonAttributsPayload } from "@/core/types/payload/LessonAttribut.payload";
import { IAxiosResult } from "@/core/models/axios-result.model";

// GetLessonAttributs
export const GetLessonAttributs = async (
  payload: IGetLessonAttributsPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post("/api/LessonAttribut/GetLessonAttributs", payload);
};

export const useGetLessonAttributs = (payload: IGetLessonAttributsPayload) => {
  return useQuery({
    queryKey: ["lessonAttributs", payload],
    queryFn: () => GetLessonAttributs(payload),
    enabled: !!payload,
  });
};
