// core
import { IColumnListTablePropType } from "@/core/types/common/common.props";

export const Columns = (): IColumnListTablePropType[] => [
  {
    align: "center",
    width: 100,
    title: " تاریخ",
    dataIndex: "dateTimeClassShamshi",
  },
  {
    align: "center",
    width: 100,
    title: "روز هفته",
    dataIndex: "dayOfWeekTitle",
  },
];
