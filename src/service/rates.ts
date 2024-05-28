import { handleApiError } from "@/utils/handleApiError";
import Api from "@/utils/Instance";

export const getRates = async () => {
  try {
    const { data } = await Api.get("/workspace-microservice/admin/workspace/currency/rate");
    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
