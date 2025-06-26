import { IPaginationPayload } from "../common/common.payload";

// GetLessonAttributs
export interface IGetLessonAttributsPayload extends IPaginationPayload {
  request?: Request;
}
interface Request {
  id?: number;
  educationalLevelId?: number;
  lessonId?: number;
  timeShift?: number;
}
