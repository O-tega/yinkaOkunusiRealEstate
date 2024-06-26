import { Option } from "./componentTypes";

export type TQuotation = {
  researchType: string;
  audienceType: string;
  country: string;
  lga: Option[];
  state: Option[];
};
