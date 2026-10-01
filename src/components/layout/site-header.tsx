import Link from "next/link";
import { Search } from "lucide-react";
import { Brand } from "@/components/brand";
import { DesktopNavLinks } from "@/components/layout/desktop-nav-links";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-[#f8faf5]/95 shadow-[0_2px_8px_rgb(23_60_46/0.06)] supports-[backdrop-filter]:bg-[#f8faf5]/[0.84] supports-[backdrop-filter]:backdrop-blur-[12px]">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <Brand />
        <div className="hidden items-center gap-7 lg:flex">
          <DesktopNavLinks />
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={copy.navigation.searchLabel}
            title={copy.navigation.searchLabel}
          >
            <Search aria-hidden="true" size={19} />
          </Button>
          <Button asChild variant="green">
            <Link href="/how-to-participate">{copy.navigation.participate}</Link>
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}