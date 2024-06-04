import { Option } from "./componentTypes";

export type TQuotation = {
  leastAge: string;
  mostAge: string;
  gender: string[];
  lga: Option[];
  state: Option[];
  categoryOfInterest: Option[];
};
