"use client";
import { FC } from "react";

import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";

// components
import { Filters } from "./Filters/Filters";

// core
import { IFiltersSectionValues } from "@/core/types/formikValues/Education/FiltersSection/FiltersSection.values";
import { useGetCostLessonAttributesForCourseUnitSelect } from "@/core/services/api/clinet/CostLessonAttribute.api";

const FiltersSection: FC = () => {
  const initialValues: IFiltersSectionValues = {
    educationalLevels: null,
    lessonGroups: null,
    lessons: null,
    lessonAttributs: null,
    fromTotalAmount: 0,
    toTotalAmount: 0,
  };

  const router = useRouter();

  // Api
  const getMutation = useGetCostLessonAttributesForCourseUnitSelect();

  // پاک‌سازی (filter) پارامترهای جستجو (query params) قبل از ساختن
  // URL،
  // تا فقط فیلدهایی که مقدار معتبر دارن باقی بمونن.

  // filterQueryParams
  const filterQueryParams = (params: Record<string, any>) => {
    return Object.fromEntries(
      Object.entries(params).filter(([key, value]) => {
        if (key === "fromTotalAmount" || key === "toTotalAmount") {
          return value !== 0;
        }
        return value != null;
      })
    );
  };

  // onSubmit
  const onSubmit = (values: IFiltersSectionValues) => {
    const queryParams = {
      educationalLevelId: values.educationalLevels?.value,
      lessonGroupId: values.lessonGroups?.value,
      lessonId: values.lessons?.value,
      lessonAttributId: values.lessonAttributs?.value,
      fromTotalAmount: values.fromTotalAmount,
      toTotalAmount: values.toTotalAmount,
    };

    const filteredQueryParams = filterQueryParams(queryParams);

    const queryString = new URLSearchParams(filteredQueryParams).toString();

    router.push(`/education?${queryString}`);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="flex flex-col justify-center mx-16 md:mx-20">
            <Filters isLoading={getMutation.isLoading} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export { FiltersSection };
