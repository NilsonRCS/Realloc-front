import { Heading } from "@/components/atoms";

export function SectionHeader({ title }: { title: string }) {
  return <Heading level={2} className="text-center">{title}</Heading>;
}
