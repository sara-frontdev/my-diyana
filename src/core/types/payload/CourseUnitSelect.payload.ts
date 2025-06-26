import { IPaginationPayload } from "../common/common.payload";

// GetCourseUnitSelectsByStudent
export interface IGetCourseUnitSelectsByStudentPayload
  extends IPaginationPayload {
  request: CourseUnitSelectsByStudent;
}
export interface CourseUnitSelectsByStudent {
  id?: number;
  costLessonAttributeId?: number;
  isOpenOrder?: boolean;
  userId?: number;
  fromDateTimeSelectShamsi?: string;
  toDateTimeSelectShamsi?: string;
}

// SetCourseUnitSelectInfoByStudent
export interface ISetCourseUnitSelectInfoByStudentPayload {
  id?: number;
  costLessonAttributeId: number;
  userId?: number;
  dateTimeStartCourseShamsi?: string;
  classCalenderCourseUnits: ClassCalenderCourseUnit[];
}
interface ClassCalenderCourseUnit {
  dayOfWeek: number;
  dateTimeClassShamsi: string;
}
