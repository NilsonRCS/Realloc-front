import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Level = 1 | 2 | 3;

const styles: Record<Level, string> = {
  1: "text-4xl font-bold tracking-tight md:text-6xl",
  2: "text-3xl font-bold tracking-tight md:text-4xl",
  3: "text-lg font-semibold",
};

type HeadingProps = ComponentPropsWithoutRef<"h1"> & { level?: Level };

export function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag className={cn(styles[level], className)} {...props} />;
}
