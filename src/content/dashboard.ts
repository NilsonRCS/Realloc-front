import { ArrowRightLeft, LayoutDashboard, Settings, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { routes } from "@/lib/routes";

export type SidebarItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
};

export const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Visão geral", icon: LayoutDashboard, href: routes.dashboard },
  { id: "employees", label: "Colaboradores", icon: Users, href: routes.employees },
  { id: "relocations", label: "Realocações", icon: ArrowRightLeft, href: routes.relocations },
  { id: "settings", label: "Configurações", icon: Settings, href: routes.settings },
];
