/** Fonte única das rotas da aplicação. */
export const routes = {
  home: "/",
  login: "/login",
  dashboard: "/dashboard",
  employees: "/dashboard/colaboradores",
  relocations: "/dashboard/realocacoes",
  settings: "/dashboard/configuracoes",
} as const;
