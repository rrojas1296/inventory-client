import { cn } from "cn";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  icon?: React.ReactNode;
  inputClassName?: string;
}
const Input = ({ icon: Icon, inputClassName, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        "h-9 text-sm rounded-xl border border-border-input bg-transparent px-3 focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/50",
        Icon && "flex pr-0 gap-3",
        className,
      )}
    >
      <input
        className={cn(
          "h-full w-full text-text-foreground-1 text-sm flex-1 placeholder:text-text-foreground-2 placeholder:text-sm outline-none",
          inputClassName,
        )}
        {...props}
      />
      {Icon}
    </div>
  );
};

export default Input;
