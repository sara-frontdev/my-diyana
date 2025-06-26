// base
import { FC } from "react";

// lib
import Image from "next/image";

// compoennts
import { CustomeButtonInEducation } from "@/components/containers/EducationContainer/EducationaSection/CustomeButtonInEducation/CustomeButtonInEducation";

// core
import { typePageEnum } from "@/core/enums/type-page.enum";

// img
import img1 from "$/images/general/zenova_logo.webp";

interface IPropType {
  item?: any; //IGetCostLessonAttributesForCourseUnitSelectlist; //!
  typePage: typePageEnum;
}

const EducationalClasses: FC<IPropType> = ({ item, typePage }) => {
  const cart = typePage === typePageEnum.cart;

  return (
    <div className="product-item  group shadow-xl rounded-lg p-4 mt-4 my-8">
      <div className=" overflow-hidden rounded-xl transition-shadow duration-500 group-hover:shadow-xl">
        <div className="flex justify-center items-center ">
          <Image
            src={img1.src}
            alt={"کلاس های آموزشی"}
            width={285}
            height={173}
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center  py-2">
          <p className="text-base font-bold !customeBlack">گروه سنی</p>
          <p className="text-base  !text-customeGrayText pr-2">
            {cart
              ? item?.lessonAttribut?.lessonAttribut?.educationalLevel?.title
              : item?.lessonAttribut?.educationalLevel?.title}
          </p>
        </div>

        <div className="flex items-center py-2">
          <p className="text-base font-bold !customeBlack">گروه آموزشی</p>
          <p className="text-base  !text-customeGrayText pr-2">
            {cart
              ? item?.costLessonAttribute?.lessonAttribut?.lesson?.lessonGroup
                  ?.title
              : item?.lessonAttribut?.lesson?.lessonGroup?.title}
          </p>
        </div>

        <div className="flex items-center  py-2">
          <p className="text-base font-bold !customeBlack"> کلاس آموزشی</p>
          <p className="text-base  !text-customeGrayText pr-2">
            {cart
              ? item?.costLessonAttribute?.lessonAttribut?.lesson?.title
              : item?.lessonAttribut?.lesson?.title}
          </p>
        </div>

        <div className="flex items-center  py-2">
          <p className="text-base font-bold !customeBlack"> شیفت برگزاری</p>
          <p className="text-base  !text-customeGrayText pr-2">
            {cart
              ? item?.costLessonAttribute?.lessonAttribut?.timeShiftTitle
              : item?.lessonAttribut?.timeShiftTitle}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center  py-2">
            <p className="text-base font-bold !customeBlack"> ساعت شروع</p>
            <p className="text-base  !text-customeGrayText pr-2">
              {cart
                ? item.costLessonAttribute.lessonAttribut.fromTimeStr
                : item?.lessonAttribut?.fromTimeStr}
            </p>
          </div>
          <div className="flex items-center  py-2">
            <p className="text-base font-bold !customeBlack"> ساعت پایان</p>
            <p className="text-base  !text-customeGrayText pr-2">
              {cart
                ? item?.costLessonAttribute?.lessonAttribut?.toTimeStr
                : item?.lessonAttribut?.toTimeStr}
            </p>
          </div>
        </div>

        <div className="flex items-center  py-2">
          <p className="text-base font-bold !customeBlack">
            {" "}
            مجموع ساعت برگزاری
          </p>
          <p className="text-base  !text-customeGrayText pr-2">
            {cart
              ? item?.costLessonAttribute?.lessonAttribut?.sumTime
              : item?.lessonAttribut?.sumTime}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center  py-2">
            <p className="text-base font-bold !customeBlack"> مبلغ پایه</p>
            <p className="text-xl  !text-customeGrayText pr-2">
              {cart
                ? item?.costLessonAttribute?.feeAmountSeparator
                : item?.feeAmountSeparator}
            </p>
          </div>

          <div className="flex items-center  py-2">
            <p className="text-base font-bold !customeBlack"> مبلغ کل</p>
            <p className="text-xl  !text-customeGrayText pr-2">
              {cart
                ? item?.costLessonAttribute?.totalAmountSeparator
                : item?.totalAmountSeparator}
            </p>
          </div>
        </div>

        <CustomeButtonInEducation id={Number(item?.id)} item={item} />
      </div>
    </div>
  );
};

export { EducationalClasses };
