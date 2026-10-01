"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { copy, navigationItems } from "@/lib/content";
import { Button, buttonVariants } from "@/components/ui/button";

export function MobileMenu() {
  const pathname = usePathname();

  return <MobileMenuPanel key={pathname} pathname={pathname} />;
}

function MobileMenuPanel({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={copy.navigation.searchLabel}
          title={copy.navigation.searchLabel}
        >
          <Search aria-hidden="true" size={19} />
        </Button>
        <Button
          ref={triggerRef}
          type="button"
          variant="outline"
          size="icon"
          aria-label={isOpen ? copy.navigation.closeMenu : copy.navigation.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-panel"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </Button>
      </div>
      <nav
        id="mobile-navigation-panel"
        aria-label={copy.navigation.mobileLabel}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full z-50 border-b border-border bg-background px-5 py-3 shadow-lg sm:px-8"
      >
        <ul className="mx-auto flex max-w-7xl flex-col">
          {navigationItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isCurrentPath(pathname, href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center border-b border-border/70 text-base font-medium text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/how-to-participate"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({ variant: "green", className: "w-full" })}
            >
              {copy.navigation.participate}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function isCurrentPath(pathname: string, href: string): boolean {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}