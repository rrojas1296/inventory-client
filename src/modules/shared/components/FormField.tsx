import type { ComponentProps } from "react";
import Input from "./Input";
import { cn } from "cn";

interface Props extends ComponentProps<"input"> {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  type: ComponentProps<"input">["type"];
  error?: string;
}
const FormField = ({
  label,
  type,
  icon,
  error,
  className,
  ...props
}: Props) => {
  const generateControl = () => {
    switch (type) {
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
