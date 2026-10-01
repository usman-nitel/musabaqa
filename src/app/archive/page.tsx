import Link from "next/link";

export default function ArchivePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-ink sm:text-sm">
        A living digital legacy
      </p>
      <h1 className="font-serif text-4xl font-medium sm:text-5xl">
        Explore the Musabaqa Archive
      </h1>
      <p className="mt-4 text-base leading-7 text-muted">
        The archive is coming soon.
      </p>
      <nav aria-label="Explore more" className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        <Link
          href="/events"
          className="inline-flex min-h-11 items-center font-semibold text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
        >
          Events
        </Link>
        <Link
          href="/results"
          className="inline-flex min-h-11 items-center font-semibold text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
        >
          Results
        </Link>
      </nav>
    </section>
  );
}