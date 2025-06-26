//base
import { FC, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

//lib
import OTPInput from "react-otp-input";

//common

//core
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { useVerifyCode } from "@/core/services/api/clinet/Register.api";

const VerifyCodeContainer: FC = () => {
  //hooks
  const router = useRouter();
  const searchParams = useSearchParams();

  const param_userName = searchParams.get("userName");

  //**** چک میکنه ک بدون تکمیل مراحل قبلی وارد این مرحله نشه
  useEffect(() => {
    if (!param_userName) {
      router.replace(authUrlEnum.register);
    }
  }, []);

  //states
  const [otpCode, setOtpCode] = useState<string>("");
  const optLength = 6;

  //api
  const setMutation = useVerifyCode();

  //call api
  useEffect(() => {
    if (otpCode.length === optLength) {
      setMutation.mutate(
        {
          userName: String(param_userName),
          code: otpCode,
        },
        {
          onSuccess: () => {
            router.push(
              `${authUrlEnum.finalizeRegister}?userName=${param_userName}&code=${otpCode}`
            );
          },
        }
      );
    }
  }, [otpCode]);

  return (
    <section className="mt-4">
      <section className="text-center text-[#A5A5A5]">
        <span>شماره همراه شما</span> : <span> {param_userName}</span>
      </section>

      <section className="flex flex-col justify-center items-center gap-12 mt-6">
        <section dir="ltr">
          <OTPInput
            value={otpCode}
            onChange={(value) => setOtpCode(value)}
            numInputs={optLength}
            renderInput={(props) => (
              <input
                {...props}
                className="!w-full text-4xl border border-zinc-900 rounded 
                  outline-sky-400 md:!p-3 md:!px-4 mx-1"
              />
            )}
            shouldAutoFocus
          />
        </section>

        <section className="w-full flex justify-between items-center">
          <p
            className="bg-sky-600 hover:bg-sky-400 text-white cursor-pointer rounded-lg 
              p-0.5 px-6 transition-all duration-300"
            onClick={() => router.replace(authUrlEnum.register)}
          >
            اصلاح شماره
          </p>

          <p
            className="bg-red-600 hover:bg-red-500 text-white cursor-pointer rounded-lg 
              p-0.5 px-6 transition-all duration-300"
            onClick={() => router.replace(authUrlEnum.register)}
          >
            انصراف
          </p>
        </section>
      </section>
    </section>
  );
};

export { VerifyCodeContainer };
