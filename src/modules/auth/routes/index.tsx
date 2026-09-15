import { loginRoutes } from "./login.routes";
import { onboardingRoutes } from "./onboarding.routes";
import { registerRoutes } from "./register.routes";

export default [...loginRoutes, ...registerRoutes, ...onboardingRoutes];
