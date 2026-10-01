import Link from "next/link";
import { copy } from "@/lib/content";

type BrandProps = {
  tone?: "dark" | "light";
};

export function Brand({ tone = "dark" }: BrandProps) {
  const textColor = tone === "light" ? "text-white" : "text-foreground";
  const markColor = tone === "light" ? "border-white/70" : "border-primary";

  return (
    <Link
      href="/"
      className={`inline-flex min-h-11 shrink-0 items-center gap-3 focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-gold-ink ${textColor}`}
    >
      <span
        aria-hidden="true"
        className={`grid size-8 rotate-45 place-items-center rounded-[10px] border ${markColor}`}
      >
        <span className="size-2 rounded-full border border-current" />
      </span>
      <span className="font-serif text-[1.45rem] font-semibold leading-none">
        {copy.brand.name}
      </span>
    </Link>
  );
}