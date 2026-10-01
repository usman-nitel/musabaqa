import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResultsCard } from "@/components/results/results-card";
import { mockResults } from "@/data/mock-results";
import { toDisplayResult } from "@/lib/result-display";

export function ResultsSection() {
  const latestResult = mockResults.find((result) => result.latest);

  if (!latestResult) return null;

  const displayResult = toDisplayResult(latestResult);

  return (
    <section
      aria-labelledby="recent-achievements-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#79530f] sm:text-sm lg:mb-6">
            Recent achievements
          </p>
          <h2
            id="recent-achievements-heading"
            className="max-w-xl font-serif text-3xl font-medium leading-tight sm:text-4xl"
          >
            Excellence deserves to be remembered.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Celebrating the dedication, skill, and care shown by Qur&apos;an reciters at every stage.
          </p>
          <Button asChild className="mt-5 w-full sm:mt-6 sm:w-auto">
            <Link href="/results">
              View All Results <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </Button>
        </div>
        <ResultsCard result={displayResult} />
      </div>
    </section>
  );
}