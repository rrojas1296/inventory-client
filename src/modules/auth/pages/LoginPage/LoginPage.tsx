import FormField from "@/modules/shared/components/FormField";
import GoogleIcon from "@/modules/shared/components/icons/GoogleIcon";
import Button from "@/modules/shared/components/shadcn/button";
import { EyeIcon, EyeOffIcon, Table2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";
import loginImage from "@/assets/login-image.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginControls,
  loginSchema,
  type LoginSchema,
} from "../../schemas/loginSchema";
import CheckBox from "@/modules/shared/components/CheckBox";
import { useState } from "react";
import { Link } from "react-router";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const loginUser = (data: LoginSchema) => {
    console.log({ data });
  };

  return (
    <div className="bg-bg-primary h-screen w-screen lg:flex">
      <div className="h-screen lg:w-5/12 lg:max-w-2xl grid place-items-center">
        <form
          onSubmit={handleSubmit(loginUser)}
          className="w-10/12 flex flex-col gap-5 lg:max-w-sm"
        >
          <div className="size-10 rounded-xl bg-primary grid place-items-center">
            <Table2Icon className="text-text-accent size-5" />
          </div>
          <div>
            <h1 className="font-bold text-text-foreground-1 text-3xl">
              {t("Login.title")}
            </h1>
            <p className="text-sm text-text-foreground-2">
              {t("Login.subtitle")}
            </p>
          </div>
          <Button variant="outline">
            <GoogleIcon className="size-5" /> {t("Login.buttons.google")}
          </Button>
          <div className="flex items-center relative justify-center">
            <div className="bg-border-card z-0 h-px w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <p className="bg-bg-primary z-10 text-text-foreground-2 text-sm px-3">
              {t("Login.or")}
            </p>
          </div>
          {loginControls.map(({ name, label, type, placeholder }, i) => {
            const error = errors[name]?.message;
            return (
              <FormField
                key={i}
                label={t(label)}
                placeholder={t(placeholder)}
                type={
                  name === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : type
                }
                error={error && t(error)}
                icon={
                  type === "password" && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                      className="bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-transparent outline-none focus-visible:border-none"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="size-5 text-text-foreground-1" />
                      ) : (
                        <EyeIcon className="size-5 text-text-foreground-1" />
                      )}
                    </Button>
                  )
                }
                {...register(name)}
              />
            );
          })}
          <div className="flex justify-between">
            <div
              className="flex gap-3"
              onClick={() => setRememberMe(!rememberMe)}
            >
              <CheckBox checked={rememberMe} setChecked={setRememberMe} />
              <p className="text-sm text-text-foreground-1">
                {t("Login.remember")}
              </p>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-primary font-medium"
            >
              {t("Login.forgotPassword")}
            </Link>
          </div>
          <Button type="submit">{t("Login.buttons.submit")}</Button>
          <p className="text-sm text-text-foreground-1 text-center">
            {t("Login.register.question")}
            <Link to="/register" className="text-primary font-medium">
              {t("Login.register.link")}
            </Link>
          </p>
        </form>
      </div>
      <div className="flex-1 hidden lg:block lg:relative">
        <img
          src={loginImage}
          className="w-full h-full object-cover"
          alt="Login image"
        />
        <div className="inset-0 absolute top-0 left-0 bg-overlay flex flex-col justify-end p-14">
          <p className="text-text-foreground-1 text-4xl font-bold">
            {t("Login.side.title")}
          </p>
          <p className="text-sm text-text-foreground-2 mt-2">
            {t("Login.side.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
