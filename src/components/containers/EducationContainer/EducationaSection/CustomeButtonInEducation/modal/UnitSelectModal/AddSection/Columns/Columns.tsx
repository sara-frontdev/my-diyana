import { IColumnListTablePropType } from "@/core/types/common/common.props";

export const Columns = (): IColumnListTablePropType[] => [
  {
    align: "center",
    width: 70,
    title: "روزهفته",
    dataIndex: "dayOfWeekTitle",
  },
  {
    align: "center",
    width: 70,
    title: "تاریخ",
    dataIndex: "dateTimeClassShamshi",
  },
  {
    align: "center",
    width: 70,
    title: "ظرفیت تکمیل شده",
    dataIndex: "completedCapacity",
  },

  {
    align: "center",
    width: 70,
    title: "ظرفیت کل جلسه",
    dataIndex: "totalCapacity",
  },
  {
    align: "center",
    width: 70,
    title: "ظرفیت باقی مانده",
    dataIndex: "remainingCapacity",
  },
];
