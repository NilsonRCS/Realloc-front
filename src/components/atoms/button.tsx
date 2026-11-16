import Link from "next/link";
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

type Style = { variant?: Variant; size?: Size };

function styles({ variant = "primary", size = "lg" }: Style, className?: string) {
  return cn(
    "inline-block rounded-lg font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = Style & ComponentPropsWithoutRef<"button">;

/** Botão de ação (submit, etc.). Para navegação use ButtonLink. */
export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={styles({ variant, size }, className)} {...props} />;
}

type ButtonLinkProps = Style & ComponentPropsWithoutRef<typeof Link>;

/** Link de navegação com aparência de botão. */
export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={styles({ variant, size }, className)} {...props} />;
}
