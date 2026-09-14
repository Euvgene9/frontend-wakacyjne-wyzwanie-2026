"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product, ProductsResponse } from "@/types/product";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useFavorites } from "@/app/favourites";



interface ProductListProps {
  initialData: ProductsResponse;
}

async function fetchProducts(search: string): Promise<ProductsResponse> {
  const url = search
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
    : "https://dummyjson.com/products";

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Couldnt load the products");
  }

  return res.json();
}

export function ProductList({ initialData }: ProductListProps) {
  const [search, setSearch] = useState("");
  const { isFavorite, toggleFavorite } = useFavorites();

  const { data, isFetching } = useQuery({
    queryKey: ["products", search],
    queryFn: () => fetchProducts(search),
    initialData: search === "" ? initialData : undefined,
    staleTime: 60_000,
  });

  return (
    <div className="flex flex-col gap-6">
      <Input
        type="text"
        placeholder="Find products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {data?.products.map((product: Product) => (
          <div key={product.id} className="relative rounded-lg border p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => toggleFavorite(product.id)}
              aria-label={isFavorite(product.id) ? "Delete from favourites" : "Add to favourites"}
            >
              <Heart
                className={
                  isFavorite(product.id)
                    ? "fill-red-500 text-red-500"
                    : "text-muted-foreground"
                }
              />
            </Button>

            <h2 className="font-semibold pr-8">{product.title}</h2>
            <p className="text-muted-foreground text-sm">{product.category}</p>
            <p className="mt-2 font-medium">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}