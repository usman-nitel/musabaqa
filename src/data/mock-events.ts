export type EventStatus = "registration-open" | "opening-soon" | "closed";
export type EventState = "Kano State" | "Kaduna State" | "Lagos State";

export type MockOrganizerContact = {
  name: string;
  phone?: string;
  email?: string;
  isMock: true;
};

export type Event = {
  title: string;
  organizer: string;
  status: EventStatus;
  state: EventState;
  category: string;
  date: string;
  location: string;
  fee: number;
  slug: string;
  eligibility?: string | null;
  participationSteps?: string[] | null;
  registrationDeadline?: string | null;
  organizerContact?: MockOrganizerContact | null;
};

// Mock records for Stage 3; replace with live event data in a later stage.
export const mockEvents: Event[] = [
  {
    title: "Northern Nigeria Qur'an Recitation Competition",
    organizer: "Arewa Qur'an Foundation",
    status: "registration-open",
    state: "Kano State",
    category: "Regional competition",
    date: "2026-11-14",
    location: "Kano, Kano State",
    fee: 0,
    slug: "northern-nigeria-recitation-2026",
    eligibility: null,
    participationSteps: null,
    registrationDeadline: null,
    organizerContact: {
      name: "Mock organizer contact",
      phone: "+234 000 000 0000",
      email: "contact@example.invalid",
      isMock: true,
    },
  },
  {
    title: "Young Huffaz National Gathering",
    organizer: "National Council for Qur'anic Education",
    status: "opening-soon",
    state: "Kaduna State",
    category: "Hifz competition",
    date: "2026-12-05",
    location: "Kaduna, Kaduna State",
    fee: 2500,
    slug: "young-huffaz-gathering-2026",
    eligibility: null,
    participationSteps: null,
    registrationDeadline: null,
    organizerContact: null,
  },
  {
    title: "Lagos State Tilawah Festival",
    organizer: "Lagos Muslim Community Network",
    status: "closed",
    state: "Lagos State",
    category: "Tilawah festival",
    date: "2026-08-23",
    location: "Lagos, Lagos State",
    fee: 1500,
    slug: "lagos-tilawah-festival-2027",
    eligibility: null,
    participationSteps: null,
    registrationDeadline: null,
    organizerContact: null,
  },
];