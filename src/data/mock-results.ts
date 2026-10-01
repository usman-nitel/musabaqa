export type MockResult = {
  eventTitle: string;
  latest: boolean;
  date: string;
  topThree: {
    // Hand-assigned mock values; derive positions from raw numeric points for real data.
    position: 1 | 2 | 3;
    fullName: string;
    namePublic: boolean;
    points: number;
  }[];
};

// Mock results for Stage 4; names and scores are illustrative, not real records.
export const mockResults: MockResult[] = [
  {
    eventTitle: "Northern Nigeria Qur'an Recitation Competition",
    latest: true,
    date: "2026-09-20",
    topThree: [
      { position: 1, fullName: "Amina Ibrahim", namePublic: true, points: 98.5 },
      {
        position: 2,
        fullName: "Zainab Bello",
        namePublic: false,
        points: 96.25,
      },
      { position: 3, fullName: "Sadiq Musa", namePublic: true, points: 94.75 },
    ],
  },
  {
    eventTitle: "Kano Youth Tilawah Gathering",
    latest: false,
    date: "2026-08-11",
    topThree: [
      { position: 1, fullName: "Maryam Yusuf", namePublic: true, points: 97 },
      { position: 2, fullName: "Habib Usman", namePublic: true, points: 95.5 },
      { position: 3, fullName: "Fatima Adamu", namePublic: true, points: 93.25 },
    ],
  },
];