import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RecitationCard, type DisplayRecitation } from "@/components/recitations/recitation-card";
import { mockRecitations } from "@/data/mock-recitations";
import { getDisplayName } from "@/lib/result-display";

function getInitials(fullName: string): string {
  return fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0].toLocaleUpperCase())
    .join("");
}

export function RecitationsSection() {
  const recitations: DisplayRecitation[] = mockRecitations
    .filter((recitation) => recitation.consentComplete)
    .map(({ id, fullName, namePublic, event, category, surah, sampleDuration }) => ({
      id,
      displayName: getDisplayName(fullName, namePublic),
      initials: getInitials(fullName),
      event,
      category,
      surah,
      sampleDuration,
    }));

  return (
    <section
      aria-labelledby="featured-recitations-heading"
      className="border-b-[3px] border-[#f2d28a] bg-[#003d2b] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12 lg:py-14">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#f2d28a] sm:text-sm">
          Illustrative sample recitations
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <h2
              id="featured-recitations-heading"
              className="font-serif text-3xl font-medium leading-tight sm:text-4xl"
            >
              Featured recitations
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#c8d8ce] sm:text-base">
              Selected moments from recent Qur&apos;an gatherings.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {recitations.map((recitation) => (
            <RecitationCard key={recitation.id} recitation={recitation} />
          ))}
        </div>

        <Link
          href="/archive"
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#f2d28a] underline decoration-white/50 underline-offset-4 hover:decoration-[#f2d28a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-6"
        >
          Browse archive <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}