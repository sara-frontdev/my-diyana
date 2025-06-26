// base
import { FC, Suspense, useMemo, useState } from "react";
import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

// lib
import { useFormikContext } from "formik";

// componeents
import { FullSelectOption } from "@/components/common/Form/FullSelectOption/FullSelectOption";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { ColAnt } from "@/components/common/ColAnt/ColAnt";
import { RowAnt } from "@/components/common/RowAnt/RowAnt";

// core
import { useGetEducationalLevels } from "@/core/services/api/clinet/EducationalLevel.api";
import { useGetLessonGroups } from "@/core/services/api/clinet/LessonGroup.api";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { ISelectOption } from "@/core/models/general.model";
import { buttonTypeEnum } from "@/core/enums/button.enum";
import {
  GetLessons,
  useGetLessons,
} from "@/core/services/api/clinet/Lesson.api";
import {
  GetLessonAttributs,
  useGetLessonAttributs,
} from "@/core/services/api/clinet/LessonAttribut.api";

import { IGetLessonAttributsList } from "@/core/types/response/LessonAttribut.res";
import { IGetLessonsList } from "@/core/types/response/Lesson.res";
import { IGetEducationalLevelslist } from "@/core/types/common/common.res";

interface IPropType {
  isLoading: boolean;
}

