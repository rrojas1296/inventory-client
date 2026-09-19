import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Bell,
  Box,
  ChevronDown,
  CircleHelp,
  Ellipsis,
  FileText,
  Hammer,
  Laptop,
  LogOut,
  Package,
  Pill,
  ScanLine,
  Shirt,
  Sparkles,
  Store,
  Tag,
  Upload,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "@/modules/shared/components/shadcn/button";
import Input from "@/modules/shared/components/Input";
import { cn } from "cn";

type BusinessType = {
  id: string;
  icon: LucideIcon;
};

const businessTypes: BusinessType[] = [
  { id: "retail", icon: Store },
  { id: "restaurant", icon: Utensils },
  { id: "pharmacy", icon: Pill },
  { id: "ecommerce", icon: Box },
  { id: "bakery", icon: Utensils },
  { id: "hardware", icon: Hammer },
  { id: "technology", icon: Laptop },
  { id: "boutique", icon: Shirt },
  { id: "bookstore", icon: FileText },
  { id: "other", icon: Ellipsis },
];

const steps = [
  { id: "store", icon: Store },
  { id: "categories", icon: Tag },
  { id: "alerts", icon: Bell },
  { id: "products", icon: Package },
];

const OnboardingPage = () => {
  const { t } = useTranslation();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [storeName, setStoreName] = useState("");
  const [businessType, setBusinessType] = useState("retail");
  const [suppliesEnabled, setSuppliesEnabled] = useState(false);

  const openFile = () => {
    inputFileRef.current?.click();
  };

  return (
    <main className="min-h-screen bg-bg-primary text-text-foreground-1">
      <header className="flex h-[64px] items-center justify-between border-b border-border-card px-6 lg:px-10">
        <div className="flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-xl bg-primary text-text-accent shadow-[0_0_24px_rgba(115,36,241,0.22)]">
            <ScanLine className="size-5" strokeWidth={2.25} />
          </div>
          <span className="text-sm font-medium">Sellora</span>
        </div>
        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-text-foreground-2 transition-colors hover:bg-bg-secondary hover:text-text-foreground-1">
          <LogOut className="size-4" />
          {t("Onboarding.logout")}
        </button>
      </header>

      <div className="mx-auto w-full max-w-2xl px-4 pb-10 pt-8 sm:pt-10">
        <nav aria-label={t("Onboarding.progressLabel")} className="mb-5">
          <ol className="flex items-start">
            <li className="flex min-w-0 flex-1 items-start">
              {steps.map(({ id, icon: Icon }, index) => {
                const isCurrent = index === 0;
                return (
                  <>
                    <div className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
                      <div
                        className={cn(
                          "grid size-9 place-items-center bg-bg-secondary rounded-xl text-text-foreground-2 transition-colors",
                          isCurrent && "bg-primary text-text-accent",
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <span
                        className={cn(
                          "text-sm text-text-foreground-2",
                          isCurrent && "text-text-foreground-2",
                        )}
                      >
                        {t(`Onboarding.steps.${id}`)}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <span className="mt-4 h-px flex-1 bg-border-card" />
                    )}
                  </>
                );
              })}
            </li>
          </ol>
        </nav>

        <section className="rounded-card border border-border-card bg-bg-secondary py-5 px-8">
          <div className="flex gap-3">
            <div className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              <Store className="size-4" />
            </div>
            <div>
              <p className="text-xs text-text-foreground-2">
                {t("Onboarding.stepOf", { current: 1, total: 4 })}
              </p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-text-foreground-1">
                {t("Onboarding.title")}
              </h1>
              <p className="mt-1 text-sm text-text-foreground-2">
                {t("Onboarding.subtitle")}
              </p>
            </div>
          </div>
          <div className="mt-3 flex px-3 items-center gap-2 rounded-xl border border-border-card bg-bg-primary/55 h-9 text-sm text-text-foreground-2">
            <Sparkles className="size-5 shrink-0 text-text-foreground-2" />
            <span>{t("Onboarding.helper")}</span>
          </div>
        </section>

        <form className="mt-5 rounded-card border border-border-card bg-bg-secondary py-5 px-8">
          <div className="flex gap-3">
            <button
              type="button"
              aria-label={t("Onboarding.form.uploadLogo")}
              className="group grid size-20 shrink-0 place-items-center rounded-2xl border border-dashed border-border-input bg-bg-primary/35 text-text-foreground-2 transition-colors hover:border-primary hover:text-primary"
              onClick={openFile}
            >
              <div className="flex flex-col items-center gap-1">
                <Upload className="size-5 transition-transform group-hover:-translate-y-0.5" />
                <span className="text-sm">Logo</span>
              </div>
            </button>
            <input type="file" hidden ref={inputFileRef} />
            <label className="min-w-0 flex-1 text-sm text-text-foreground-1">
              <span className="mb-1 block">
                {t("Onboarding.form.storeName")}
              </span>
              <Input
                value={storeName}
                onChange={(event) => setStoreName(event.target.value)}
                placeholder={t("Onboarding.form.storeNamePlaceholder")}
                className="w-full rounded-xl border border-border-input bg-transparent px-3 text-sm text-text-foreground-1 outline-none transition-colors placeholder:text-text-foreground-2 focus:border-primary focus:ring-3 focus:ring-primary/50"
              />
              <span className="mt-1 block text-xs text-text-foreground-2">
                {t("Onboarding.form.storeNameHint")}
              </span>
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="mb-2 text-sm text-text-foreground-1">
              {t("Onboarding.form.businessType")}
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {businessTypes.map(({ id, icon: Icon }) => {
                const selected = businessType === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setBusinessType(id)}
                    className={`flex py-3 flex-col items-center justify-center gap-2 rounded-xl border text-sm transition-all ${
                      selected
                        ? "border-primary bg-bg-selected text-primary shadow-[inset_0_0_0_1px_rgba(115,36,241,0.16)]"
                        : "border-border-card bg-bg-primary/25 text-text-foreground-2 hover:border-border-input hover:text-text-foreground-1"
                    }`}
                  >
                    <Icon className="size-5" />
                    <span>{t(`Onboarding.businessTypes.${id}`)}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-5">
            <p className="mb-3 text-sm text-text-foreground-1">
              {t("Onboarding.form.optionalModules")}
            </p>
            <button
              type="button"
              role="switch"
              aria-checked={suppliesEnabled}
              onClick={() => setSuppliesEnabled((enabled) => !enabled)}
              className={cn(
                "flex w-full outline-none items-center gap-3 rounded-2xl border border-border-card bg-bg-primary/25 py-3 px-4 text-left transition-colors",
                suppliesEnabled && "border-primary bg-bg-selected",
              )}
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <Package className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-text-foreground-1">
                  {t("Onboarding.form.suppliesTitle")}
                </span>
                <span className="mt-1 block text-xs leading-4 text-text-foreground-2">
                  {t("Onboarding.form.suppliesDescription")}
                </span>
                <span
                  className={cn(
                    "mt-3 inline-flex rounded-lg transition-colors border border-border-card px-3 h-6 text-sm text-text-foreground-2",
                    suppliesEnabled && "bg-primary text-text-accent",
                  )}
                >
                  {t("Onboarding.form.suppliesTag")}
                </span>
              </span>
              <span
                className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
                  suppliesEnabled ? "bg-primary" : "bg-bg-secondary"
                }`}
              >
                <span
                  className={`absolute top-1 size-3 rounded-full bg-text-foreground-1 transition-transform ${
                    suppliesEnabled
                      ? "translate-x-5"
                      : "translate-x-1 bg-text-foreground-2"
                  }`}
                />
              </span>
            </button>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="text-xs text-text-foreground-2">
              <span className="mb-1.5 block">
                {t("Onboarding.form.currency")}
              </span>
              <span className="relative block">
                <select className="h-9 w-full appearance-none rounded-xl border border-border-input bg-transparent px-3 pr-9 text-sm text-text-foreground-1 outline-none focus:border-primary focus:ring-3 focus:ring-primary/50">
                  <option>{t("Onboarding.form.currencyValue")}</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-foreground-2" />
              </span>
            </label>
            <label className="text-xs text-text-foreground-2">
              <span className="mb-1.5 block">
                {t("Onboarding.form.country")}
              </span>
              <span className="relative block">
                <select className="h-9 w-full appearance-none rounded-xl border border-border-input bg-transparent px-3 pr-9 text-sm text-text-foreground-1 outline-none focus:border-primary focus:ring-3 focus:ring-primary/50">
                  <option>{t("Onboarding.form.countryValue")}</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-foreground-2" />
              </span>
            </label>
          </div>

          <label className="mt-4 block text-xs text-text-foreground-2">
            <span className="mb-1.5 block">
              {t("Onboarding.form.timezone")}
            </span>
            <span className="relative block">
              <select className="h-9 w-full appearance-none rounded-xl border border-border-input bg-transparent px-3 pr-9 text-sm text-text-foreground-1 outline-none focus:border-primary focus:ring-3 focus:ring-primary/50">
                <option>{t("Onboarding.form.timezoneValue")}</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-foreground-2" />
            </span>
          </label>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="hidden items-center gap-1.5 text-[11px] text-text-foreground-2 sm:flex">
              <CircleHelp className="size-3.5" />
              {t("Onboarding.form.requiredHint")}
            </span>
            <Button type="button" className="ml-auto gap-2">
              {t("Onboarding.form.continue")}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default OnboardingPage;
