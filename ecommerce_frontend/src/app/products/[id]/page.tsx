import ProductDetailPage from "@/features/landing-page/components/products/[id]/ProductDetailPage";

type Params = Promise<{ id: string }>;

interface PageProps {
  params: Params;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductDetailPage id={resolvedParams.id} />;
}
