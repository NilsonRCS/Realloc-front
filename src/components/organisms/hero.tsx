import { Badge, Button, Container, Heading } from "@/components/atoms";
import { hero } from "@/content/landing";

export function Hero() {
  return (
    <Container className="py-24 text-center md:py-32">
      <Badge>{hero.badge}</Badge>
      <Heading level={1} className="mx-auto mt-6 max-w-3xl">
        {hero.title} <span className="text-brand">{hero.highlight}</span>
      </Heading>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{hero.description}</p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
        <Button href={hero.secondaryCta.href} variant="outline">
          {hero.secondaryCta.label}
        </Button>
      </div>
    </Container>
  );
}
