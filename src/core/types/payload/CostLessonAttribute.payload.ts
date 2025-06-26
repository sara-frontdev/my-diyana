import { IPaginationPayload } from "../common/common.payload";

// GetCostLessonAttributesForCourseUnitSelect
export interface IGetCostLessonAttributesForCourseUnitSelectPayload
  extends IPaginationPayload {
  request: Request;
}
export interface Request {
  educationalLevelId?: number;
  lessonGroupId?: number;
  lessonId?: number;
  lessonAttributId?: number;
  teacherId?: number;
  fromFeeAmount?: number;
  toFeeAmount?: number;
  fromTotalAmount?: number;
  toTotalAmount?: number;
}
