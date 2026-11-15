import type { ReactNode } from "react";
import { Footer, Header } from "@/components/organisms";

/** Esqueleto da página: define header, área principal e footer. */
export function LandingTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
