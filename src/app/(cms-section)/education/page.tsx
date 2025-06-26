import { Metadata } from "next";

// componnets
import { EducationContainer } from "@/components/containers/EducationContainer/EducationContainer";

// core
import { GetCostLessonAttributesForCourseUnitSelect } from "@/core/services/api/server/CostLessonAttribute.api";
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";

export const metadata: Metadata = {
  title: "  آموزش  |  مهد کودک دیانا",
  description: "به مهد کودک دیانا خوش  آمدید",
};

const Education = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let filtersApi = {
    educationalLevelId: Number(searchParams?.educationalLevelId) || 0,
    lessonGroupId: Number(searchParams?.lessonGroupId) || 0,
    lessonId: Number(searchParams?.lessonId) || 0,
    lessonAttributId: Number(searchParams?.lessonAttributId) || 0,
    fromTotalAmount: Number(searchParams?.fromTotalAmount) || 0,
    toTotalAmount: Number(searchParams?.toTotalAmount) || 0,
  };

  /* --------- api GetCostLessonAttributesForCourseUnitSelect----------- */

  let educationClasses: IGetCostLessonAttributesForCourseUnitSelectlist[] = [];

  try {
    const result = await GetCostLessonAttributesForCourseUnitSelect({
      page: 1,
      pageSize: 50,
      request: {
        ...filtersApi,
      },
    });

    if (result?.items?.length > 0) {
      educationClasses = result.items;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <EducationContainer
      filtersApi={filtersApi}
      educationClasses={educationClasses}
    />
  );
};

export default Education;
