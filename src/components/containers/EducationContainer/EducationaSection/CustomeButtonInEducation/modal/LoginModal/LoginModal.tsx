import { FC, Suspense } from "react";

import { CustomButton } from "@/components/commonComponents/Button/CustomeButton/CustomeButton";
import { ConfirmChecker } from "@/components/common/ConfirmChecker/ConfirmChecker";
import { FullModal } from "@/components/common/FullModal/FullModal";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
}

const LoginModal: FC<IPropType> = ({ isOpen, toggleModal }) => {
  return (
    <Suspense>
      <FullModal
        title=""
        isOpen={isOpen}
        toggleModal={toggleModal}
        className="bg-white rounded-lg"
        centered
        width={600}
      >
        <ConfirmChecker status="warning" title="" />

        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-[#1d1b1b] mb-4 ">
            برای انتخاب کلاس ابتدا وارد سایت شوید
          </p>

          <CustomButton href="/auth/login" text="ورود" />
        </div>
      </FullModal>
    </Suspense>
  );
};

export default LoginModal;
