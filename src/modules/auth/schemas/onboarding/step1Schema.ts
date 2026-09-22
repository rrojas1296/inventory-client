import z from "zod";

export const onboarding1Schema = z.object({
  storeName: z.string({
    error: "Onboarding.form.fields.storeName.errors.required",
  }),
  storeImage: z.string().optional(),
  storeType: z.string({
    error: "Onboarding.form.fields.storeType.errors.required",
  }),
  suppliesEnabled: z.boolean({
    error: "Onboarding.form.fields.suppliesEnabled.errors.required",
  }),
  storeCurrency: z.string({
    error: "Onboarding.form.fields.storeCurrency.errors.required",
  }),
  storeCountry: z.string({
    error: "Onboarding.form.fields.storeCountry.errors.required",
  }),
  storeTimezone: z.string({
    error: "Onboarding.form.fields.storeTimezone.errors.required",
  }),
});

export type Onboarding1Schema = z.infer<typeof onboarding1Schema>;
