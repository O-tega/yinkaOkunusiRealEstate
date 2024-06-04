import axios from "axios";
import { handleApiError } from "@/utils/handleApiError";

const url = "https://integration-server.mooyi.africa/api/v1/mooyi-integration";

export const getState = async () => {
  try {
    const { data } = await axios.get(`${url}/country/states?country=Nigeria`, {
      headers: {
        Accept: "application/json",
        "i-am-mooyi-dev": "c27eb735-6a16-423e-8ea6-af1c4e6ac1a5",
      },
    });
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const getCity = async (country: string) => {
  try {
    const { data } = await axios.post(`${url}/counties`, country, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
