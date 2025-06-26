// base
import {
  Dispatch,
  FC,
  SetStateAction,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AxiosResponse } from "axios";

// lib
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// common
import { FullDatePicker } from "@/components/common/FullDatePicker/FullDatePicker";
import { DividerAnt } from "@/components/common/Divider/DividerAnt/DividerAnt";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { ListTable } from "@/components/common/Tables/ListTable/ListTable";
import { ColAnt } from "@/components/common/ColAnt/ColAnt";
import { RowAnt } from "@/components/common/RowAnt/RowAnt";

// components
import { CourseInfo } from "./CourseInfo/CourseInfo";
import { Paginate } from "./Paginate/Paginate";

// components
import { Columns } from "./Columns/Columns";

// core
import { IGetCapacityCalenderCostLessonAttributePayload } from "@/core/types/payload/CalenderCostLessonAttribute.payload";
import { useGetCapacityCalenderCostLessonAttribute } from "@/core/services/api/clinet/CalenderCostLessonAttribute.api";
import { IGetCapacityCalenderCostLessonAttributeResult } from "@/core/types/response/CalenderCostLessonAttribute.res";
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";
import { btnTextTypeEnum, buttonTypeEnum } from "@/core/enums/button.enum";
import { IDatePropsTypes } from "@/core/types/props/UnitSelect.props";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { ShowToast } from "@/core/hooks/Notifications";

interface IPropType {
  allDatesAddId: IDatePropsTypes[];
  selectedDates: IGetCapacityCalenderCostLessonAttributeResult[];
  setSelectedDates: Dispatch<
    SetStateAction<IGetCapacityCalenderCostLessonAttributeResult[]>
  >;
  clearSelectedDates: () => void;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  pageSize: number;
  selectCLassId: number;
  item: IGetCostLessonAttributesForCourseUnitSelectlist;
  hasUserInteracted: boolean;
  setHasUserInteracted: Dispatch<SetStateAction<boolean>>;
}

const AddSection: FC<IPropType> = ({
  allDatesAddId,
  selectedDates,
  setSelectedDates,
  clearSelectedDates,
  setPage,
  pageSize,
  page,
  selectCLassId,
  item,
  hasUserInteracted,
  setHasUserInteracted,
}) => {
  const [
    capacityCalenderCostLessonAttributeList,
    setCapacityCalenderCostLessonAttribute,
  ] = useState<IGetCapacityCalenderCostLessonAttributeResult[]>([]);

  const [showCalenderModal, SetShowCalenderModal] = useState<boolean>(false);

  const toastShownRef = useRef(false);

  // api
  const getCapacityCalenderCostLessonAttribute =
    useGetCapacityCalenderCostLessonAttribute();

  const handleCapacityCalenderCostLessonAttributeChange = () => {
    const payload: IGetCapacityCalenderCostLessonAttributePayload = {
      costLessonAttributeId: selectCLassId,
      dayCapacity: allDatesAddId.map((item) => ({
        dayOfWeek: item.day,
        dateTimeClassShamshi: item.date,
      })),
    };

    getCapacityCalenderCostLessonAttribute.mutate(payload, {
      onSuccess: (response: AxiosResponse<IAxiosResult>) => {
        const dataWithId = response.data.result.map((item: any) => ({
          ...item,
          id: item.dateTimeClassShamshi,
        }));

        setCapacityCalenderCostLessonAttribute(dataWithId);
        setPage(0); // reset to first page
      },
    });
  };

  //  کنترل نمایش پیام "همه جلسات با موفقیت انتخاب شدند" استفاده می‌شه براساس انتخاب کاربر
  useEffect(() => {
    if (
      selectedDates.length === item.lessonAttribut.countOfClassSessions &&
      hasUserInteracted &&
      !toastShownRef.current
    ) {
      ShowToast(["همه جلسات با موفقیت انتخاب شدند."], toastTypes.success);
      toastShownRef.current = true;
    }

    if (
      (selectedDates.length < item.lessonAttribut.countOfClassSessions ||
        !hasUserInteracted) &&
      toastShownRef.current
    ) {
      toastShownRef.current = false;
    }
  }, [
    selectedDates,
    item.lessonAttribut.countOfClassSessions,
    hasUserInteracted,
  ]);

  // Pagination on capacity list
  const paginatedCapacityList = useMemo(() => {
    return capacityCalenderCostLessonAttributeList.slice(
      page * pageSize,
      (page + 1) * pageSize
    );
  }, [page, pageSize, capacityCalenderCostLessonAttributeList]);

  return (
    <Suspense>
      <CourseInfo item={item} />
      <DividerAnt text="تقویم کلاسی " />

      <div>
        <section
          className=" grid grid-cols-1 md:grid-cols-2
        items-center gap-2 mt-2 mr-3 md:mr-0"
        >
          <section className="listItem">
            <span> تعدا جلسات انتخابی شما : </span>
            <span className="font-bold text-sky-700">
              {selectedDates.length}
            </span>
          </section>
        </section>
      </div>

      <RowAnt className="flex !items-end mt-4">
        <ColAnt xs={24} md={8}>
          <FullDatePicker
            name="dateTimeStartCourseShamsi"
            label="انتخاب تاریخ جاری:"
          />
        </ColAnt>

        <ColAnt xs={24} md={6}>
          <FullButton
            className="!h-[26px]"
            btnText="مشاهده تقویم"
            type={buttonTypeEnum.button}
            onClick={() => {
              handleCapacityCalenderCostLessonAttributeChange();
              SetShowCalenderModal(true);
            }}
          />
        </ColAnt>
      </RowAnt>

      {showCalenderModal &&
        (getCapacityCalenderCostLessonAttribute.isLoading ? (
          <div className="flex justify-center items-center h-[150px]">
            <AiOutlineLoading3Quarters className="animate-spin text-2xl text-blue-500" />
          </div>
        ) : (
          <section className="mt-8">
            <ListTable
              dataSource={paginatedCapacityList}
              columns={Columns()}
              isLoading={getCapacityCalenderCostLessonAttribute.isLoading}
              hiddenId
              hasExport={false}
              rowSelection
              selectedRowKeys={selectedDates.map(
                (item) => item.dateTimeClassShamshi
              )}
              onChangeRowSelection={(
                newSelectedRows: IGetCapacityCalenderCostLessonAttributeResult[]
              ) => {
                const currentPageIds = paginatedCapacityList.map(
                  (item) => item.id
                );

                const withoutCurrentPage = selectedDates.filter(
                  (item) =>
                    !currentPageIds
                      .map(String)
                      .includes(item.dateTimeClassShamshi)
                );

                const merged = [...withoutCurrentPage, ...newSelectedRows];

                const uniqueById = merged.filter(
                  (item, index, self) =>
                    index ===
                    self.findIndex(
                      (t) =>
                        t.dateTimeClassShamshi === item.dateTimeClassShamshi
                    ) // مقایسه بر اساس dateTimeClassShamshi
                );

                setSelectedDates(uniqueById);
                setHasUserInteracted(true);
              }}
            />

            {/* Pagination buttons */}
            <Paginate
              page={page}
              setPage={setPage}
              pageSize={pageSize}
              clearSelectedDates={clearSelectedDates}
              capacityCalenderCostLessonAttributeList={
                capacityCalenderCostLessonAttributeList
              }
              selectedDates={selectedDates}
              item={item}
            />

            {/* buttton submit */}
            <RowAnt className="mt-2 flex justify-end">
              <FullButton btnText={btnTextTypeEnum.add} />
            </RowAnt>
          </section>
        ))}
    </Suspense>
  );
};

export { AddSection };
