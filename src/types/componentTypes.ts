export type TModal = {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
};

export type TPrimaryInput = {
  text: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  error: string | undefined | false;
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
  text: string;
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
  css: string;
  defaultValue: string | number | undefined;
};
