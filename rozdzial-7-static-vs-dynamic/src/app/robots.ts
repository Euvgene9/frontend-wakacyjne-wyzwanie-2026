import type { MetadataRoute } from "next";

const BASE_URL = "https://example.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            disallow: "/search",
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}