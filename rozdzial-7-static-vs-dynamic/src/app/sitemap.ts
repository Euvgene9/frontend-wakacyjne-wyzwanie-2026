import type { MetadataRoute } from "next";

import { getProducts } from "@/lib/products";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
    const products = getProducts();

    const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${BASE_URL}/products/${String(product.id)}`,
    }));

    return [
        {
            url: BASE_URL,
        },
        {
            url: `${BASE_URL}/products`,
        },
        ...productEntries,
    ];
}