export type MockRecitation = {
  id: string;
  fullName: string;
  namePublic: boolean;
  consentComplete: boolean;
  event: string;
  category: string;
  surah: string;
  sampleDuration: string;
};

export const mockRecitations: MockRecitation[] = [
  {
    id: "northern-nigeria-2026-01",
    fullName: "Amina Yusuf",
    namePublic: true,
    consentComplete: true,
    event: "Northern Nigeria Recitation 2026",
    category: "Tilawah",
    surah: "Maryam",
    sampleDuration: "3:42",
  },
  {
    id: "young-huffaz-2026-02",
    fullName: "Safiya Bello",
    namePublic: false,
    consentComplete: true,
    event: "Young Huffaz Gathering 2026",
    category: "Hifz",
    surah: "Al-Mulk",
    sampleDuration: "2:58",
  },
  {
    id: "lagos-tilawah-2027-03",
    fullName: "Maryam Suleiman",
    namePublic: true,
    consentComplete: true,
    event: "Lagos Tilawah Festival 2027",
    category: "Tajwid",
    surah: "Ar-Rahman",
    sampleDuration: "4:16",
  },
  {
    id: "kano-youth-2026-04",
    fullName: "Bashir Gidado",
    namePublic: true,
    consentComplete: false,
    event: "Kano Youth Tilawah Gathering",
    category: "Tilawah",
    surah: "Yusuf",
    sampleDuration: "3:11",
  },
];