"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/actions/auth";
import { Button, Heading } from "@/components/atoms";
import { FormField } from "@/components/molecules";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-sm">
      <Heading level={2} className="text-center !text-2xl md:!text-2xl">
        Entrar no RealLoc
      </Heading>
      <p className="mt-2 text-center text-sm text-muted">
        Acesse sua conta para gerenciar realocações.
      </p>
      <form action={formAction} className="mt-8 flex flex-col gap-5">
        <FormField
          id="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          placeholder="voce@empresa.com"
          defaultValue={state.email}
          required
        />
        <FormField
          id="password"
          label="Senha"
          type="password"
          autoComplete="current-password"
          required
        />
        {state.error && (
          <p role="alert" className="text-sm text-red-600 dark:text-red-400">
            {state.error}
          </p>
        )}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </div>
  );
}
