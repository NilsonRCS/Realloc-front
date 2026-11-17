import type { ReactNode } from "react";
import { AppHeader, Sidebar } from "@/components/organisms";

/**
 * Layout da área logada: header no topo (largura total) e, abaixo,
 * menu lateral (20%) + conteúdo (80%). Só o conteúdo rola.
 */
export function AppTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <AppHeader />
      <div className="grid min-h-0 flex-1 grid-cols-[20%_1fr]">
        <Sidebar />
        <main className="min-w-0 overflow-y-auto bg-surface">{children}</main>
      </div>
    </div>
  );
}
