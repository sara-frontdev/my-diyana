import { AxiosResponse } from "axios";

import { IAxiosResult } from "@/core/models/axios-result.model";
import { useMutation, useQuery } from "@tanstack/react-query";

import { https } from "../../interceptors/https.interceptors";

// core
import { IGetCapacityCalenderCostLessonAttributePayload } from "@/core/types/payload/CalenderCostLessonAttribute.payload";

// GetCalenderCostLessonAttribute
export const GetCalenderCostLessonAttribute = async (
  CostLessonAttributeId: number
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().get(
    `/api/CalenderCostLessonAttribute/GetCalenderCostLessonAttribute?CostLessonAttributeId=${CostLessonAttributeId}`
  );
};

export const useGetCalenderCostLessonAttribute = (
  CostLessonAttributeId: number,
  enabled: boolean
) =>
  useQuery({
    queryKey: ["calendar-cost-lesson-attribute", CostLessonAttributeId],
    queryFn: () => GetCalenderCostLessonAttribute(CostLessonAttributeId),
    //  enabled: Boolean(selectCLassId), // فقط وقتی آیدی انتخاب شده باشه، API صدا زده میشه
    enabled,
  });

//GetCapacityCalenderCostLessonAttribute;
export const GetCapacityCalenderCostLessonAttribute = async (
  payload: IGetCapacityCalenderCostLessonAttributePayload
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(
    `/api/CalenderCostLessonAttribute/GetCapacityCalenderCostLessonAttribute`,
    payload
  );
};

export const useGetCapacityCalenderCostLessonAttribute = () => {
  return useMutation({ mutationFn: GetCapacityCalenderCostLessonAttribute });
};
