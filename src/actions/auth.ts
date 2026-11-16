"use server";

import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";
import { createSession, destroySession } from "@/lib/session";
import { login } from "@/services/auth";

export type LoginState = {
  error?: string;
  email?: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Informe e-mail e senha.", email };
  }

  const result = await login(email, password);
  if (!result.ok) {
    return { error: result.error, email };
  }

  await createSession(result.accessToken);
  redirect(routes.dashboard);
}

export async function logoutAction() {
  await destroySession();
  redirect(routes.login);
}
