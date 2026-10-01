import Link from "next/link";
import { EventCard } from "@/components/events/event-card";
import { eventStatusLabels } from "@/components/events/event-card";
import { mockEvents } from "@/data/mock-events";
import { Button } from "@/components/ui/button";
import {
  eventFeeFilters,
  eventStates,
  eventStatuses,
  filterAndSortEvents,
  parseEventFilters,
  type EventSearchParams,
} from "@/lib/event-filters";

type EventsPageProps = {
  searchParams: Promise<EventSearchParams>;
};

const feeLabels = {
  free: "Free",
  paid: "Paid",
} as const;

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const filters = parseEventFilters(await searchParams);
  const events = filterAndSortEvents(mockEvents, filters);
  const activeFilters = [
    filters.state ? `State: ${filters.state}` : null,
    filters.status ? `Status: ${eventStatusLabels[filters.status]}` : null,
    filters.fee ? `Fee: ${feeLabels[filters.fee]}` : null,
  ].filter((filter): filter is string => filter !== null);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-ink sm:text-sm lg:mb-6">
        Find your next stage
      </p>
      <h1 className="font-serif text-4xl font-medium sm:text-5xl">Upcoming events</h1>
      <p className="mt-3 max-w-xl text-base leading-7 text-muted">
        Explore scheduled competitions and find the details you need to plan your participation.
      </p>
      <form
        action="/events"
        method="get"
        className="mt-8 rounded-xl border border-border bg-white p-4 sm:p-5"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto] lg:items-end">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="event-state" className="text-sm font-semibold text-foreground">
              State
            </label>
            <select
              id="event-state"
              name="state"
              defaultValue={filters.state ?? ""}
              className="min-h-11 w-full rounded-md border border-border bg-background px-3 text-base text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink"
            >
              <option value="">All states</option>
              {eventStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="event-status" className="text-sm font-semibold text-foreground">
              Status
            </label>
            <select
              id="event-status"
              name="status"
              defaultValue={filters.status ?? ""}
              className="min-h-11 w-full rounded-md border border-border bg-background px-3 text-base text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink"
            >
              <option value="">All statuses</option>
              {eventStatuses.map((status) => (
                <option key={status} value={status}>{eventStatusLabels[status]}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="event-fee" className="text-sm font-semibold text-foreground">
              Registration fee
            </label>
            <select
              id="event-fee"
              name="fee"
              defaultValue={filters.fee ?? ""}
              className="min-h-11 w-full rounded-md border border-border bg-background px-3 text-base text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-ink"
            >
              <option value="">All fees</option>
              {eventFeeFilters.map((fee) => (
                <option key={fee} value={fee}>{feeLabels[fee]}</option>
              ))}
            </select>
          </div>
          <Button type="submit" className="w-full lg:w-auto">Apply filters</Button>
        </div>
      </form>

      <div className="mt-5 space-y-1 text-sm text-muted" aria-live="polite">
        <p>{events.length} {events.length === 1 ? "event" : "events"}</p>
        {activeFilters.length > 0 && (
          <p>Active filters: {activeFilters.join(" · ")}</p>
        )}
      </div>

      {events.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-border bg-white px-5 py-10 text-center">
          <p className="font-serif text-2xl font-medium text-foreground">
            No events match these filters
          </p>
          <Link
            href="/events"
            className="mt-4 inline-flex min-h-11 items-center justify-center px-4 font-semibold text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
          >
            Clear filters
          </Link>
        </div>
      )}
    </section>
  );
}