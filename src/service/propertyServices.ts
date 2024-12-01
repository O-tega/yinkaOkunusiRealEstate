import Api from "@/utils/Instance";
import { handleApiError } from "@/utils/handleApiError";

export const getProperties = async () => {
  try {
    const { data } = await Api.get(`/Properties`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const getServices = async () => {
  try {
    const { data } = await Api.get(`/services`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const getLatestProperties = async () => {
  try {
    const { data } = await Api.get(`/LatestProperties`);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
