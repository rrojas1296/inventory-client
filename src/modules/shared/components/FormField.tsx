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
import type { SelectOption } from "../types/formField";

interface Props extends ComponentProps<"input"> {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  type: ComponentProps<"input">["type"];
  error?: string;
  options?: SelectOption[];
}
const FormField = ({
  label,
  type,
  icon,
  options,
  error,
  className,
  ...props
}: Props) => {
  const generateControl = () => {
    switch (type) {
      case "select":
        return (
          <Select modal={true} items={options}>
            <SelectTrigger value={props.value}>
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
