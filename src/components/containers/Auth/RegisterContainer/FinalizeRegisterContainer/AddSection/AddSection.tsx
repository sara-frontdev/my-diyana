//base
import { FC } from "react";

//common
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { ColAnt } from "@/components/common/ColAnt/ColAnt";
import { RowAnt } from "@/components/common/RowAnt/RowAnt";

//core
import { textInputType } from "@/core/enums/textInput-type.enum";

interface IPropType {
  isLoading: boolean;
}

const AddSection: FC<IPropType> = ({ isLoading }) => {
  return (
    <>
      <RowAnt>
        <ColAnt xs={24}>
          <TextInput
            name="userName"
            labelText="نام کاربری"
            significant
            className="!dir-ltr"
            disabled
          />
        </ColAnt>

        <ColAnt xs={24}>
          <TextInput name="name" labelText=" نام" significant />
        </ColAnt>

        <ColAnt xs={24}>
          <TextInput name="lastName" labelText=" نام خانوادگی" significant />
        </ColAnt>

        <ColAnt xs={24}>
          <TextInput
            type={textInputType.password}
            name="password"
            labelText="رمز عبور"
            significant
            // className="!dir-ltr"
          />
        </ColAnt>

        <ColAnt xs={24}>
          <TextInput
            type={textInputType.password}
            name="passwordConfirmation"
            labelText="تکرار رمز عبور"
            // className="!dir-ltr"
            significant
          />
        </ColAnt>
      </RowAnt>

      <RowAnt className="mt-6">
        <ColAnt xs={24}>
          <FullButton
            btnText="ثبت نام"
            isLoading={isLoading}
            className="!w-full"
          />
        </ColAnt>
      </RowAnt>
    </>
  );
};

export { AddSection };
