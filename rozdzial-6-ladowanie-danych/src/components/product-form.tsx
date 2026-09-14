"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product, ProductsResponse } from "@/types/product";

interface NewProduct {
  title: string;
  price: number;
  category: string;
}

interface MutationContext {
  previousData: ProductsResponse | undefined;
}

async function addProduct(product: NewProduct) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("Failed to add the product");
  }

  return res.json();
}


  export function ProductForm() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const mutation = useMutation<Product, Error, NewProduct, MutationContext>({
    mutationFn: addProduct,

    onMutate: async (newProduct) => {
   
      await queryClient.cancelQueries({ queryKey: ["products", ""] });

      const previousData = queryClient.getQueryData<ProductsResponse>(["products", ""]);

      const optimisticProduct: Product = {
        id: Date.now(),
        title: newProduct.title,
        price: newProduct.price,
        category: newProduct.category,
        description: "",
        thumbnail: "",
      };

      queryClient.setQueryData<ProductsResponse>(["products", ""], (old) => {
        if (!old) return old;
        return {
          ...old,
          products: [optimisticProduct, ...old.products],
          total: old.total + 1,
        };
      });

      return { previousData };
    },

    onError: (_err, _newProduct, context) => {

      if (context?.previousData) {
        queryClient.setQueryData(["products", ""], context.previousData);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setTitle("");
      setPrice("");
      setCategory("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      title,
      price: Number(price),
      category,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        min={0}
        step="0.01"
      />

      <Input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Adding..." : "Add product"}
      </Button>

      {mutation.isError && (
        <p className="text-destructive text-sm">
          {mutation.error instanceof Error ? mutation.error.message : "Error"}
        </p>
      )}
    </form>
  );
  }