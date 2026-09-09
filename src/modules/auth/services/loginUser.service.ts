import { apiInstance } from "@/config/apiInstance";
import { authApiRoutes } from "../api/routes";
import type { ApiResponse } from "../types/api/apiResponse";

export const loginUserService = () => {
  return apiInstance.post<ApiResponse<string[]>>(authApiRoutes.LOGIN);
};
