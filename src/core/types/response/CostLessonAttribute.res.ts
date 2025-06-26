import { ICityOrVillageRes, IPaginateListRes } from "../common/common.res";

export interface IGetCostLessonAttributesForCourseUnitSelectResult
  extends IPaginateListRes {
  items: IGetCostLessonAttributesForCourseUnitSelectlist[];
}

export interface IGetCostLessonAttributesForCourseUnitSelectlist {
  id: number;
  lessonAttributId: number;
  feeAmount: number;
  totalAmount: number;
  teacherId: number;
  feeAmountSeparator: string;
  totalAmountSeparator: string;
  teacher: Teacher;
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
interface Teacher {
  id: number;
  userAccount: UserAccount;
  teachingExperienceYear: number;
  description: string;
  key: string;
}
interface UserAccount {
  id: number;
  nationalCode: string;
  userName: string;
  phoneNumber: string;
  email: string;
  isAuthorizedUser: boolean;
  identityUserId: number;
  name: string;
  profilePicture: string;
  status: number;
  statusTitle: string;
  tellNumber: string;
  lastName: string;
  fatherName: string;
  birthCertificateId: number;
  gender: number;
  genderTitle: string;
  educationLevel: number;
  educationLevelTitle: string;
  cityOrVillage: ICityOrVillageRes;
  cityOrVillageId: number;
  address: string;
  lat: number;
  lng: number;
  postalCode: string;
  webSite: string;
}
