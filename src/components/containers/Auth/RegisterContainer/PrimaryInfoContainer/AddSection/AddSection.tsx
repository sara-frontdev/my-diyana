//base
import { FC } from "react";
import { useRouter } from "next/navigation";

//common
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { RowAnt } from "@/components/common/RowAnt/RowAnt";
import { ColAnt } from "@/components/common/ColAnt/ColAnt";

//lib

//core
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { BiCheckCircle } from "react-icons/bi";

interface IPropType {
  isLoading: boolean;
}

const AddSection: FC<IPropType> = ({ isLoading }) => {
  //hooks
  const router = useRouter();

  return (
    <>
      {/* --- register inputs --- */}
      <RowAnt>
        <ColAnt xs={24}>
          <TextInput
            name="userName"
            labelText="شماره همراه"
            clearable
            // className="!dir-ltr"
            significant
          />
        </ColAnt>

        <ColAnt xs={24}>
          <FullButton
            btnText="تایید شماره"
            icon={<BiCheckCircle size={20} />}
            className="!w-full"
            isLoading={isLoading}
          />
        </ColAnt>
      </RowAnt>

      {/* --- login section --- */}
      <RowAnt>
        <ColAnt xs={24} className="flex justify-center items-center gap-1">
          <section
            className="flex justify-center items-center gap-1 mt-8"
            onClick={() => router.push(authUrlEnum.login)}
          >
            <p className="text-gray-700">قبلا ثبت نام کرده اید؟</p>
            <p className="cursor-pointer text-sky-700 underline font-bold">
              وارد شوید
            </p>
          </section>
        </ColAnt>
      </RowAnt>
    </>
  );
};

export { AddSection };
