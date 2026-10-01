import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, CircleAlert, MapPin, Phone } from "lucide-react";
import { eventStatusLabels } from "@/components/events/event-card";
import { mockEvents } from "@/data/mock-events";
import { formatEventDate, formatRegistrationFee } from "@/lib/event-format";

export function generateStaticParams() {
  return mockEvents.map(({ slug }) => ({ slug }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = mockEvents.find((item) => item.slug === slug);

  if (!event) notFound();

  return (
    <section className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-12">
      <Link
        href="/events"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-deep-green"
      >
        <ArrowLeft aria-hidden="true" size={17} /> Back to events
      </Link>
      <header className="mt-5 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-ink sm:text-sm">
          {event.category}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-medium leading-tight sm:text-5xl">
          {event.title}
        </h1>
        <span className="mt-4 inline-flex min-h-8 items-center rounded-full border border-border bg-white px-3 text-sm font-semibold text-foreground">
          {eventStatusLabels[event.status]}
        </span>
      </header>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <section className="rounded-xl border border-border bg-white p-4 sm:p-6 lg:col-start-1 lg:row-start-1">
          <h2 className="font-serif text-2xl font-semibold">Event summary</h2>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted">Organizer</dt>
              <dd className="mt-1 font-medium">{event.organizer}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Date</dt>
              <dd className="mt-1 flex items-start gap-2 font-medium">
                <CalendarDays aria-hidden="true" className="mt-0.5 shrink-0 text-gold-ink" size={17} />
                <span>{formatEventDate(event.date)}</span>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm text-muted">Location</dt>
              <dd className="mt-1 flex items-start gap-2 font-medium">
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-gold-ink" size={17} />
                <span>{event.location}</span>
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-border bg-white p-4 sm:p-6 lg:col-start-2 lg:row-start-1">
          <h2 className="font-serif text-2xl font-semibold">Registration fee</h2>
          <p className="mt-3 text-xl font-semibold text-primary">
            {formatRegistrationFee(event.fee)}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {event.status === "closed"
              ? "Fee shown for information only. This event is closed."
              : "Fee information only; this site does not collect payments."}
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-4 sm:p-6 lg:col-start-1 lg:row-start-2">
          <h2 className="font-serif text-2xl font-semibold">Eligibility</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            {event.eligibility || "Not listed yet."}
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-4 sm:p-6 lg:col-start-1 lg:row-start-3">
          <h2 className="font-serif text-2xl font-semibold">How to participate</h2>
          {event.participationSteps?.length ? (
            <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-6 text-muted">
              {event.participationSteps.map((step, index) => (
                <li key={`${index}-${step}`}>{step}</li>
              ))}
            </ol>
          ) : (
            <p className="mt-2 text-sm leading-6 text-muted">Not listed yet.</p>
          )}
        </section>

        <section className="rounded-xl border border-border bg-white p-4 sm:p-6 lg:col-start-1 lg:row-start-4">
          <h2 className="font-serif text-2xl font-semibold">Registration deadline</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            {event.registrationDeadline
              ? formatEventDate(event.registrationDeadline)
              : "Not listed yet."}
          </p>
        </section>

        <div className="space-y-4 lg:col-start-2 lg:row-start-2 lg:row-span-3 lg:self-start">
          <section className="rounded-xl border border-border bg-white p-4 sm:p-6">
            <h2 className="font-serif text-2xl font-semibold">Organizer contact</h2>
            {event.organizerContact ? (
              <div className="mt-3">
                {event.organizerContact.isMock && (
                  <p className="mb-2 inline-flex min-h-7 items-center rounded-full border border-border px-2.5 text-xs font-semibold text-muted">
                    Mock contact details
                  </p>
                )}
                <p className="text-sm font-medium text-foreground">{event.organizerContact.name}</p>
                <div className="mt-1 flex flex-col">
                  {event.organizerContact.phone && (
                    <a
                      href={`tel:${event.organizerContact.phone.replaceAll(" ", "")}`}
                      className="inline-flex min-h-11 items-center gap-2 break-all text-sm text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
                    >
                      <Phone aria-hidden="true" className="shrink-0" size={16} />
                      {event.organizerContact.phone}
                    </a>
                  )}
                  {event.organizerContact.email && (
                    <a
                      href={`mailto:${event.organizerContact.email}`}
                      className="inline-flex min-h-11 items-center break-all text-sm text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
                    >
                      {event.organizerContact.email}
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <p className="mt-2 text-sm leading-6 text-muted">
                No contact details listed yet.
              </p>
            )}
          </section>

          {event.status !== "closed" && (
            <aside className="flex gap-3 rounded-xl border border-[#d7c69e] bg-[#fffaf0] p-4 text-foreground">
              <CircleAlert aria-hidden="true" className="mt-0.5 shrink-0 text-gold-ink" size={20} />
              <p className="text-sm font-medium leading-6">
                Pay only through the organizer&apos;s verified details listed here.
              </p>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}