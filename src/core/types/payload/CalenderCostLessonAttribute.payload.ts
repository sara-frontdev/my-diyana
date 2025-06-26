export interface IGetCapacityCalenderCostLessonAttributePayload {
  costLessonAttributeId: number;
  dayCapacity: DayCapacity[];
}
interface DayCapacity {
  dayOfWeek: number;
  dateTimeClassShamshi: string;
}
