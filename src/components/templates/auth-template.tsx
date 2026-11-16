import type { ReactNode } from "react";
import { Logo } from "@/components/atoms";

/** Layout das telas de autenticação: logo e conteúdo centralizados. */
export function AuthTemplate({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-surface px-6 py-12">
      <Logo />
      {children}
    </main>
  );
}
