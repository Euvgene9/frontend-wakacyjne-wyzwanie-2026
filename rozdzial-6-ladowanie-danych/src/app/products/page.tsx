import { ProductsResponse } from "@/types/product";
import {ProductList} from "@/components/product-list";
import { ProductForm } from "@/components/product-form";

async function getProducts(): Promise<ProductsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://dummyjson.com/products", {
    next: { tags: ["products"] },
  });

  if (!res.ok) {
    throw new Error("Can't load the products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const initialData = await getProducts();

  return (
    <div className="mx-4 md:mx-12">
      <ProductForm />
      <ProductList initialData={initialData} />
    </div>
  );
}