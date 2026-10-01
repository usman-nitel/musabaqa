import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EventCard } from "@/components/events/event-card";
import { mockEvents } from "@/data/mock-events";

export function EventsSection() {
  return (
    <section
      aria-labelledby="upcoming-events-heading"
      className="border-t border-border bg-white/60"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-ink sm:text-sm lg:mb-6">
              Find your next stage
            </p>
            <h2
              id="upcoming-events-heading"
              className="font-serif text-3xl font-medium sm:text-4xl"
            >
              Upcoming events
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
              Explore scheduled competitions and find the details you need to plan your participation.
            </p>
          </div>
          <Link
            href="/events"
            className="mb-1 inline-flex min-h-11 shrink-0 items-center gap-1 text-xs font-semibold text-primary hover:text-deep-green sm:text-sm"
          >
            View all events
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}