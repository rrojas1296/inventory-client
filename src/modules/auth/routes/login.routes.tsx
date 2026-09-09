import type { RouteObject } from "react-router";
import LoginPage from "../pages/LoginPage/LoginPage";

export const loginRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];
