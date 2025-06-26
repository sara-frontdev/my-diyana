// components
import { EducationaSection } from "./EducationaSection/EducationaSection";
import { FiltersSection } from "./FiltersSection/FiltersSection";

// core
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";

interface IPropsType {
  filtersApi: {
    educationalLevelId: number;
    lessonGroupId: number;
    lessonId: number;
    lessonAttributId: number;
    fromTotalAmount: number;
    toTotalAmount: number;
  };
  educationClasses: IGetCostLessonAttributesForCourseUnitSelectlist[];
}

const EducationContainer = ({ filtersApi, educationClasses }: IPropsType) => {
  return (
    <section>
      <FiltersSection />

      <EducationaSection
        initialData={educationClasses}
        filtersApi={filtersApi}
      />
    </section>
  );
};

export { EducationContainer };
