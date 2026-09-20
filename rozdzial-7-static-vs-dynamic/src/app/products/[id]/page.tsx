import { notFound } from "next/navigation";

import { ProductDetails } from "@/components/product-details";
import { getProduct, getProducts } from "@/lib/products";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getProducts().map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (product === undefined) {
    return {};
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/products/${String(product.id)}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      type: "website",
      images: [product.thumbnail],
    },
  };
}
export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  if (product === undefined) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
