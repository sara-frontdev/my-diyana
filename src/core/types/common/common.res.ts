// ریسپانس هایی که با پیجینشن هستن
export interface IPaginateListRes {
  count: number;
  totalCount: number;
  currentPage: number;
}

//key and value res
export interface IKeyValueRes {
  key: number;
  value: string;
}

//city or village
export interface ICityOrVillageRes {
  id: number;
  title: string;
  part: IPartRes;
}

export interface IPartRes {
  id: number;
  title: string;
  county: ICountyRes;
}

export interface ICountyRes {
  id: number;
  title: string;
  province: IProvinceRes;
}

export interface IProvinceRes {
  id: number;
  title: string;
  mainLocation: IMainLocationRes;
}

export interface IMainLocationRes {
  id: number;
  title: string;
}

//user
export interface IUserRes {
  id: number;
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

// ***********************

// GetEducationalLevels -GetLessonGroups
export interface IGetEducationalCommonResult extends IPaginateListRes {
  items: IGetEducationalLevelslist[];
}

export interface IGetEducationalLevelslist {
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

// *********************************

// GetActiveCourseUnitSelectsByStudent -GetCourseUnitSelectsByStudent

export interface IUserAccountRes {
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

export interface IOrderCourseUnitSelectRes {
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
}

export interface IStudentRes {
  key: string;
  userAccount: IUserAccountRes;
  bloodTypeTitle: string;
  id: number;
  schoolId: number;
  doParentsLiveTogether?: any;
  bloodType?: any;
  heartDisease?: any;
  speechProblem?: any;
  hearingProblem?: any;
  visionProblem?: any;
  sugarProblem?: any;
  autism?: any;
  urinaryDay?: any;
  digestiveDisease?: any;
  hypersensitivity?: any;
  anxiety?: any;
  fingerSucking?: any;
  nailBiting?: any;
  breathingProblem?: any;
  hyperactive?: any;
  foodAllergyDescription?: any;
  foodProhibitionDescription?: any;
  takingMedicationDescription?: any;
  phobiaDescription?: any;
  otherDescription?: any;
}

export interface ITeacherRes {
  id: number;
  userAccount: IUserAccountRes;
  teachingExperienceYear: number;
  description: string;
  key: string;
}

export interface IEducationalLevelRes {
  school?: any;
  id: number;
  schoolId: number;
  title: string;
  code?: any;
}

export interface ILessonGroupRes {
  schoolId: number;
  id: number;
  title: string;
  code?: any;
}

export interface ILessonRes {
  lessonGroup: ILessonGroupRes;
  lessonGroupId: number;
  title: string;
  code?: any;
  id: number;
}
