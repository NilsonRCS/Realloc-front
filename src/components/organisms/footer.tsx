import { brand } from "@/content/landing";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      © 2026 {brand.name}. {brand.tagline}.
    </footer>
  );
}
