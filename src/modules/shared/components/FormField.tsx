import type { ComponentProps } from "react";
import Input from "./Input";

interface Props extends ComponentProps<"input"> {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  type: ComponentProps<"input">["type"];
}
const FormField = ({ label, type, icon, ...props }: Props) => {
  const generateControl = () => {
    switch (type) {
      default:
        return <Input type={type} icon={icon} {...props} />;
    }
  };
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label className="text-text-foreground-1">{label}</label>
      {generateControl()}
    </div>
  );
};

export default FormField;
