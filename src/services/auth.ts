import "server-only";
import { env } from "@/lib/env";

export type AuthUser = {
  id: string;
  name?: string;
  email: string;
};

export type LoginResult =
  | { ok: true; accessToken: string }
  | { ok: false; error: string };

async function readMessage(response: Response) {
  try {
    const body = await response.json();
    const message = body?.message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string") return message;
  } catch {
    // corpo vazio ou não-JSON: usa a mensagem padrão
  }
  return null;
}

/** POST /api/auth/login */
export async function login(email: string, password: string): Promise<LoginResult> {
  let response: Response;
  try {
    response = await fetch(`${env.apiUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });
  } catch {
    return { ok: false, error: "Não foi possível conectar ao servidor. Tente novamente." };
  }

  if (response.ok) {
    const data = await response.json().catch(() => null);
    if (typeof data?.accessToken === "string") {
      return { ok: true, accessToken: data.accessToken };
    }
    return { ok: false, error: "Resposta inesperada do servidor." };
  }

  if (response.status === 400 || response.status === 401) {
    return { ok: false, error: "E-mail ou senha inválidos." };
  }
  const message = await readMessage(response);
  return { ok: false, error: message ?? "Erro ao entrar. Tente novamente mais tarde." };
}

/** GET /api/auth/me. Retorna null se o token for inválido ou expirado. */
export async function getMe(token: string): Promise<AuthUser | null> {
  try {
    const response = await fetch(`${env.apiUrl}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!response.ok) return null;
    return (await response.json()) as AuthUser;
  } catch {
    return null;
  }
}
