import { cn } from "cn";
import { CheckIcon } from "lucide-react";

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox = ({ setChecked, checked }: Props) => {
  return (
    <div
      onClick={() => setChecked(!checked)}
      className={cn(
        "size-5 rounded-lg bg-bg-secondary border border-border-card grid place-items-center",
        checked && "bg-primary border-primary",
      )}
    >
      {checked && <CheckIcon className="size-3 text-text-foreground-1" />}
    </div>
  );
};

export default CheckBox;
