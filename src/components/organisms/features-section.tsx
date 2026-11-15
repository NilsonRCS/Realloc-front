import { Container } from "@/components/atoms";
import { FeatureCard, SectionHeader } from "@/components/molecules";
import { features } from "@/content/landing";

export function FeaturesSection() {
  return (
    <section id="recursos" className="bg-surface py-24">
      <Container>
        <SectionHeader title="Tudo o que você precisa para realocar com confiança" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
