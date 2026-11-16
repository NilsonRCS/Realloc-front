"use client";

import { Button, Heading } from "@/components/atoms";
import { FormField } from "@/components/molecules";

export function LoginForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: integrar com a API de autenticação quando o back-end estiver definido.
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-sm">
      <Heading level={2} className="text-center !text-2xl md:!text-2xl">
        Entrar no RealLoc
      </Heading>
      <p className="mt-2 text-center text-sm text-muted">
        Acesse sua conta para gerenciar realocações.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <FormField
          id="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          placeholder="voce@empresa.com"
          required
        />
        <FormField
          id="password"
          label="Senha"
          type="password"
          autoComplete="current-password"
          required
        />
        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>
    </div>
  );
}