const Filters: FC<IPropType> = ({ isLoading }) => {
  const [lessonsFilterList, setLessonsFilterList] = useState<ISelectOption[]>(
    []
  ); // درس‌های مربوط به یک گروه خاص (بعد از انتخاب گروه درسی):
  const [LessonAttributsFilterList, setLessonAttributsFilterList] = useState<
    ISelectOption[]
  >([]);

  // console.log("lessonsFilterList", lessonsFilterList);

  //formik context
  const { setFieldValue } = useFormikContext();

  /* --------- api GetEducationalLevels گروه سنی----------- */

  const { data: educationLevelsList, isLoading: isEducationLevelsLoading } =
    useGetEducationalLevels({
      page: 1,
      pageSize: 1000,
      request: {},
    });

  /* --------- api GetLessonGroups گروه آموزشی----------- */

  const { data: LessonGroupsList, isLoading: isLessonGroupsLoading } =
    useGetLessonGroups({
      page: 1,
      pageSize: 1000,
      request: {},
    });

  /* --------- api GetLessons  کلاس آموزشی----------- */

  const { data: allLessonsList, isLoading: isLessonsLoading } = useGetLessons({
    page: 1,
    pageSize: 1000,
    request: {},
  });

  // براساس یه ایدی خاض
  const getLesson = useMutation(GetLessons, {
    onSuccess: (res: AxiosResponse<IAxiosResult>) => {
      const result = res.data.result;
      console.log("result99999", result);
      if (result.items) {
        setLessonsFilterList(
          result.items.map((item: IGetLessonsList) => ({
            value: item.id,
            label: item?.title,
          }))
        );
      }
    },
  });

  //var
  const mappedAllLessons = useMemo(() => {
    return (
      allLessonsList?.data.result.items?.map((item: IGetLessonsList) => ({
        value: item.id,
        label: item?.title,
      })) ?? []
    );
  }, [allLessonsList]);

  const finalLessons =
    lessonsFilterList.length > 0 ? lessonsFilterList : mappedAllLessons;

  /* --------- api getLessonAttributs  حصوصیات کلاس----------- */

  const { data: allLessonAttributsList, isLoading: isLessonAttributsLoading } =
    useGetLessonAttributs({
      page: 1,
      pageSize: 1000,
      request: {},
    });

  const getLessonAttributs = useMutation(GetLessonAttributs, {
    onSuccess: (res: AxiosResponse<IAxiosResult>) => {
      const result = res.data.result;

      if (result.items) {
        setLessonAttributsFilterList(
          result.items.map((item: IGetLessonAttributsList) => ({
            value: item.id,
            label: `
            ${item.fromTimeStr} 
            - ${item.toTimeStr}
            - ${item.sumTime}`,
          }))
        );
      }
    },
  });

  // یوزممو باعث میشه که این مپ فقط وقتی دوباره اجرا بشه که
  // allLessonAttributsList
  // تغییر کرده باشه.
  const mappedAllLessonAttributs = useMemo(() => {
    return (
      allLessonAttributsList?.data?.result?.items?.map(
        (item: IGetLessonAttributsList) => ({
          value: item.id,
          label: `${item.fromTimeStr} - ${item.toTimeStr} - ${item.sumTime}`,
        })
      ) ?? []
    );
  }, [allLessonAttributsList]);

  // انتخاب نهایی برای dropdown
  const finalLessonAttributs =
    LessonAttributsFilterList.length > 0
      ? LessonAttributsFilterList
      : mappedAllLessonAttributs;

  /* ---------------------handleLessonGroupsChange----------------------- */

  const handleLessonGroupsChange = (param: ISelectOption<string | number>) => {
    setFieldValue("lessons", null);
    setFieldValue("lessonAttributs", null);

    const paramSelected =
      typeof param.value === "string" ? parseInt(param.value, 10) : param.value;

    // getLesson
    getLesson.mutate({
      page: 1,
      pageSize: 1000,
      request: {
        lessonGroupId: paramSelected, // ایدی گروه درسی در ای پی ای کلاس اموزشی
      },
    });

    // getLessonAttributs
    getLessonAttributs.mutate({
      page: 1,
      pageSize: 1000,
      request: {
        educationalLevelId: paramSelected,
      },
    });
  };

  return (
    <Suspense>
      <RowAnt className="mt-8">
        <ColAnt xs={24} md={8} lg={4}>
          <FullSelectOption
            name="educationalLevels"
            options={educationLevelsList?.result?.items?.map(
              (item: IGetEducationalLevelslist) => ({
                value: item.id,
                label: item.title,
              })
            )}
            isLoading={isEducationLevelsLoading}
            labelText="گروه سنی"
            clearable
            significant={false}
            forSearching
          />
        </ColAnt>

        <ColAnt xs={24} md={8} lg={6}>
          <FullSelectOption
            name="lessonGroups"
            options={LessonGroupsList?.result?.items?.map(
              (item: IGetEducationalLevelslist) => ({
                value: item.id,
                label: item.title,
              })
            )}
            isLoading={isLessonGroupsLoading}
            onChange={(
              value?:
                | ISelectOption<string | number>
                | ISelectOption<string | number>[]
            ) => {
              if (Array.isArray(value) || !value) return;

              const selected = value as ISelectOption<number | string>;
              handleLessonGroupsChange(selected);
            }}
            labelText="گروه آموزشی"
            clearable
            significant={false}
            forSearching
          />
        </ColAnt>

        <ColAnt xs={24} md={8} lg={8}>
          <FullSelectOption
            name="lessons"
            options={finalLessons}
            isLoading={isLessonsLoading}
            labelText="کلاس آموزشی"
            clearable
            significant={false}
            forSearching
          />
        </ColAnt>

        <ColAnt xs={24} md={16} lg={5}>
          <FullSelectOption
            name="lessonAttributs"
            options={finalLessonAttributs}
            isLoading={isLessonAttributsLoading}
            labelText=" خصوصیات کلاس"
            clearable
            significant={false}
            forSearching
          />
        </ColAnt>

        <ColAnt xs={24} md={8} lg={4}>
          <TextInput
            name="fromTotalAmount"
            clearable
            labelText="از مبلغ شهریه"
            significant={false}
            forSearching
            seprator
          />
        </ColAnt>

        <ColAnt xs={24} md={8} lg={4}>
          <TextInput
            name="toTotalAmount"
            clearable
            labelText="تا  مبلغ شهریه"
            significant={false}
            forSearching
            seprator
          />
        </ColAnt>
      </RowAnt>

      <RowAnt>
        <ColAnt className="my-8">
          <FullButton
            hasBaseBtn={false}
            searchBtnText="جستجو"
            isSearchAble
            searchBtnType={buttonTypeEnum.submit}
            searchIsLoading={isLoading}
            searchBtnClassName={"!bg-[#26b4d7] hover:!bg-customeOrange"}
          />
        </ColAnt>
      </RowAnt>
    </Suspense>
  );
};

export { Filters };
