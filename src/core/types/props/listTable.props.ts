import { AxiosResponse } from "axios";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { pdfOrientationEnum } from "@/core/enums/pdf.enum";

import { IColumnListTablePropType, IDataList } from "../common/common.props";

import { UseMutationResult } from "@tanstack/react-query";

//main componenets
export interface ILisTablePropType<T = { id: number | string }>
  extends ICommonExport {
  //main
  dataSource: any[];
  columns: IColumnListTablePropType[];
  isLoading?: boolean;

  //expandAble
  expandable?: boolean;
  indentSize?: number;
  customeExpand?: boolean;
  childrenColumnName?: string;
  expandedRowRender?: (record: any) => React.ReactNode;
  defaultExpandAllRows?: boolean;
  hasExpandBtn?: boolean;
  expandRowByClick?: boolean;

  //onRow
  onRowOnClick?: (record?: any, index?: number) => void;

  //rowSelection
  rowSelection?: boolean;
  rowSelectionType?: "checkbox" | "radio";

  // selectedRowKeys?: number[] | string[];
  selectedRowKeys?: Array<T extends { id: infer U } ? U : number | string>;

  onChangeRowSelection?: (
    selectedRows: any[],
    selectedRowKeys: number[] | string[],
    info: { type: "all" | "single" }
  ) => void;

  //pagination
  totalNumber?: number;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (currentPage: number, size: number) => void;
  paginationSize?: "small" | "default";
  showTotalNumber?: boolean;

  //helper
  passRef?: React.LegacyRef<HTMLElement>;
  diffrentId?: string;
  tableTitle?: React.ReactNode;
  tableFooter?: React.ReactNode;
  hasScrollSize?: boolean;
  scrollSize?: number;
  scrollYSize?: number;
  hiddenId?: boolean;
  hasExport?: boolean;
  hasCustomeClassName?: boolean;
  rowClassName?: (record: any, index: number) => string;
}

//listTable export
export interface IExportPropType extends ICommonExport {
  dataSource: any[];
  columns: IColumnListTablePropType[];
  totalNumber: number;
  hasPagination?: boolean;
}

export interface ICommonExport {
  reportTitle?: string;
  reportPayload?: any;
  reportMutationHook?: () => UseMutationResult<
    AxiosResponse<IAxiosResult, any>,
    unknown,
    any,
    unknown
  >;

  pdfHeadDataTitle?: string;
  pdfHeadDataItemsPerRow?: number;
  pdfHeadDataList?: IDataList[];
  pdfTotalSumTitle?: string;
  pdfTotalSumList?: IDataList[];
  pdfTotalSumPerItemsPerRow?: number;
  pdfOrientation?: pdfOrientationEnum;
  excleStaticData?: IDataList[];
}
