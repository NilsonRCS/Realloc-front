import { CircleUser } from "lucide-react";
import { IconButton, Logo } from "@/components/atoms";
import { brand } from "@/content/landing";

/** Header compacto da área logada: ocupa o topo do menu e do conteúdo. */
export function AppHeader() {
  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-background px-4">
      <div className="flex items-center gap-4">
        <Logo />
        <span className="hidden text-sm text-muted md:inline">{brand.tagline}</span>
      </div>
      {/* TODO: abrir menu do perfil (conta, sair) quando definido. */}
      <IconButton icon={CircleUser} label="Perfil" />
    </header>
  );
}
