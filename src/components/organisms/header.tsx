import { Button, Container, Logo } from "@/components/atoms";
import { NavLinks } from "@/components/molecules";
import { navItems } from "@/content/landing";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <NavLinks items={navItems} />
        <Button href="#contato" size="md">Solicitar demo</Button>
      </Container>
    </header>
  );
}
