//base
import { FC, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

//lib
import { AxiosResponse } from "axios";
import { useFormikContext } from "formik";

//common
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { RowAnt } from "@/components/common/RowAnt/RowAnt";
import { ColAnt } from "@/components/common/ColAnt/ColAnt";

//components
import { CountTimer } from "./CountTimer/CountTimer";

//core
import { ILogInBycodeValues } from "@/core/types/formikValues/LogIn/LogIn.values";
import { isValidIranianPhoneNumber } from "@/core/utils/check-identity.utils";
import { useLoginSendCode } from "@/core/services/api/clinet/Login.api";
import { textInputType } from "@/core/enums/textInput-type.enum";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { ShowToast } from "@/core/hooks/Notifications";
import { FiLogIn } from "react-icons/fi";

interface IPropType {
  isLoading: boolean;
}

const AddSection: FC<IPropType> = ({ isLoading }) => {
  const [showTimer, setShowTimer] = useState<boolean>(false);

  //FormikContext
  const { values }: { values: ILogInBycodeValues } = useFormikContext();

  //router
  const router = useRouter();

  // api
  const setCode = useLoginSendCode();

  //فانکشن گرفتن کد
  const GetSms = () => {
    if (!isValidIranianPhoneNumber(values.userName)) {
      ShowToast(["شماره همراه را صحیح وارد کنید!"], toastTypes.warning);
    } else {
      setCode.mutate(
        {
          userName: values.userName,
        },
        {
          onSuccess: (apiRes: AxiosResponse<IAxiosResult>) => {
            const result: string = apiRes.data.result;
            ShowToast([result], toastTypes.success), setShowTimer(true);
          },
        }
      );
    }
  };

  //Counters memo
  const Counters = useMemo(
    () => <CountTimer setShowTimer={setShowTimer} />,
    [showTimer]
  );

  return (
    <>
      {/* --- login inputs --- */}
      <RowAnt>
        <ColAnt
          xs={24}
          className="!flex items-center justify-start gap-3 w-full"
        >
          <section className="w-[70%]">
            <TextInput
              name="userName"
              labelText="شماره همراه"
              significant
              // className="!dir-ltr"
            />
          </section>

          <section className="w-[30%] mt-3 m-0">
            {showTimer ? (
              Counters
            ) : (
              <section
                className="text-[13px] text-center  text-white border border-[#17803D]
                   p-1 rounded shadow font-bold cursor-pointer w-full hover:text-white 
                  bg-[#17803D] hover:bg-[#3ba160]  transition-all"
                onClick={() => {
                  GetSms();
                }}
              >
                {setCode.isLoading ? "در حال ارسال کد" : "دریافت رمز یکبارمصرف"}
              </section>
            )}
          </section>
        </ColAnt>

        <ColAnt xs={24}>
          <TextInput
            type={textInputType.password}
            name="code"
            labelText="رمز یک بارمصرف"
            significant
          />
        </ColAnt>
      </RowAnt>

      <RowAnt className="mt-5">
        <ColAnt xs={24}>
          <FullButton
            className="!w-full"
            btnText="ورود به حساب کاربری"
            isLoading={isLoading}
            icon={<FiLogIn size={20} />}
          />
        </ColAnt>
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
