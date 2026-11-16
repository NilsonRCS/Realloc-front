import { ButtonLink, Container, Logo } from "@/components/atoms";
import { NavLinks } from "@/components/molecules";
import { navItems } from "@/content/landing";
import { routes } from "@/lib/routes";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <NavLinks items={navItems} />
        <div className="flex items-center gap-3">
          <ButtonLink href={routes.login} variant="outline" size="md">
            Entrar
          </ButtonLink>
          <ButtonLink href="#contato" size="md" className="hidden sm:inline-block">
            Solicitar demo
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
