import type { ComponentProps } from "react";

export interface FormField<T> {
  name: T;
  label: string;
  placeholder: string;
  className?: string;
  type: ComponentProps<"input">["type"];
}
