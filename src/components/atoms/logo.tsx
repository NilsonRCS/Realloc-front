import Link from "next/link";
import { routes } from "@/lib/routes";

export function Logo() {
  return (
    <Link
      href={routes.home}
      className="text-xl font-bold tracking-tight"
      aria-label="RealLoc - início"
    >
      Real<span className="text-brand">Loc</span>
    </Link>
  );
}
