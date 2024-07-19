import Api from "@/utils/Instance";
import { handleApiError } from "@/utils/handleApiError";

export const paymentService = async (payload) => {
  try {
    const { data } = await Api.post(`/auth-microservice/user/payg-auth`, payload);
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const approveTopUp = async (payload) => {
  try {
    const { data } = await Api.post(`/workspace-microservice/wallet/credit-verify`, payload);
    return data?.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
