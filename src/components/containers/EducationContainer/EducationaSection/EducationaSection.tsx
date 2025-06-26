"use client";

// base
import { FC, useState } from "react";

// common
import { EducationalClasses } from "@/components/commonComponents/EducationalClasses/EducationalClasses";
import { EmptyData } from "@/components/common/EmptyData/EmptyData";

// components
import { EducationPagination } from "../EducationPagination/EducationPagination";

// core
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";
import { typePageEnum } from "@/core/enums/type-page.enum";

import empty from "$/images/general/empty.webp";
import { EducationalClassesSkeleton } from "@/components/commonComponents/EducationalClassesSkeleton/EducationalClassesSkeleton";

interface IPropType {
  initialData: IGetCostLessonAttributesForCourseUnitSelectlist[];
  filtersApi: {
    educationalLevelId: number;
    lessonGroupId: number;
    lessonId: number;
    lessonAttributId: number;
    fromTotalAmount: number;
    toTotalAmount: number;
  };
}

const EducationaSection: FC<IPropType> = ({ initialData, filtersApi }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 w-[95%] mx-auto">
          {Array.from({ length: 4 }).map((_, idx) => (
            <EducationalClassesSkeleton key={idx} />
          ))}
        </div>
      ) : data?.length ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 w-[95%] mx-auto">
          {data.map((item) => (
            <EducationalClasses
              key={item.id}
              item={item}
              typePage={typePageEnum.education}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <EmptyData
            image={empty.src}
            description="کلاس های آموزشی وجود ندارد"
          />
        </div>
      )}

      <EducationPagination
        filtersApi={filtersApi}
        initialData={initialData}
        setData={setData}
        setLoading={setLoading}
      />
    </>
  );
};

export { EducationaSection };
