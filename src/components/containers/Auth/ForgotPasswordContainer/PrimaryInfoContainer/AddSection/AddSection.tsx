//base
import { FC } from "react";
import { useRouter } from "next/navigation";

//common
import { RowAnt } from "@/components/common/RowAnt/RowAnt";
import { ColAnt } from "@/components/common/ColAnt/ColAnt";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";

//lib

//core
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { CiCircleCheck } from "react-icons/ci";
import { BiXCircle } from "react-icons/bi";

interface IPropType {
  isLoading: boolean;
}

const AddSection: FC<IPropType> = ({ isLoading }) => {
  //router
  const router = useRouter();

  return (
    <>
      <RowAnt>
        <ColAnt xs={24}>
          <TextInput
            name="userName"
            labelText="شماره همراه"
            significant
            className="!dir-ltr"
          />
        </ColAnt>
      </RowAnt>

      <RowAnt className="mt-8">
        <ColAnt xs={24}>
          <FullButton
            btnText="تایید شماره همراه"
            isLoading={isLoading}
            className="!w-2/3"
            wraped={false}
            icon={<CiCircleCheck size={20} />}
            isClearAble
            clearBtnText="انصراف"
            clearBtnClassName="!w-1/3 hover:!text-red-500 hover:!border-red-500"
            clearOnClick={() => {
              router.push(authUrlEnum.login);
            }}
            clearIcon={<BiXCircle size={20} />}
          />
        </ColAnt>
      </RowAnt>
    </>
  );
};

export { AddSection };
