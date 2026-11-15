import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "inverse";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-brand-foreground hover:opacity-90",
  outline: "border border-border hover:bg-surface",
  inverse: "bg-background text-foreground hover:opacity-90",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3",
};

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: Size;
};

/** Link estilizado como botão (todas as CTAs da landing navegam). */
export function Button({
  variant = "primary",
  size = "lg",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-block rounded-lg font-semibold transition",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
