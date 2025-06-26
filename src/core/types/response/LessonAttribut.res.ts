import { IPaginateListRes } from "../common/common.res";

export interface IGetLessonAttributsResult extends IPaginateListRes {
  items: IGetLessonAttributsList[];
}
export interface IGetLessonAttributsList {
  id: number;
  lessonId: number;
  timeShift: number;
  countInDay: number;
  countInMonth: number;
  countHourInMonth: number;
  capacity: number;
  timeShiftTitle: string;
  educationalLevelId: number;
  educationalLevel: EducationalLevel;
  lesson: Lesson;
  fromTimeStr: string;
  toTimeStr: string;
  sumTime: number;
}
interface Lesson {
  id: number;
  lessonGroupId: number;
  title: string;
  code: string;
  lessonGroup: LessonGroup;
}
interface LessonGroup {
  schoolId: number;
  id: number;
  title: string;
  code: string;
}
interface EducationalLevel {
  id: number;
  schoolId: number;
  title: string;
  code: string;
  school: School;
}
interface School {
  id: number;
  name: string;
}
