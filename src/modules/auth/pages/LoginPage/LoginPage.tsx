import FormField from "@/modules/shared/components/FormField";
import GoogleIcon from "@/modules/shared/components/icons/GoogleIcon";
import Button from "@/modules/shared/components/shadcn/button";
import { EyeIcon, Table2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginControls,
  loginSchema,
  type LoginSchema,
} from "../../schemas/loginSchema";

const LoginPage = () => {
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
    <div className="bg-bg-primary h-screen w-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(loginUser)}
        className="w-10/12 flex flex-col gap-5"
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
              type={type}
              error={error && t(error)}
              icon={
                type === "password" && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-transparent outline-none focus-visible:border-none"
                  >
                    <EyeIcon className="size-5 text-text-foreground-1" />
                  </Button>
                )
              }
              {...register(name)}
            />
          );
        })}
        <Button type="submit">{t("Login.buttons.submit")}</Button>
      </form>
    </div>
  );
};

export default LoginPage;
