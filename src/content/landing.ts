export type NavItem = { href: string; label: string };
export type Feature = { title: string; description: string };
export type Step = { title: string; description: string };

export const brand = {
  name: "RealLoc",
  tagline: "Gestão inteligente de realocação",
  contactEmail: "contato@realloc.com.br",
} as const;

export const navItems: NavItem[] = [
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export const hero = {
  badge: "Plataforma de RH",
  title: "Gestão inteligente de",
  highlight: "realocação",
  description:
    "Planeje, acompanhe e automatize a mudança de colaboradores entre cidades, países e áreas, com menos burocracia e mais previsibilidade.",
  primaryCta: { href: "#contato", label: "Solicitar demonstração" },
  secondaryCta: { href: "#como-funciona", label: "Ver como funciona" },
};

export const features: Feature[] = [
  {
    title: "Processos centralizados",
    description:
      "Todas as etapas da realocação, do pedido à chegada, em um só lugar e com responsáveis claros.",
  },
  {
    title: "Automação de tarefas",
    description:
      "Fluxos, prazos e notificações automáticos reduzem o trabalho manual do time de RH.",
  },
  {
    title: "Controle de custos",
    description:
      "Orçamento, estimativas e gastos reais lado a lado para decidir com segurança.",
  },
  {
    title: "Conformidade e documentos",
    description:
      "Checklists, documentação e prazos legais organizados e sempre rastreáveis.",
  },
  {
    title: "Experiência do colaborador",
    description:
      "Um portal simples para o colaborador acompanhar cada passo e tirar dúvidas.",
  },
  {
    title: "Indicadores e relatórios",
    description:
      "Painéis com tempo, custo e satisfação para melhorar continuamente o programa.",
  },
];

export const steps: Step[] = [
  { title: "Solicite", description: "Abra a realocação com os dados do colaborador e do destino." },
  { title: "Planeje", description: "Defina orçamento, etapas e responsáveis com modelos prontos." },
  { title: "Acompanhe", description: "Veja o andamento em tempo real e resolva pendências rápido." },
  { title: "Analise", description: "Meça resultados e aprimore as próximas realocações." },
];

export const cta = {
  title: "Pronto para simplificar suas realocações?",
  description: "Fale com nosso time e veja o RealLoc em ação.",
  button: "Solicitar demonstração",
};
