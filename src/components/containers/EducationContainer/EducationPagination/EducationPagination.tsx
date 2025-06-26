"use client";

// base
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { FullPagination } from "@/components/common/FullPagination/FullPagination";

// components
import { useGetCostLessonAttributesForCourseUnitSelect } from "@/core/services/api/clinet/CostLessonAttribute.api";
import {
  IGetCostLessonAttributesForCourseUnitSelectlist,
  IGetCostLessonAttributesForCourseUnitSelectResult,
} from "@/core/types/response/CostLessonAttribute.res";

interface IPropType {
  filtersApi: {
    educationalLevelId: number;
    lessonGroupId: number;
    lessonId: number;
    lessonAttributId: number;
    fromTotalAmount: number;
    toTotalAmount: number;
  };

  initialData: IGetCostLessonAttributesForCourseUnitSelectlist[];

  setData: Dispatch<
    SetStateAction<IGetCostLessonAttributesForCourseUnitSelectlist[]>
  >;

  setLoading: Dispatch<SetStateAction<boolean>>;
}

const EducationPagination: FC<IPropType> = ({
  filtersApi,
  setData,
  setLoading,
}) => {
  const [page, setPage] = useState(1); //شماره صفحه فعلی کاربر
  const [pageSize, setPageSize] = useState(10); //تعدا ایتم هایی که توی هر صفحه نمایش داده بشه
  const [totalNumber, setTotalNumber] = useState(0); // کل آیتم‌های موجود (برای محاسبه تعداد صفحات از ای پی ای)

  const getMutation = useGetCostLessonAttributesForCourseUnitSelect();

  useEffect(() => {
    setLoading(true); // 👈 لودینگ شروع

    getMutation.mutate(
      {
        page,
        pageSize,
        request: filtersApi,
      },
      {
        onSuccess: (data) => {
          const result: IGetCostLessonAttributesForCourseUnitSelectResult =
            data.data.result;
          if (result) {
            setData(result.items);
            setTotalNumber(result.totalCount);
          }
        },
        onSettled: () => {
          setLoading(false); // 👈 لودینگ تموم
        },
      }
    );
  }, [filtersApi]);

  return (
    <FullPagination
      isLoading={getMutation.isLoading}
      totalNumber={totalNumber}
      page={page}
      setPage={setPage}
      pageSize={pageSize}
      setPageSize={setPageSize}
      onPaginationChange={(page, pageSize) => {
        setLoading(true);
        getMutation.mutate(
          {
            page,
            pageSize,
            request: filtersApi,
          },
          {
            onSuccess: (data) => {
              const result = data.data.result;
              if (result) {
                setData(result.items);
                setTotalNumber(result.totalCount);
              }
            },
            onSettled: () => {
              setLoading(false);
            },
          }
        );
      }}
    />
  );
};

export { EducationPagination };

// -----نکته----
// setTotalNumber
// برای اینکه بفهمی چند صفحه داری،
// باید بدونی کل دیتا چقدره.
// مثلاً اگه ۱۰۰
//  آیتم داری و
// pageSize = 25
//  باشه
// ، یعنی ۴ صفحه داری.
