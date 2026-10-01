import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Event, EventStatus } from "@/data/mock-events";
import { formatEventDate, formatRegistrationFee } from "@/lib/event-format";

export const eventStatusLabels: Record<EventStatus, string> = {
  "registration-open": "Registration open",
  "opening-soon": "Opening soon",
  closed: "Closed",
};

const statusStyles: Record<EventStatus, string> = {
  "registration-open": "bg-[#e1eee6] text-[#14583c]",
  "opening-soon": "bg-[#f5ecd9] text-[#79530f]",
  closed: "bg-[#eceeeb] text-[#626862]",
};

export function EventCard(event: Event) {
  return (
    <Card className="flex h-full flex-col rounded-lg shadow-none">
      <CardHeader className="gap-3 p-4 pb-3 sm:p-5 sm:pb-3">
        <div className="flex min-h-7 flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex min-h-7 items-center rounded-full px-2.5 text-xs font-semibold ${statusStyles[event.status]}`}
          >
            {eventStatusLabels[event.status]}
          </span>
          <span className="text-xs font-medium text-muted">{event.category}</span>
        </div>
        <CardTitle className="min-h-14 text-xl">{event.title}</CardTitle>
        <p className="min-h-10 text-sm leading-5 text-muted">Organized by {event.organizer}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col px-4 pb-4 sm:px-5 sm:pb-5">
        <dl className="grid grid-cols-2 gap-x-3 gap-y-3 border-t border-border pt-3 text-sm">
          <div className="min-h-14">
            <dt className="text-xs text-muted">Date</dt>
            <dd className="mt-1 font-medium">{formatEventDate(event.date)}</dd>
          </div>
          <div className="min-h-14">
            <dt className="text-xs text-muted">Location</dt>
            <dd className="mt-1 font-medium">{event.location}</dd>
          </div>
          <div className="col-span-2 min-h-14">
            <dt className="text-xs text-muted">Registration fee</dt>
            <dd className="mt-1 font-medium">{formatRegistrationFee(event.fee)}</dd>
          </div>
        </dl>
        <Button asChild className="mt-auto w-full">
          <Link href={`/events/${event.slug}`}>
            View Event <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}