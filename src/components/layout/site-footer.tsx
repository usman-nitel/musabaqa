import Link from "next/link";
import { Brand } from "@/components/brand";
import { copy, navigationItems } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const exploreLinks = navigationItems.filter(({ href }) =>
    ["/events", "/recitations", "/results"].includes(href),
  );

  return (
    <footer className="bg-deep-green text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12 md:py-16">
        <div>
          <Brand tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
            {copy.brand.description}
          </p>
        </div>
        <nav aria-label={copy.footer.explore}>
          <h2 className="text-sm font-semibold">{copy.footer.explore}</h2>
          <ul className="mt-3 flex flex-col">
            {exploreLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  className="inline-flex min-h-11 items-center text-sm text-white/75 hover:text-white"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={copy.footer.community}>
          <h2 className="text-sm font-semibold">{copy.footer.community}</h2>
          <Link
            className="mt-3 inline-flex min-h-11 items-center text-sm text-white/75 hover:text-white"
            href="/about"
          >
            {copy.footer.about}
          </Link>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/15 px-5 py-5 text-xs text-white/65 sm:px-8">
        {copy.footer.copyrightPrefix} {year} {copy.brand.name}
      </div>
    </footer>
  );
}