import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-border bg-background px-3 py-2 outline-none placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/30",
        className,
      )}
      {...props}
    />
  );
}
