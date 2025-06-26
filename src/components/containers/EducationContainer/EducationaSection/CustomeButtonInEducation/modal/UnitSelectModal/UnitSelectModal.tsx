"use client";
import { FC, SetStateAction, Suspense, useEffect, useState } from "react";

// lib
import { Form, Formik } from "formik";
import moment from "moment-jalaali";
import DateObject from "react-date-object";

// common
import { FullModal } from "@/components/common/FullModal/FullModal";
// components
import { AddSection } from "./AddSection/AddSection";

// core
import { useGetCalenderCostLessonAttribute } from "@/core/services/api/clinet/CalenderCostLessonAttribute.api";
import {
  IGetCalenderCostLessonAttributeResult,
  IGetCapacityCalenderCostLessonAttributeResult,
} from "@/core/types/response/CalenderCostLessonAttribute.res";
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";
import { ISetCourseUnitSelectInfoByStudentPayload } from "@/core/types/payload/CourseUnitSelect.payload";
import { useSetCourseUnitSelectInfoByStudent } from "@/core/services/api/clinet/CourseUnitSelect.api";
import { generateLessonDates } from "@/core/utils/lessonDateGenerator.utils";
import { useShoppingCartContext } from "@/core/context/ShoppingCartContext";
import { toastTextCartTypeEnum } from "@/core/enums/toastTextCart-type.enum";
import { IDatePropsTypes } from "@/core/types/props/UnitSelect.props";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { ShowToast } from "@/core/hooks/Notifications";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
  selectCLassId: number; //ایدی کلاس انتخاب شده
  item: IGetCostLessonAttributesForCourseUnitSelectlist;
  setSelectedDates: React.Dispatch<
    SetStateAction<IGetCapacityCalenderCostLessonAttributeResult[]>
  >;

  selectedDates: IGetCapacityCalenderCostLessonAttributeResult[];
}

const UnitSelectModal: FC<IPropType> = ({
  isOpen,
  toggleModal,
  selectCLassId,
  item,
  setSelectedDates,
  selectedDates,
}) => {
  // type
  interface IUnitSelectValues {
    dateTimeStartCourseShamsi: string | DateObject | null;
  }

  const [initialValues] = useState<IUnitSelectValues>({
    dateTimeStartCourseShamsi: "",
  });

  const [allDates, setAllDates] = useState<IDatePropsTypes[]>([]); //کل داده=date ,day
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Context
  const { refetchActiveCourseUnitSelectsByStudent } = useShoppingCartContext();

  // var
  const allDatesAddId = allDates.map((item, index) => ({
    ...item,
    id: item.date,
  }));

  // pagination
  const pageSize = 4;
  const [page, setPage] = useState(0);

  //clearSelectedDates
  const clearSelectedDates = () => {
    setSelectedDates([]);
  };

  // api
  // const getCalenderCostLessonAttribute = useGetCalenderCostLessonAttribute();
  const addCourse = useSetCourseUnitSelectInfoByStudent(); //ثبت اطلاعات

  const { data, isSuccess, isLoading } = useGetCalenderCostLessonAttribute(
    selectCLassId, //ایدی اون درس انتخاب شده هست
    Boolean(selectCLassId)
  );

  useEffect(() => {
    if (isSuccess) {
      const result: IGetCalenderCostLessonAttributeResult[] = data?.data.result;

      if (result) {
        const selectedDays = result.map((item) => item.dayOfWeek); //[1,3,5]

        const countClass = item.lessonAttribut.countOfClassSessions || 0;
        const startDate = moment().format("jYYYY/jMM/jDD"); // تاریخ روز جاری

        const generatedDates = generateLessonDates(
          startDate,
          selectedDays,
          countClass
        );

        setAllDates(generatedDates as any);
      }
    }
  }, [isSuccess]);

  // هر بار که مدال باز یا بسته می‌شود، selectedDates را پاک می‌کنیم
  useEffect(() => {
    if (isOpen) {
      setSelectedDates([]);
    }
  }, [isOpen]);
  // onSubmit
  const onSubmit = (value: IUnitSelectValues) => {
    if (selectedDates.length < item.lessonAttribut.countOfClassSessions) {
      ShowToast(
        [
          `شما باید ${item.lessonAttribut.countOfClassSessions} جلسه انتخاب کنید. الان فقط ${selectedDates.length} جلسه انتخاب کرده‌اید.`,
        ],
        toastTypes.warning
      );
      return;
    }

    const payload: ISetCourseUnitSelectInfoByStudentPayload = {
      costLessonAttributeId: selectCLassId,

      dateTimeStartCourseShamsi:
        value.dateTimeStartCourseShamsi &&
        typeof value.dateTimeStartCourseShamsi !== "string"
          ? value.dateTimeStartCourseShamsi.format("YYYY/MM/DD")
          : value.dateTimeStartCourseShamsi || "",

      classCalenderCourseUnits: selectedDates.map((item) => ({
        dayOfWeek: item.dayOfWeek,
        dateTimeClassShamsi: item.dateTimeClassShamshi,
      })),
    };

    addCourse.mutate(payload, {
      onSuccess: () => {
        refetchActiveCourseUnitSelectsByStudent();
        toggleModal();

        ShowToast(
          [toastTextCartTypeEnum.add],
          toastTypes.success,
          undefined,
          "topRight"
        );
      },
    });
  };

  return (
    <Suspense>
      <FullModal
        title="نمایش کلاس ها"
        isOpen={isOpen}
        toggleModal={toggleModal}
        className="bg-white rounded-lg"
        centered
        width={800}
      >
        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <AddSection
                allDatesAddId={allDatesAddId}
                selectedDates={selectedDates}
                setSelectedDates={setSelectedDates}
                clearSelectedDates={clearSelectedDates}
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                selectCLassId={selectCLassId}
                item={item}
                hasUserInteracted={hasUserInteracted}
                setHasUserInteracted={setHasUserInteracted}
              />
            </Form>
          )}
        </Formik>
      </FullModal>
    </Suspense>
  );
};

export default UnitSelectModal;
