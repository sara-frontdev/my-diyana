//base
import { FC } from "react";
import { useRouter } from "next/navigation";

//common
import { ColAnt } from "@/components/common/ColAnt/ColAnt";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { RowAnt } from "@/components/common/RowAnt/RowAnt";

//lib
import OTPInput from "react-otp-input";
import { HiXCircle } from "react-icons/hi";
import { TbLockBitcoin } from "react-icons/tb";

//core
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { textInputType } from "@/core/enums/textInput-type.enum";

interface IPropType {
  isLoading: boolean;
  setOtpCode: React.Dispatch<React.SetStateAction<string>>;
  otpCode: string;
}

const AddSection: FC<IPropType> = ({ isLoading, setOtpCode, otpCode }) => {
  //hook
  const router = useRouter();

  return (
    <>
      <RowAnt>
        <span className="text-center w-full">
          لطفا کد پیامک شده را وارد کنید
        </span>

        <section dir="ltr" className="mb-3">
          <OTPInput
            value={otpCode}
            onChange={(value) => setOtpCode(value)}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                className="!w-full text-4xl border border-zinc-900 rounded 
                  outline-sky-400 md:!py-3 md:!px-4 mx-1"
              />
            )}
            shouldAutoFocus
          />
        </section>

        <ColAnt xs={24}>
          <TextInput
            type={textInputType.password}
            name="password"
            labelText="رمزعبور جدید"
            className="!dir-ltr"
            significant
          />
        </ColAnt>

        <ColAnt xs={24}>
          <TextInput
            type={textInputType.password}
            name="passwordConfirmation"
            labelText="تکرار رمز عبور"
            className="!dir-ltr"
            significant
          />
        </ColAnt>
      </RowAnt>

      <RowAnt className="mt-8">
        <ColAnt xs={24}>
          <FullButton
            btnText="تغییر رمز عبور"
            isLoading={isLoading}
            className="!w-2/3"
            wraped={false}
            icon={<TbLockBitcoin size={20} />}
            isClearAble
            clearBtnText="انصراف"
            clearBtnClassName="!w-1/3 hover:!text-red-500 hover:!border-red-500"
            clearOnClick={() => {
              router.push(authUrlEnum.login);
            }}
            clearIcon={<HiXCircle size={20} />}
          />
        </ColAnt>
      </RowAnt>
    </>
  );
};

export { AddSection };
