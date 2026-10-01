import { ResultsCard } from "@/components/results/results-card";
import { mockResults } from "@/data/mock-results";
import { toDisplayResult } from "@/lib/result-display";

export default function ResultsPage() {
  const displayResults = mockResults.map(toDisplayResult);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#79530f] sm:text-sm lg:mb-6">
        Recent achievements
      </p>
      <h1 className="font-serif text-4xl font-medium sm:text-5xl">Results</h1>
      <p className="mt-3 max-w-xl text-base leading-7 text-muted">
        Celebrating recent Qur&apos;an recitation achievements.
      </p>
      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {displayResults.map((result) => (
          <ResultsCard key={result.eventTitle} result={result} />
        ))}
      </div>
    </section>
  );
}