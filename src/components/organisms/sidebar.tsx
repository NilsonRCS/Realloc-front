"use client";

import { usePathname } from "next/navigation";
import { Logo } from "@/components/atoms";
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
    <aside className="flex h-screen flex-col gap-8 border-r border-border bg-background px-3 py-6 lg:px-4">
      <div className="flex justify-center lg:justify-start lg:px-2">
        <Logo />
      </div>
      <nav aria-label="Menu lateral" className="flex flex-col gap-1">
        {sidebarItems.map(({ id, ...item }) => (
          <SidebarItem key={id} {...item} active={isActive(item.href, pathname)} />
        ))}
      </nav>
    </aside>
  );
}
