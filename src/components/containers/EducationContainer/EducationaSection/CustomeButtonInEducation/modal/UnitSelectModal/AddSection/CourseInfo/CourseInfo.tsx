import { FC, Suspense } from "react";

// core
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";

interface IPropType {
  item: IGetCostLessonAttributesForCourseUnitSelectlist;
}

const CourseInfo: FC<IPropType> = ({ item }) => {
  return (
    <Suspense>
      <div>
        <section
          className=" grid grid-cols-1 md:grid-cols-2
        items-center gap-2 mt-2 mr-3 md:mr-0"
        >
          <section className="listItem">
            <span> تعداد کل جلسات : </span>
            <span className="font-bold text-sky-700">
              {item.lessonAttribut.countOfClassSessions}
            </span>
          </section>

          <section className="listItem">
            <span> گروه سنی : </span>
            <span className="font-bold text-sky-700">
              {item?.lessonAttribut?.educationalLevel?.title}
            </span>
          </section>
        </section>

        <section
          className=" grid grid-cols-1 md:grid-cols-2
        items-center gap-2 mt-2 mr-3 md:mr-0"
        >
          <section className="listItem">
            <span> گروه آموزشی : </span>
            <span className="font-bold text-sky-700">
              {item?.lessonAttribut?.lesson?.lessonGroup.title}
            </span>
          </section>

          <section className="listItem">
            <span> کلاس آموزشی : </span>
            <span className="font-bold text-sky-700">
              {item?.lessonAttribut?.lesson?.title}
            </span>
          </section>
        </section>
      </div>
    </Suspense>
  );
};

export { CourseInfo };
