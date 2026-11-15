import { Heading } from "@/components/atoms";
import type { Step } from "@/content/landing";

type StepItemProps = Step & { index: number };

export function StepItem({ index, title, description }: StepItemProps) {
  return (
    <li>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-brand-foreground">
        {index}
      </span>
      <Heading level={3} className="mt-4">{title}</Heading>
      <p className="mt-2 text-muted">{description}</p>
    </li>
  );
}
