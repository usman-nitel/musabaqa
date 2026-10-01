import type { Event, EventState, EventStatus } from "@/data/mock-events";

export type EventFeeFilter = "free" | "paid";

export type EventFilters = {
  state?: EventState;
  status?: EventStatus;
  fee?: EventFeeFilter;
};

export type EventSearchParams = Record<string, string | string[] | undefined>;

export const eventStates = ["Kano State", "Kaduna State", "Lagos State"] as const satisfies readonly EventState[];
export const eventStatuses = ["registration-open", "opening-soon", "closed"] as const satisfies readonly EventStatus[];
export const eventFeeFilters = ["free", "paid"] as const satisfies readonly EventFeeFilter[];

function parseAllowedValue<T extends string>(
  value: string | string[] | undefined,
  options: readonly T[],
): T | undefined {
  if (typeof value !== "string") return undefined;

  return options.find((option) => option === value);
}

export function parseEventFilters(searchParams: EventSearchParams): EventFilters {
  return {
    state: parseAllowedValue(searchParams.state, eventStates),
    status: parseAllowedValue(searchParams.status, eventStatuses),
    fee: parseAllowedValue(searchParams.fee, eventFeeFilters),
  };
}

export function filterAndSortEvents(
  events: readonly Event[],
  filters: EventFilters,
): Event[] {
  return events
    .filter((event) => {
      if (filters.state && event.state !== filters.state) return false;
      if (filters.status && event.status !== filters.status) return false;
      if (filters.fee === "free" && event.fee !== 0) return false;
      if (filters.fee === "paid" && event.fee === 0) return false;
      return true;
    })
    .sort((first, second) => {
      const firstIsClosed = first.status === "closed";
      const secondIsClosed = second.status === "closed";

      if (firstIsClosed !== secondIsClosed) return firstIsClosed ? 1 : -1;
      return firstIsClosed
        ? second.date.localeCompare(first.date)
        : first.date.localeCompare(second.date);
    });
}