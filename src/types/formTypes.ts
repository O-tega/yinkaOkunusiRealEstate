import { Option } from "./componentTypes";

export type TQuotation = {
  researchType: string;
  audienceType: string;
  country: string;
  price?: number | null;
  responses?: number;
  lga: Option[];
  state: Option[];
};
