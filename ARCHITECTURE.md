# Arquitetura

O front-end segue **Atomic Design** sobre o App Router do Next.js.

```
src/
├── app/                 # Rotas, agrupadas por route groups: (marketing) e (auth)
├── components/
│   ├── atoms/           # Menor unidade, sem regra de negócio (Button, Badge, Heading...)
│   ├── molecules/       # Atoms combinados com uma função única (FeatureCard, StepItem...)
│   ├── organisms/       # Seções completas da interface (Header, Hero, FeaturesSection...)
│   └── templates/       # Layout da página, sem conteúdo (LandingTemplate, AuthTemplate)
├── content/             # Textos e dados estáticos tipados, separados da UI
└── lib/                 # Utilitários puros (cn) e rotas (routes.ts)
```

## Regras

1. **Dependência em um só sentido:** atoms → molecules → organisms → templates → pages.
   Um nível só importa dos níveis abaixo dele.
2. **Atoms e molecules são genéricos:** recebem dados por props e não conhecem o conteúdo da landing.
   Apenas organisms leem de `src/content`.
3. **Páginas só compõem:** `app/**/page.tsx` monta organisms dentro de um template.
4. **Imports por barrel:** cada nível expõe um `index.ts` (`@/components/atoms`).
5. **Server Components por padrão:** use `"use client"` apenas onde houver interatividade.
6. **Conteúdo fora do JSX:** textos e listas ficam em `src/content`, facilitando
   manutenção e futura internacionalização.

## Adicionando uma nova tela

1. Reuse atoms/molecules existentes ou crie novos se faltar.
2. Monte as seções em `organisms/`.
3. Crie um template se o layout for diferente.
4. Componha tudo em `app/<rota>/page.tsx`.

## Rotas

Usamos [route groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups)
para separar contextos sem afetar a URL, mantendo um único root layout:

| URL      | Arquivo                              | Template          |
| -------- | ------------------------------------ | ----------------- |
| `/`      | `app/(marketing)/page.tsx`           | `LandingTemplate` |
| `/login` | `app/(auth)/login/page.tsx`          | `AuthTemplate`    |

Os caminhos ficam centralizados em `src/lib/routes.ts`; nunca escreva URLs soltas nos componentes.
Futuras áreas autenticadas entram em um grupo próprio, como `app/(app)/dashboard`.

### Área logada

Cada item do menu lateral é uma **rota real** (`next/link`), não estado no cliente:
o layout `(app)/layout.tsx` (menu) persiste e só o conteúdo troca, com prefetch automático.
Telas com dados dinâmicos devem colocá-los em `<Suspense>` (um por bloco) ou usar
`loading.tsx`; o esqueleto padrão fica em `(app)/loading.tsx`.
