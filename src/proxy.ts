import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes } from "@/lib/routes";
import { SESSION_COOKIE } from "@/lib/session";

/**
 * Barreira otimista: só verifica se existe cookie de sessão.
 * A validação real do token acontece na API (getMe) ao renderizar a página.
 */
export function proxy(request: NextRequest) {
  if (!request.cookies.has(SESSION_COOKIE)) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
