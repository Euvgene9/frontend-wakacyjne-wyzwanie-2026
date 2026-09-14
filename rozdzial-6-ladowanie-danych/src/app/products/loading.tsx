import { ProductListSkeleton } from "@/components/product-card-skeleton";


export default function Loading() {
  return (
     <div className="mx-4 md:mx-12">
      <ProductListSkeleton count={8} />
    </div>
  );
}