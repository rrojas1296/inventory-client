import type { ComponentProps } from "react";

export interface FormField<T> {
  name: T;
  label: string;
  placeholder: string;
  type: ComponentProps<"input">["type"];
}
