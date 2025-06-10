"use client";

import { Form, Input } from "antd";

import { CiSearch } from "react-icons/ci";

import "./SearchHeader.scss";

const SearchHeder = () => {
  // FormValues
  const onFinish = (values: any) => {};
  return (
    <>
      {/******************  In mobile  ******************/}

      <div className="flex md:hidden">
        <CiSearch className=" text-gray-500" size={20} />
      </div>

      {/******************  In Desktop  ******************/}
      <div className=" relative hidden md:flex">
        <Form onFinish={onFinish}>
          <Form.Item name="search" className="!h-fit !p-0 !m-0 form-item-root">
            <Input
              className="lg:w-[180px] xl:!w-[260px] h-full pr-10"
              style={{ direction: "rtl" }}
              aria-label="جستجو"
            />
          </Form.Item>

          <CiSearch
            className="absolute top-[7px] left-[20px] text-gray-500"
            size={20}
          />
        </Form>
      </div>
    </>
  );
};
export default SearchHeder;
