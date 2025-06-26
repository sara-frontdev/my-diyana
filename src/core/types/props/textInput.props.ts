export interface ITextInputProps {
  name: string;
  labelText: string | React.ReactNode;
  placeholder?: string;
  value?: string | number;
  onChange?: (val: string | number) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  clearable?: boolean;
  singleSpace?: boolean;
  seprator?: boolean;
  showCount?: boolean;
  maxCount?: number;
  significant?: boolean;
  forSearching?: boolean;
  setToFormik?: boolean;
  dateMask?: boolean;
  isNumber?: boolean;
  hasValidionUi?: boolean;
  hasInfo?: boolean;
  infoTitle?: string | React.ReactNode;
  changeCountMode?: boolean;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  size?: "small" | "middle" | "large";
}
