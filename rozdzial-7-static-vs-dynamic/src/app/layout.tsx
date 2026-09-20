import type { Metadata } from "next";
import "./globals.css";

// TODO: Zastąp domyślne metadane konfiguracją opisującą cały serwis.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'), 
  title: {
    default: "Render & SEO Lab",
    template: "%s | Render & SEO Lab",
  },
  description: "Katalog produktów prezentujący strategie renderowania i SEO w Next.js.",
  openGraph: {
    title: "Render & SEO Lab",
    description: "Katalog produktów prezentujący strategie renderowania i SEO w Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
