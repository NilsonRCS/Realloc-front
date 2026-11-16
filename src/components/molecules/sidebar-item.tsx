import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type SidebarItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
  active?: boolean;
};

export function SidebarItem({ label, icon: Icon, href, active = false }: SidebarItemProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex w-full items-center justify-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition lg:justify-start",
        active ? "bg-brand-soft text-brand" : "text-muted hover:bg-surface hover:text-foreground",
      )}
    >
      <Icon className="size-5 shrink-0" aria-hidden />
      {/* Em telas estreitas (20% é pouco) mostramos só o ícone. */}
      <span className="hidden lg:inline">{label}</span>
    </Link>
  );
}
