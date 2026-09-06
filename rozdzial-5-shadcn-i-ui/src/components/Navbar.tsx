"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { NAV_LINKS } from "@/src/config";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-6 grid place-items-center">
      <Tabs value={pathname}>
        <TabsList variant="line">
          {NAV_LINKS.map((link) => (
            <TabsTrigger key={link.id} value={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}