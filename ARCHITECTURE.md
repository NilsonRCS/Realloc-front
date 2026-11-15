# Arquitetura

O front-end segue **Atomic Design** sobre o App Router do Next.js.

```
src/
├── app/                 # Páginas (rotas) - apenas composição
├── components/
│   ├── atoms/           # Menor unidade, sem regra de negócio (Button, Badge, Heading...)
│   ├── molecules/       # Atoms combinados com uma função única (FeatureCard, StepItem...)
│   ├── organisms/       # Seções completas da interface (Header, Hero, FeaturesSection...)
│   └── templates/       # Layout da página, sem conteúdo (LandingTemplate)
├── content/             # Textos e dados estáticos tipados, separados da UI
└── lib/                 # Utilitários puros (cn)
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
