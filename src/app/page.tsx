import {
  CtaSection,
  FeaturesSection,
  Hero,
  HowItWorksSection,
} from "@/components/organisms";
import { LandingTemplate } from "@/components/templates";

export default function Home() {
  return (
    <LandingTemplate>
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
    </LandingTemplate>
  );
}
