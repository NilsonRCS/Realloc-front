import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Container } from "@/components/atoms";
import { DashboardHome } from "@/components/organisms";
import { routes } from "@/lib/routes";
import { getSessionToken } from "@/lib/session";
import { getMe } from "@/services/auth";

export const metadata: Metadata = {
  title: "Dashboard | RealLoc",
};

/** Lê cookie e consulta a API: dados dinâmicos, por isso ficam dentro de Suspense. */
async function CurrentUser() {
  const token = await getSessionToken();
  const user = token ? await getMe(token) : null;

  // Token ausente, inválido ou expirado.
  if (!user) redirect(routes.login);

  return <DashboardHome name={user.name ?? user.email} />;
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<Container className="py-16 text-muted">Carregando...</Container>}>
      <CurrentUser />
    </Suspense>
  );
}
