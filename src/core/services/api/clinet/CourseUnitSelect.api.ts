import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

import { https } from "../../interceptors/https.interceptors";

import { IAxiosResult } from "@/core/models/axios-result.model";
import { ISetCourseUnitSelectInfoByStudentPayload } from "@/core/types/payload/CourseUnitSelect.payload";

// GetCourseUnitSelectsByStudent
const SetCourseUnitSelectInfoByStudent = async (
  payload: Partial<ISetCourseUnitSelectInfoByStudentPayload>
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().post(
    "/api/CourseUnitSelect/SetCourseUnitSelectInfoByStudent",
    payload
  );
};

export const useSetCourseUnitSelectInfoByStudent = () => {
  return useMutation({ mutationFn: SetCourseUnitSelectInfoByStudent });
};

// GetActiveCourseUnitSelectsByStudent
export const GetActiveCourseUnitSelectsByStudent = async (): Promise<
  AxiosResponse<IAxiosResult>
> => {
  return await https().get(
    "/api/CourseUnitSelect/GetActiveCourseUnitSelectsByStudent"
  );
};

// GetCourseUnitSelectsByStudent
// const GetCourseUnitSelectsByStudent = async (
//   payload: IGetCourseUnitSelectsByStudentPayload
// ): Promise<AxiosResponse<IAxiosResult>> => {
//   return await https().post(
//     "/api/CourseUnitSelect/GetCourseUnitSelectsByStudent",
//     payload
//   );
// };

// export const useGetCourseUnitSelectsByStudent = () => {
//   return useMutation(GetCourseUnitSelectsByStudent);
// };

//RemoveCourse
export const RemoveCourseUnitSelect = async (
  id: number
): Promise<AxiosResponse<IAxiosResult>> => {
  return await https().delete(
    `/api/CourseUnitSelect/RemoveCourseUnitSelect?Id=${id}`
  );
};

export const useRemoveCourseUnitSelect = () => {
  return useMutation({ mutationFn: RemoveCourseUnitSelect });
};
