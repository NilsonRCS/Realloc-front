"use client";

import { usePathname } from "next/navigation";
import { SidebarItem } from "@/components/molecules";
import { sidebarItems } from "@/content/dashboard";
import { routes } from "@/lib/routes";

/** A visão geral só fica ativa na rota exata; as demais, também em sub-rotas. */
function isActive(href: string, pathname: string) {
  return href === routes.dashboard ? pathname === href : pathname.startsWith(href);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full border-r border-border bg-background px-3 py-4 lg:px-4">
      <nav aria-label="Menu lateral" className="flex flex-col gap-1">
        {sidebarItems.map(({ id, ...item }) => (
          <SidebarItem key={id} {...item} active={isActive(item.href, pathname)} />
        ))}
      </nav>
    </aside>
  );
}
