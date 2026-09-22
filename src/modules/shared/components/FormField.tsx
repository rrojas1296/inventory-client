import type { ComponentProps } from "react";
import Input from "./Input";
import { cn } from "cn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./shadcn/select";
import type { FormFieldType, SelectOption } from "../types/formField";
import { Controller } from "react-hook-form";

interface Props extends ComponentProps<"input"> {
  label: string;
  placeholder: string;
  type: FormFieldType;
  control?: any;
  icon?: React.ReactNode;
  error?: string;
  options?: SelectOption[];
}

const FormField = ({
  label,
  type,
  icon,
  options,
  control,
  error,
  className,
  ...props
}: Props) => {
  const generateControl = () => {
    switch (type) {
      case "select":
        return (
          <Controller
            name={props.name ?? ""}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Select
                  onValueChange={onChange}
                  value={value ?? ""}
                  modal={true}
                  items={options}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={props.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {options?.map(({ value, label }) => {
                      return (
                        <SelectItem key={label} value={value}>
                          {label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              );
            }}
          />
        );
      default:
        return <Input type={type} icon={icon} {...props} />;
    }
  };
  return (
    <div className={cn("flex flex-col gap-1 text-sm", className)}>
      <label className="text-text-foreground-1">{label}</label>
      {generateControl()}
      {error && <p className="text-sm text-text-danger">{error}</p>}
    </div>
  );
};

export default FormField;
