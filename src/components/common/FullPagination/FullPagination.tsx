//base
import { FC } from "react";

//lib
import { Pagination } from "antd";

interface IPropType {
  isLoading: boolean;
  totalNumber: number;
  page?: number;
  setPage?: (value: number) => void;
  pageSize?: number;
  setPageSize?: (value: number) => void;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (currentPage: number, size: number) => void;
}

const FullPagination: FC<IPropType> = ({
  isLoading,
  totalNumber,
  page,
  setPage,
  pageSize,
  setPageSize,
  onPaginationChange,
  onShowSizeChange,
}) => {
  return (
    !isLoading && (
      <section className="flex justify-center items-center mt-4">
        <Pagination
          size="default"
          style={{ direction: "ltr" }}
          responsive
          hideOnSinglePage
          showTotal={() => (
            <span className="bg-customeBlue text-white py-1 px-4 rounded-lg text-md">
              مجموع داده ها : {totalNumber}
            </span>
          )}
          total={totalNumber}
          defaultCurrent={page}
          pageSize={pageSize}
          onChange={(page, pageSize) => {
            setPage && setPage(page);
            onPaginationChange && onPaginationChange(page, pageSize);
          }}
          onShowSizeChange={(currentPage: number, size: number) => {
            setPage && setPage(currentPage);
            setPageSize && setPageSize(size);
            onShowSizeChange && onShowSizeChange(currentPage, size);
          }}
          // showQuickJumper
        />
      </section>
    )
  );
};

export { FullPagination };
