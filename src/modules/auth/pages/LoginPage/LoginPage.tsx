import FormField from "@/modules/shared/components/FormField";
import Button from "@/modules/shared/components/shadcn/button";
import { EyeIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="bg-bg-primary h-screen w-screen flex justify-center items-center">
      <div className="w-10/12 flex flex-col gap-5">
        <FormField label="Correo" placeholder="Correo" type="email" />
        <FormField
          label="Contraseña"
          placeholder="*********"
          type="password"
          icon={
            <Button
              size="icon"
              variant="ghost"
              className="bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-transparent outline-none focus-visible:border-none"
            >
              <EyeIcon className="size-5 text-text-foreground-1" />
            </Button>
          }
        />
        <Button>Ingresar</Button>
      </div>
    </div>
  );
};

export default LoginPage;
