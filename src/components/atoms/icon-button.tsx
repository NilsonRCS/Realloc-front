import type { ComponentPropsWithoutRef } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconButtonProps = Omit<ComponentPropsWithoutRef<"button">, "children"> & {
  icon: LucideIcon;
  /** Obrigatório: botões só com ícone precisam de nome acessível. */
  label: string;
};

export function IconButton({ icon: Icon, label, className, type = "button", ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        "flex size-9 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-foreground",
        className,
      )}
      {...props}
    >
      <Icon className="size-6" aria-hidden />
    </button>
  );
}
