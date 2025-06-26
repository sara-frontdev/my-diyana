import { FC } from "react";

// components
import { EducationalClasses } from "@/components/commonComponents/EducationalClasses/EducationalClasses";

// core
import { CourseUnitSelect } from "@/core/types/response/CourseUnitSelect.res";
import { typePageEnum } from "@/core/enums/type-page.enum";

interface IPropType {
  cartItem: CourseUnitSelect[];
}

const SelectedBasketCourse: FC<IPropType> = ({ cartItem }) => {
  return (
    <div className="grid sm:grid-cols-2  gap-4  w-[95%] mx-auto">
      {cartItem.map((item, index) => {
        return (
          <EducationalClasses
            key={index}
            item={item}
            typePage={typePageEnum.cart}
          />
        );
      })}
    </div>
  );
};

export { SelectedBasketCourse };
