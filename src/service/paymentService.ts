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
  const headers = {
    Workspace: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VfaWQiOiI2NGI3ZWRkNDJjNWUzNWIyMWIzNDMxZTEiLCJwZXJtaXNzaW9uIjoicnd4X3VzZXIiLCJpYXQiOjE3MTk5MzUwNDR9.N4i9mQ7PJmV1AWd4Tc0PJnSyz6IZMh9BX4Kl17hh9Uc`,
  };
  try {
    const { data } = await Api.post(`/workspace-microservice/wallet/credit-verify`, payload, { headers });
    return data?.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
