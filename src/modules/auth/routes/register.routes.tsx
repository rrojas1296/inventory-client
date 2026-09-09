import type { RouteObject } from "react-router";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const registerRoutes: RouteObject[] = [
  {
    path: "/register",
    element: <RegisterPage />,
  },
];
