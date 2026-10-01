import type { MockResult } from "@/data/mock-results";

export type DisplayResult = Omit<MockResult, "topThree"> & {
  topThree: {
    position: 1 | 2 | 3;
    displayName: string;
    points: number;
  }[];
};

export function getDisplayName(fullName: string, namePublic: boolean): string {
  if (namePublic) return fullName;

  return fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part[0].toLocaleUpperCase()}.`)
    .join(" ");
}

export function toDisplayResult(result: MockResult): DisplayResult {
  return {
    eventTitle: result.eventTitle,
    latest: result.latest,
    date: result.date,
    topThree: result.topThree.map(({ position, fullName, namePublic, points }) => ({
      position,
      displayName: getDisplayName(fullName, namePublic),
      points,
    })),
  };
}