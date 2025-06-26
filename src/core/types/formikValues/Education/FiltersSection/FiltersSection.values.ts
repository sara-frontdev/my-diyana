import { ISingleSelectOption } from "@/core/models/general.model";

export interface IFiltersSectionValues {
  educationalLevels: ISingleSelectOption;
  lessonGroups: ISingleSelectOption;
  lessons: ISingleSelectOption;
  lessonAttributs: ISingleSelectOption;
  fromTotalAmount: number;
  toTotalAmount: number;
}
