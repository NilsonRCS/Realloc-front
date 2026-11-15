import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-brand-soft px-4 py-1 text-sm font-medium text-brand",
        className,
      )}
      {...props}
    />
  );
}
