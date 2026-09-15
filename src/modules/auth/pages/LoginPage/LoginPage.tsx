import FormField from "@/modules/shared/components/FormField";
import GoogleIcon from "@/modules/shared/components/icons/GoogleIcon";
import Button from "@/modules/shared/components/shadcn/button";
import { EyeIcon, Table2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bg-primary h-screen w-screen flex justify-center items-center">
      <div className="w-10/12 flex flex-col gap-5">
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
        <FormField
          label={t("Login.form.fields.email.label")}
          placeholder={t("Login.form.fields.email.placeholder")}
          type="email"
        />
        <FormField
          label={t("Login.form.fields.password.label")}
          placeholder={t("Login.form.fields.password.placeholder")}
          type="password"
          icon={
            <Button
              size="icon"
              variant="ghost"
              className="bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-transparent outline-none focus-visible:border-none"
            >
              <EyeIcon className="size-5 text-text-foreground-1" />
            </Button>
          }
        />
        <Button>{t("Login.buttons.submit")}</Button>
      </div>
    </div>
  );
};

export default LoginPage;
