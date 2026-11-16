import { logoutAction } from "@/actions/auth";
import { Button, Container, Heading } from "@/components/atoms";

export function DashboardHome({ name }: { name: string }) {
  return (
    <Container className="py-16">
      <Heading level={2}>Olá, {name}</Heading>
      <p className="mt-2 text-muted">Você está autenticado no RealLoc.</p>
      <form action={logoutAction} className="mt-8">
        <Button type="submit" variant="outline" size="md">
          Sair
        </Button>
      </form>
    </Container>
  );
}
