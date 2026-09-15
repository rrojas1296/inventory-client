import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import loginImage from "@/assets/login-image.jpg";
import {
  registerControls,
  registerSchema,
  type RegisterSchema,
} from "../../schemas/registerSchema";
import { EyeIcon, EyeOffIcon, Table2Icon } from "lucide-react";
import Button from "@/modules/shared/components/shadcn/button";
import GoogleIcon from "@/modules/shared/components/icons/GoogleIcon";
import { useTranslation } from "react-i18next";
import FormField from "@/modules/shared/components/FormField";
import { useState } from "react";
import { Link } from "react-router";
import CheckBox from "@/modules/shared/components/CheckBox";

const RegisterPage = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const registerUser = (data: RegisterSchema) => {
    console.log({ data });
  };
  return (
    <div className="bg-bg-primary h-screen w-screen lg:flex">
      <div className="h-screen lg:w-5/12 lg:max-w-2xl grid place-items-center overflow-y-auto py-10">
        <form
          onSubmit={handleSubmit(registerUser)}
          className="w-10/12 grid flex-col gap-5 lg:max-w-sm grid-cols-2"
        >
          <div className="size-10 rounded-xl bg-primary grid place-items-center">
            <Table2Icon className="text-text-accent size-5" />
          </div>
          <div className="col-span-2">
            <h1 className="font-bold text-text-foreground-1 text-3xl">
              {t("Register.title")}
            </h1>
            <p className="text-sm text-text-foreground-2">
              {t("Register.subtitle")}
            </p>
          </div>
          <Button variant="outline" className="col-span-2">
            <GoogleIcon className="size-5" />{" "}
            {t("Register.form.buttons.google")}
          </Button>
          <div className="flex items-center relative justify-center col-span-2">
            <div className="bg-border-card z-0 h-px w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <p className="bg-bg-primary z-10 text-text-foreground-2 text-sm px-3">
              {t("Register.or")}
            </p>
          </div>
          {registerControls.map(
            ({ name, label, type, placeholder, className }, i) => {
              const error = errors[name]?.message;
              return (
                <FormField
                  key={i}
                  label={t(label)}
                  placeholder={t(placeholder)}
                  className={className}
                  type={
                    type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : type
                  }
                  error={error && t(error)}
                  icon={
                    name === "password" && (
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
            },
          )}
          <div
            className="flex gap-3 col-span-2"
            onClick={() => setAcceptTerms(!acceptTerms)}
          >
            <CheckBox checked={acceptTerms} setChecked={setAcceptTerms} />
            <p className="text-sm text-text-foreground-1">
              {t("Register.form.terms.text1")}
              <Link to="/termsPrivacy" className="font-semibold text-primary">
                {t("Register.form.terms.link1")}
              </Link>
              {t("Register.form.terms.text2")}
              <Link
                to="/politicsPrivacy"
                className="font-semibold text-primary"
              >
                {t("Register.form.terms.link2")}
              </Link>
            </p>
          </div>
          <Button className="col-span-2" type="submit">
            {t("Register.form.buttons.submit")}
          </Button>
          <p className="text-sm text-text-foreground-1 text-center col-span-2">
            {t("Register.form.login.question")}
            <Link to="/register" className="text-primary font-medium">
              {t("Register.form.login.link")}
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
            {t("Register.side.title")}
          </p>
          <p className="text-sm text-text-foreground-2 mt-2">
            {t("Register.side.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
