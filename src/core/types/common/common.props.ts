export interface IColumnListTablePropType {
  title: string | React.ReactNode;
  dataIndex?: string | string[];
  key?: string;
  onCell?: () => {};
  render?: (_: any, record: any, index: number) => React.ReactNode;
  className?: string;
  width?: number;
  align?: "left" | "right" | "center";
  hidden?: boolean;
  children?: IColumnListTablePropType[];
  flex?: number; //just for pdfListTable
  diffrentPdfTag?: boolean; // just in pdf
  hiddenInExcle?: boolean; //just for ListTable
  hiddenInPdf?: boolean; //just for ListTable
  includeInExcleTotalSum?: boolean; //just for ListTable
  payloadName?: string; //just in TableSelectOptionComponent
}

export interface IDataList {
  key: string;
  value: string | number;
  isEnglish?: boolean;
  hidden?: boolean;
  size?: number;
}

export interface FormValues {
  title: string;
}
