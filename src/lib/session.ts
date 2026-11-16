import "server-only";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "realloc_token";

export async function getSessionToken() {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value;
}

/** Guarda o token em cookie httpOnly: inacessível ao JavaScript do navegador. */
export async function createSession(token: string) {
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
