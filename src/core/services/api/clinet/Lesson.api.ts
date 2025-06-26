import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import { https } from "../../interceptors/https.interceptors";

// core
import { IGetLessonsPayload } from "@/core/types/payload/Lesson.payload";
import { IAxiosResult } from "@/core/models/axios-result.model";

// GetLessons
export const GetLessons = async (
  payload: IGetLessonsPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post("/api/Lesson/GetLessons", payload);
};

// export const GetLessons = async (
//   payload: IGetLessonsPayload
// ): Promise<IAxiosResult> => {
//   const response: AxiosResponse<IAxiosResult> = await https().post(
//     "/api/Lesson/GetLessons",
//     payload
//   );
//   return response.data; // فقط داده‌ها را برگردان
// };

export const useGetLessons = (payload: IGetLessonsPayload) => {
  return useQuery({
    queryKey: ["lessons", payload],
    queryFn: () => GetLessons(payload),
    enabled: !!payload,
  });
};
