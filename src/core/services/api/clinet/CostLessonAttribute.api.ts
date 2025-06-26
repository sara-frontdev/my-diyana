import { AxiosResponse } from "axios";

import { https } from "../../interceptors/https.interceptors";
import { useMutation } from "@tanstack/react-query";

import { IGetCostLessonAttributesForCourseUnitSelectPayload } from "@/core/types/payload/CostLessonAttribute.payload";
import { IAxiosResult } from "@/core/models/axios-result.model";

// GetCostLessonAttributesForCourseUnitSelect
export const GetCostLessonAttributesForCourseUnitSelect = async (
  payload: IGetCostLessonAttributesForCourseUnitSelectPayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(
    "/api/CostLessonAttribute/GetCostLessonAttributesForCourseUnitSelect",
    payload
  );
};

export const useGetCostLessonAttributesForCourseUnitSelect = () => {
  return useMutation({
    mutationFn: GetCostLessonAttributesForCourseUnitSelect,
  });
};
