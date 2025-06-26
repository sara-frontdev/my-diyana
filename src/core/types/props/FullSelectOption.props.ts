import { selectOptionType } from "@/core/enums/selectOption-type.enum";
import { ISelectOption } from "@/core/models/general.model";

export interface IFullSelectOptionPropsTypes {
  type?: selectOptionType;
  className?: string;
  variant?: "borderless" | "filled" | "outlined";
  virtual?: boolean; //prevent lag in large scale
  placement?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
  name: string;
  options: ISelectOption<string | number>[];
  isLoading?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  defaultValue?: ISelectOption<string | number>;
  value?: ISelectOption<string | number>;
  onChange?: (
    event?: ISelectOption<string | number> | ISelectOption<string | number>[]
  ) => void;
  onDeselect?: (event: ISelectOption<string | number>) => void;
  labelText?: string;
  noResultText?: string;
  maxCount?: number;
  maxTagCount?: "responsive" | number;
  defaultOpen?: boolean;
  significant?: boolean;
  forSearching?: boolean;
  setToFormik?: boolean;
}
