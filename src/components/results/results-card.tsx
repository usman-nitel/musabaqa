import { Trophy } from "lucide-react";
import type { DisplayResult } from "@/lib/result-display";

const positions = {
  1: { label: "1st", style: "bg-[#f5ecd9] text-[#79530f]" },
  2: { label: "2nd", style: "bg-[#eceeeb] text-[#49514b]" },
  3: { label: "3rd", style: "bg-[#f3e6dc] text-[#754b2b]" },
} as const;

export function ResultsCard({ result }: { result: DisplayResult }) {
  return (
    <article className="w-full rounded-lg border border-border bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#f5ecd9] text-[#79530f]">
          <Trophy aria-hidden="true" size={20} />
        </div>
        {result.latest && (
          <span className="inline-flex min-h-7 items-center rounded-full bg-[#e1eee6] px-2.5 text-xs font-semibold text-[#14583c]">
            Latest result
          </span>
        )}
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold leading-tight text-foreground sm:text-2xl">
        {result.eventTitle}
      </h3>
      <ol className="mt-4 divide-y divide-border">
        {result.topThree.map((entrant) => {
          const position = positions[entrant.position];

          return (
            <li
              key={entrant.position}
              className="grid min-h-14 grid-cols-[3.25rem_minmax(0,1fr)_auto] items-center gap-2 py-2"
            >
              <span
                className={`inline-flex min-h-8 items-center justify-center rounded-md px-2 text-sm font-bold ${position.style}`}
              >
                {position.label}
              </span>
              <span className="min-w-0 truncate text-sm font-medium text-foreground sm:text-base">
                {entrant.displayName}
              </span>
              <span className="text-sm tabular-nums text-muted">
                {entrant.points.toFixed(1)}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="mt-2 break-words text-start text-xs text-muted">
        Illustrative mock result
      </p>
    </article>
  );
}