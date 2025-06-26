"use client";

//base
import { FC, useRef, useState } from "react";

//lib
import { Empty, Table } from "antd";

//core
import { ILisTablePropType } from "@/core/types/props/listTable.props";
import { useCopyToClipboard } from "@/core/hooks/useCopyToClipboard.hook";

const ListTable: FC<ILisTablePropType> = ({
  //main
  dataSource,
  columns,
  isLoading,

  //expandable
  expandable = false,
  indentSize,
  customeExpand,
  childrenColumnName = "children",
  expandedRowRender,
  defaultExpandAllRows,

  expandRowByClick = true,

  //rowSelection
  rowSelection,
  rowSelectionType = "checkbox",
  selectedRowKeys,
  onChangeRowSelection,
  onRowOnClick,

  //pagination
  totalNumber,
  page = 1,
  setPage,
  pageSize = 1000,
  setPageSize,
  onPaginationChange,
  onShowSizeChange,
  paginationSize = "default",
  showTotalNumber = true,

  //helper
  passRef,
  diffrentId,
  tableTitle,
  tableFooter,
  hasScrollSize = true,
  scrollSize,
  scrollYSize,
  hiddenId = false,
  hasCustomeClassName = true,
  rowClassName,
}) => {
  // drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const tableRef = useRef<HTMLDivElement>(null);
  const antTableClassName = ".ant-table-content";
  const [copyToClipboard] = useCopyToClipboard();

  const isInteractingWithInput = (e: React.MouseEvent) => {
    return (e.target as HTMLElement).tagName === "INPUT";
  };

  const onMouseDown = (event: React.MouseEvent) => {
    //for copy to cliboard
    if (!isInteractingWithInput(event) && event.ctrlKey) {
      const targetElement = event.target as HTMLElement;
      const textToCopy =
        targetElement.innerText || targetElement.textContent || "";

      if (textToCopy) {
        copyToClipboard(textToCopy);
      }
      return; // Don't proceed with dragging if Ctrl + Click
    }

    //اگر روی اینپوت های ادیت تیبل بود درگ غیرفعال میشه
    if (isInteractingWithInput(event)) {
      return;
    }

    // اسکرول در جدول
    if (tableRef.current?.querySelector(antTableClassName)) {
      setIsDragging(true);
      setStartX(event.pageX);
      setScrollLeft(
        tableRef?.current?.querySelector(antTableClassName)
          ?.scrollLeft as number
      );
      event.preventDefault();
    }
  };

  const onMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !tableRef.current) return;

    const x = event.pageX;
    const walk = x - startX; // محاسبه تغییر موقعیت موس
    (
      tableRef.current!.querySelector(antTableClassName) as HTMLElement
    ).scrollLeft = scrollLeft - walk;
    event.preventDefault();
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={passRef}
      className={`w-full ${hasCustomeClassName ? "mt-4" : ""}`}
    >
      <div
        ref={tableRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        className={isDragging ? "cursor-grabbing" : "cursor-auto"}
      >
        <Table
          rowKey={(record) => record?.id || record?.key}
          dataSource={dataSource}
          columns={[
            {
              key: "index",
              title: "ردیف",
              align: "center",
              width: 50,
              render: (_, record, index) => (
                <span>{(page - 1) * pageSize + (index + 1)}</span>
              ),
              hidden: expandable,
            },

            ...columns.map((item) => ({
              ...item,
            })),

            {
              key: "id",
              width: 70,
              align: "center",
              title: "شناسه",
              dataIndex: diffrentId || "id",
              hidden: hiddenId,
            },
          ]}
          onRow={
            onRowOnClick
              ? (record?: any, index?: number) => ({
                  onClick: () => onRowOnClick(record, index),
                })
              : undefined
          }
          rowSelection={
            rowSelection
              ? {
                  checkStrictly: false,
                  columnWidth: 40,
                  type: rowSelectionType,
                  selectedRowKeys,
                  onChange(
                    selectedRowKeys: any[],
                    selectedRows: any[],
                    info: any
                  ) {
                    onChangeRowSelection &&
                      onChangeRowSelection(selectedRows, selectedRowKeys, info);
                  },
                  getCheckboxProps: (record: any) => ({
                    disabled:
                      selectedRowKeys &&
                      selectedRowKeys.length >= 8 &&
                      !selectedRowKeys.includes(record.id),
                  }),
                }
              : undefined
          }
          rowClassName={rowClassName || undefined}
          expandable={{
            showExpandColumn: expandable,
            indentSize: indentSize || 20,
            expandRowByClick: expandRowByClick,

            //custome render in expand
            childrenColumnName: customeExpand
              ? "NOTALLOWED"
              : childrenColumnName,
            expandIconColumnIndex: 0,
            rowExpandable: (record) => {
              return (
                !!record[childrenColumnName] &&
                record[childrenColumnName].length > 0
              );
            },
            expandedRowRender: expandedRowRender,

            //open and close all
            defaultExpandAllRows,
          }}
          bordered={!customeExpand}
          loading={isLoading}
          scroll={{
            x: hasScrollSize
              ? scrollSize
                ? scrollSize
                : window.innerWidth < 700
                ? 1000
                : undefined
              : undefined,
            y: scrollYSize || undefined,
          }}
          size={expandable ? "middle" : "small"}
          title={tableTitle ? () => tableTitle : undefined}
          footer={tableFooter ? () => tableFooter : undefined}
          pagination={{
            size: paginationSize,
            style: { direction: "ltr" },
            position: ["bottomCenter"],
            responsive: true,
            hideOnSinglePage: true,
            showTotal: showTotalNumber
              ? () => (
                  <span className="bg-blue-600 text-white py-1 px-4 rounded-lg text-md">
                    مجموع داده ها : {totalNumber}
                  </span>
                )
              : undefined,

            total: totalNumber,
            defaultCurrent: page,
            current: page,
            pageSize: pageSize ? pageSize : undefined,
            pageSizeOptions: [10, 20, 50, 100, 250],
            onChange(page, pageSize) {
              setPage && setPage(page);
              onPaginationChange && onPaginationChange(page, pageSize);
            },
            onShowSizeChange: (currentPage: number, size: number) => {
              setPage && setPage(currentPage);
              setPageSize && setPageSize(size);
              onShowSizeChange && onShowSizeChange(currentPage, size);
            },
            showPrevNextJumpers: true,
            totalBoundaryShowSizeChanger: 1,
            showTitle: true,
            // showQuickJumper: true,
          }}
          locale={{
            emptyText() {
              return (
                <Empty
                  className="w-1/4 h-1/4 !mx-auto text-xs py-1"
                  description="داده ای یافت نشد"
                />
              );
            },
          }}
        />
      </div>
    </section>
  );
};

export { ListTable };
