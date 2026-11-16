import type { ComponentPropsWithoutRef } from "react";
import { Input, Label } from "@/components/atoms";

type FormFieldProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label: string;
};

export function FormField({ id, label, ...inputProps }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} {...inputProps} />
    </div>
  );
}
