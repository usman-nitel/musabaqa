import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";

export function ArchiveCta() {
  return (
    <section aria-labelledby="archive-heading" className="bg-[#004a33] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-5 py-9 sm:px-8 sm:py-11 lg:flex-row lg:items-center lg:gap-7 lg:py-12">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#f2d28a]">
          <Headphones aria-hidden="true" size={23} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#f2d28a] sm:text-sm lg:mb-6">
            A living digital legacy
          </p>
          <h2
            id="archive-heading"
            className="font-serif text-3xl font-medium leading-tight sm:text-4xl"
          >
            Explore the Musabaqa Archive
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#c8d8ce] sm:text-base">
            Listen back to remarkable recitations and revisit the moments that bring our community together.
          </p>
        </div>
        <Link
          href="/archive"
          className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-md bg-gold-button px-5 py-3 text-sm font-semibold text-deep-green transition-colors hover:bg-[#e2bd75] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#004a33] lg:w-auto"
        >
          Explore Archive <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}