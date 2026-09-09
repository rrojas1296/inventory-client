import { createBrowserRouter } from "react-router";
import authRoutes from "@/modules/auth/routes";

export const router = createBrowserRouter([...authRoutes]);
