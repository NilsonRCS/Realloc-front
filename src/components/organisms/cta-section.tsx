import { Button, Heading } from "@/components/atoms";
import { brand, cta } from "@/content/landing";

export function CtaSection() {
  return (
    <section id="contato" className="px-6 pb-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-brand px-8 py-16 text-center text-brand-foreground">
        <Heading level={2}>{cta.title}</Heading>
        <p className="mx-auto mt-4 max-w-xl opacity-90">{cta.description}</p>
        <Button
          href={`mailto:${brand.contactEmail}`}
          variant="inverse"
          className="mt-8"
        >
          {cta.button}
        </Button>
      </div>
    </section>
  );
}
