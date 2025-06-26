import { FC, SetStateAction, Suspense } from "react";

// common
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { ColAnt } from "@/components/common/ColAnt/ColAnt";
import { RowAnt } from "@/components/common/RowAnt/RowAnt";
import { buttonTypeEnum } from "@/core/enums/button.enum";

// core
import { IGetCapacityCalenderCostLessonAttributeResult } from "@/core/types/response/CalenderCostLessonAttribute.res";
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";

interface IPropType {
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  pageSize: number;
  clearSelectedDates: () => void;
  capacityCalenderCostLessonAttributeList: IGetCapacityCalenderCostLessonAttributeResult[];
  selectedDates: IGetCapacityCalenderCostLessonAttributeResult[];
  item: IGetCostLessonAttributesForCourseUnitSelectlist;
}

const Paginate: FC<IPropType> = ({
  page,
  setPage,
  pageSize,
  clearSelectedDates,
  capacityCalenderCostLessonAttributeList,
  selectedDates,
  item,
}) => {
  return (
    <Suspense>
      <RowAnt className="mt-4">
        <ColAnt>
          <FullButton
            type={buttonTypeEnum.button}
            disabled={page === 0}
            btnText="قبلی"
            className={`${
              page === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } px-4 py-2 rounded-md`}
            onClick={() => setPage((prev) => prev - 1)}
            clearOnClick={clearSelectedDates}
          />
        </ColAnt>
        <ColAnt>
          <FullButton
            type={buttonTypeEnum.button}
            disabled={
              (page + 1) * pageSize >=
                capacityCalenderCostLessonAttributeList.length ||
              selectedDates.length >= item.lessonAttribut.countOfClassSessions
            }
            btnText="بعدی"
            className={`${
              (page + 1) * pageSize >=
                capacityCalenderCostLessonAttributeList.length ||
              selectedDates.length >= item.lessonAttribut.countOfClassSessions
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } px-4 py-2 rounded-md`}
            onClick={() => setPage((prev) => prev + 1)}
            clearOnClick={clearSelectedDates}
          />
        </ColAnt>
      </RowAnt>
    </Suspense>
  );
};

export { Paginate };
