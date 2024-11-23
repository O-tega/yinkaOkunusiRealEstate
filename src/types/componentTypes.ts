export type TModal = {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
};

export type TPrimaryInput = {
  text?: string;
  type: string;
  css?: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string | undefined | false | string[];
  value: string | number | undefined;
  name: string;
};

export type TSecondaryInput = {
  text: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  error: string | undefined | false;
  value: string | number | undefined;
  name: string;
  disabled?: boolean;
  min?: string;
};

export type TOption = {
  value: string | number | undefined;
  label: string;
};

export type TSecondarySelectInput = {
  text?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | undefined;
  name: string;
  disabled?: boolean;
  options: TOption[];
};

export type TSelectInput = {
  text?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | undefined;
  name: string;
  disabled?: boolean;
  options: TOption[];
  css?: string;
  defaultValue?: string | number | undefined;
};

export interface Option {
  value: string | number;
  label: string | number;
}

import { MultiValue, ActionMeta } from "react-select";
export interface MultiSelectInputProps {
  options: Option[];
  isMulti?: boolean;
  name?: string;
  value?: MultiValue<Option>;
  onChange?: (newValue: MultiValue<Option>, actionMeta: ActionMeta<Option>) => void;
  css?: string;
  disabled?: boolean;
  defaultValue?: MultiValue<Option>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  error?: string | undefined | false;
}

export interface ICheckboxProps {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
  value?: boolean | string | undefined;
}
