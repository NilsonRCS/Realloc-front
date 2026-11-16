import { Container, Heading } from "@/components/atoms";

type ComingSoonProps = { title: string; description: string };

/** Página provisória de seções ainda em construção. */
export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <Container className="py-16">
      <Heading level={2}>{title}</Heading>
      <p className="mt-2 text-muted">{description}</p>
      <div className="mt-8 rounded-2xl border border-dashed border-border bg-background p-12 text-center text-muted">
        Em breve.
      </div>
    </Container>
  );
}
