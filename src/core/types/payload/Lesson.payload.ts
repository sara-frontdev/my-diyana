import { IPaginationPayload } from "../common/common.payload";

// GetLessons
export interface IGetLessonsPayload extends IPaginationPayload {
  request?: Request;
}
interface Request {
  id?: number;
  lessonGroupId?: number;
  title?: string;
  code?: string;
}
