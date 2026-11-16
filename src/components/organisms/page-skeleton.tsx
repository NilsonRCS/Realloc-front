import { Container, Skeleton } from "@/components/atoms";

/** Esqueleto exibido enquanto a próxima tela carrega. */
export function PageSkeleton() {
  return (
    <Container className="py-16" role="status" aria-label="Carregando">
      <Skeleton className="h-9 w-64" />
      <Skeleton className="mt-3 h-5 w-96 max-w-full" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
    </Container>
  );
}
