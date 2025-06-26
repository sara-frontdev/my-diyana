export interface IGetLessonsResult {
  count: number;
  totalCount: number;
  currentPage: number;
  items: IGetLessonsList[];
}
export interface IGetLessonsList {
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
