import type { NavItem } from "@/content/landing";

export function NavLinks({ items }: { items: NavItem[] }) {
  return (
    <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-muted md:flex">
      {items.map((item) => (
        <a key={item.href} href={item.href} className="hover:text-foreground">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
