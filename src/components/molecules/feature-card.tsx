import { Heading } from "@/components/atoms";
import type { Feature } from "@/content/landing";

export function FeatureCard({ title, description }: Feature) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <Heading level={3}>{title}</Heading>
      <p className="mt-2 text-muted">{description}</p>
    </div>
  );
}
