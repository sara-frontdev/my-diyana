import {
  IEducationalLevelRes,
  ILessonRes,
  IOrderCourseUnitSelectRes,
  IPaginateListRes,
  IStudentRes,
  ITeacherRes,
} from "../common/common.res";

// GetActiveCourseUnitSelectsByStudent
export interface IGetActiveCourseUnitSelectsByStudentResult {
  id: number;
  userId: number;
  key: string;
  finalAmount: number;
  finalAmountSeparator: string;
  isOpen: boolean;
  key_BankTransaction?: any;
  id_BankTransaction?: any;
  transactionState: number;
  transactionStateTitle: string;
  courseUnitSelects: CourseUnitSelect[];
}

export interface CourseUnitSelect {
  id: Number;
  costLessonAttribute: CostLessonAttribute;
  dateTimeSelectShamsi: string;
  finalAmount: number;
  finalAmountSeparator: string;
  isPayment: boolean;
  orderCourseUnitSelectId: number;
  orderCourseUnitSelect: IOrderCourseUnitSelectRes;
  student: IStudentRes;
  studentId: number;
}

interface CostLessonAttribute {
  feeAmountSeparator: string;
  totalAmountSeparator: string;
  teacher: ITeacherRes;
  lessonAttribut: LessonAttribut;
  id: number;
  lessonAttributId: number;
  feeAmount: number;
  totalAmount: number;
  teacherId: number;
}
interface LessonAttribut {
  timeShiftTitle: string;
  educationalLevelId: number;
  educationalLevel: IEducationalLevelRes;
  lesson: ILessonRes;
  fromTimeStr: string;
  toTimeStr: string;
  sumTime: number;
  id: number;
  lessonId: number;
  timeShift: number;
  countInDay: number;
  countInMonth: number;
  countHourInMonth: number;
  capacity: number;
}

// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
// GetCourseUnitSelectsByStudent

export interface IGetCourseUnitSelectsByStudentResult extends IPaginateListRes {
  items: IGetCourseUnitSelectsByStudentList[];
}

export interface IGetCourseUnitSelectsByStudentList {
  id: number;
  dateTimeSelectedShamsi: string;
  dateTimeStartCourseShamsi: string;
  studentId: number;
  student: IStudentRes;
  costLessonAttribute: CostLessonAttribute;
  finalAmount: number;
  finalAmountSeparator: string;
  isPayment: boolean;
  orderCourseUnitSelectId: number;
  orderCourseUnitSelect: IOrderCourseUnitSelectRes;
  classCalenderCourseUnits: ClassCalenderCourseUnit[];
}
export interface ClassCalenderCourseUnit {
  dayOfWeek: number;
  dayOfWeekTitle: string;
  dateTimeClassShamsi: string;
  attendanceStatus: number;
  attendanceStatusTitle: string;
  teacher: ITeacherRes;
  teacherId: number;
}

interface CostLessonAttribute {
  id: number;
  lessonAttributId: number;
  feeAmount: number;
  totalAmount: number;
  teacherId: number;
  feeAmountSeparator: string;
  totalAmountSeparator: string;
  teacher: ITeacherRes;
  lessonAttribut: LessonAttribut;
}
interface LessonAttribut {
  id: number;
  lessonId: number;
  timeShift: number;
  countDayInWeek: number;
  countDayInMonth: number;
  countHourInMonth: number;
  countOfClassSessions: number;
  capacity: number;
  timeShiftTitle: string;
  educationalLevelId: number;
  educationalLevel: IEducationalLevelRes;
  lesson: ILessonRes;
  fromTimeStr: string;
  toTimeStr: string;
  sumTime: number;
}
