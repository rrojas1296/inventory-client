import type { RouteObject } from "react-router";
import OnboardingPage from "../pages/OnboardingPage/OnboardingPage";

export const onboardingRoutes: RouteObject[] = [
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
];
