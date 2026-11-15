import { Container } from "@/components/atoms";
import { SectionHeader, StepItem } from "@/components/molecules";
import { steps } from "@/content/landing";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24">
      <Container>
        <SectionHeader title="Como funciona" />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StepItem key={step.title} index={i + 1} {...step} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
