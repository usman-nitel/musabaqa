import { Play } from "lucide-react";

export type DisplayRecitation = {
  id: string;
  displayName: string;
  initials: string;
  event: string;
  category: string;
  surah: string;
  sampleDuration: string;
};

export function RecitationCard({ recitation }: { recitation: DisplayRecitation }) {
  return (
    <article className="rounded-lg border border-[#d5dfd7] bg-[#f8faf5] p-4 text-[#173c2e] shadow-sm sm:p-5">
      <div className="flex min-w-0 items-center gap-3">
        <div
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#003d2b] text-sm font-bold text-[#f2d28a]"
        >
          {recitation.initials}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold leading-5">
            {recitation.displayName}
          </h3>
          <p className="mt-1 truncate text-sm leading-5 text-[#495a50]">
            {recitation.event}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex min-h-7 items-center rounded-full bg-[#e1eee6] px-2.5 text-xs font-semibold text-[#14583c]">
          {recitation.category}
        </span>
        <span className="text-sm font-medium">Surah {recitation.surah}</span>
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-[#d5dfd7] pt-3">
        <button
          type="button"
          disabled
          aria-label={`Audio not yet available for ${recitation.displayName}, ${recitation.surah}`}
          className="flex size-11 shrink-0 cursor-not-allowed items-center justify-center rounded-full bg-[#dfe4dc] text-[#495a50] opacity-70"
        >
          <Play aria-hidden="true" size={18} fill="currentColor" />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2 text-xs text-[#495a50]">
            <span>Sample progress (not interactive)</span>
            <span className="shrink-0 font-medium">Sample duration: {recitation.sampleDuration}</span>
          </div>
          <div aria-hidden="true" className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#dfe4dc]">
            <div className="h-full w-[34%] rounded-full bg-[#b8832a]" />
          </div>
        </div>
      </div>
    </article>
  );
}