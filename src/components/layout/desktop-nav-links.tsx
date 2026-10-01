"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, navigationItems } from "@/lib/content";

function isCurrentPath(pathname: string, href: string): boolean {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label={copy.navigation.primaryLabel} className="hidden items-center gap-7 lg:flex">
      {navigationItems.map(({ href, label }) => {
        const active = isCurrentPath(pathname, href);

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`min-h-11 content-center text-sm font-medium transition-colors hover:text-primary ${
              active ? "text-primary" : "text-foreground/80"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}