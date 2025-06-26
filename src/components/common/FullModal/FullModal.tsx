"use client";

//base
import { FC } from "react";

//lib
import { Modal } from "antd";

import "../FullModal/FullModal.scss";

interface IPropType {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  toggleModal: () => void;
  handleOk?: () => void;
  confirmLoading?: boolean;
  className?: string;
  width?: string | number;
  centered?: boolean;
}

const FullModal: FC<IPropType> = ({
  children,
  title,
  isOpen,
  toggleModal,
  handleOk,
  confirmLoading,
  className,
  width,
  centered,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={isOpen}
        onCancel={toggleModal}
        onOk={handleOk ? handleOk : undefined}
        confirmLoading={confirmLoading}
        className={`mx-auto lg:px-8 bg-white ${
          className ? className : undefined
        }`}
        footer={false}
        width={width ? width : undefined}
        centered={centered}
        zIndex={2000}
      >
        <section>{children}</section>
      </Modal>
    </>
  );
};

export { FullModal };
