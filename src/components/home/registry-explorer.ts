export interface LabIndexEntry {
  id: string;
  href: string;
  label: string;
  description: string;
}

export const labIndexEntries: LabIndexEntry[] = [
  {
    id: "01",
    href: "/research",
    label: "Research",
    description: "Questions examined in public",
  },
  {
    id: "02",
    href: "/projects",
    label: "Projects",
    description: "Systems built to understand",
  },
  {
    id: "03",
    href: "/writing",
    label: "Field notes",
    description: "Observations from the process",
  },
  {
    id: "04",
    href: "/rules",
    label: "Principles",
    description: "How the lab works",
  },
];
