import type { FormField } from "@/modules/shared/types/formField";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({
    error: "Login.form.fields.email.errors.email",
  }),
  password: z
    .string({
      error: "Login.form.fields.password.errors.required",
    })
    .min(1, {
      error: "Login.form.fields.password.errors.required",
    }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const loginControls: FormField<keyof LoginSchema>[] = [
  {
    name: "email",
    type: "email",
    label: "Login.form.fields.email.label",
    placeholder: "Login.form.fields.email.placeholder",
  },
  {
    name: "password",
    type: "password",
    label: "Login.form.fields.password.label",
    placeholder: "Login.form.fields.password.placeholder",
  },
];
