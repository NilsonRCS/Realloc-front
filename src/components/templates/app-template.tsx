import type { ReactNode } from "react";
import { Sidebar } from "@/components/organisms";

/** Layout da área logada: menu lateral (20%) + conteúdo (80%). */
export function AppTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-[20%_1fr]">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <main className="min-w-0 bg-surface">{children}</main>
    </div>
  );
}
