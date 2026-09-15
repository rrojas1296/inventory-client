import type { FormField } from "@/modules/shared/types/formField";
import z from "zod";

export const registerSchema = z
  .object({
    firstName: z.string({
      error: "Register.form.fields.firstName.errors.required",
    }),
    lastName: z.string({
      error: "Register.form.fields.lastName.errors.required",
    }),
    email: z.email({
      error: "Register.form.fields.email.errors.email",
    }),
    password: z
      .string({
        error: "Register.form.fields.password.errors.required",
      })
      .min(8, {
        error: "Register.form.fields.password.errors.min",
      }),
    confirmPassword: z.string({
      error: "Register.form.fields.confirmPassword.errors.required",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Register.form.fields.confirmPassword.errors.notMatch",
        path: ["confirmPassword"],
        input: data,
      });
    }
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const registerControls: FormField<keyof RegisterSchema>[] = [
  {
    name: "firstName",
    type: "text",
    label: "Register.form.fields.firstName.label",
    placeholder: "Register.form.fields.firstName.placeholder",
    className: "col-span-1",
  },
  {
    name: "lastName",
    type: "text",
    label: "Register.form.fields.lastName.label",
    placeholder: "Register.form.fields.lastName.placeholder",
    className: "col-span-1",
  },
  {
    name: "email",
    type: "email",
    label: "Register.form.fields.email.label",
    placeholder: "Register.form.fields.email.placeholder",
    className: "col-span-2",
  },
  {
    name: "password",
    type: "password",
    label: "Register.form.fields.password.label",
    placeholder: "Register.form.fields.password.placeholder",
    className: "col-span-2",
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Register.form.fields.confirmPassword.label",
    placeholder: "Register.form.fields.confirmPassword.placeholder",
    className: "col-span-2",
  },
];
