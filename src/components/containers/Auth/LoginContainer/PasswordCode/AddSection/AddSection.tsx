import { FC } from "react";
import { useRouter } from "next/navigation";

// lib
import { FiLogIn } from "react-icons/fi";

import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { ColAnt } from "@/components/common/ColAnt/ColAnt";
import { RowAnt } from "@/components/common/RowAnt/RowAnt";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";

// core
import { textInputType } from "@/core/enums/textInput-type.enum";
import { authUrlEnum } from "@/core/enums/auth-url.enum";

interface IPropType {
  isLoading: boolean;
}

const AddSection: FC<IPropType> = ({ isLoading }) => {
  //router
  const router = useRouter();

  return (
    <>
      {/* --- login inputs --- */}
      <RowAnt>
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[70%]">
            <TextInput
              name="userName"
              labelText="شماره همراه"
              clearable
              significant
            />
          </div>
        </div>
      </RowAnt>

      <RowAnt>
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[70%]">
            <TextInput
              type={textInputType.password}
              name="password"
              labelText={
                <section className="flex justify-between items-center">
                  <span>رمزعبور</span>
                  <span
                    className="text-[0.8rem] text-blue-700 font-bold mx-1 cursor-pointer"
                    onClick={() => router.push(authUrlEnum.forgotPassword)}
                  >
                    رمزعبور خود را فراموش کرده‌اید؟!
                  </span>
                </section>
              }
              placeholder="لطفا رمزعبور خود را وارد کنید"
              significant={false}
              forSearching
            />
          </div>
        </div>
      </RowAnt>

      <RowAnt className="mt-5">
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[70%]">
            <FullButton
              className="!w-full"
              btnText="ورود به حساب کاربری"
              isLoading={isLoading}
              icon={<FiLogIn size={20} />}
            />
          </div>
        </div>
      </RowAnt>

      {/* --- register section --- */}
      <RowAnt>
        <ColAnt
          xs={24}
          className="!flex justify-center items-center gap-1 !mt-4"
        >
          <p className="text-gray-700">هنوز ثبت نام نکرده اید؟</p>
          <p
            className="cursor-pointer text-blue-700 underline font-bold"
            onClick={() => router.push(authUrlEnum.register)}
          >
            ثبت نام کنید
          </p>
        </ColAnt>
      </RowAnt>
    </>
  );
};

export { AddSection };
