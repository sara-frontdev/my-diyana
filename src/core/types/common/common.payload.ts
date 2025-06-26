// پیلود هایی که با پیجینشن هستن
export interface IPaginationPayload {
  page?: number;
  pageSize?: number;
}

// GetEducationalLevels -GetLessonGroups
export interface IGetEducationalCommonPayload extends IPaginationPayload {
  request: Request;
}
export interface Request {
  id?: number;
  schoolId?: number;
  title?: string;
  code?: string;
}
