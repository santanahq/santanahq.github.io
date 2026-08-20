import { siteLinks } from "../../config/site";

export const startHereSteps = [
  {
    number: "01",
    color: "bg-emerald-500",
    title: "Read the source.",
    description:
      "Browse the repositories, unfinished experiments, and technical notes behind the lab.",
    href: siteLinks.github,
    action: "Open GitHub",
    external: true,
  },
  {
    number: "02",
    color: "bg-sky-500",
    title: "Follow a question.",
    description:
      "Start with an open problem, a field note, or a piece of research worth understanding.",
    href: "/research",
    action: "Explore research",
    external: false,
  },
  {
    number: "03",
    color: "bg-violet-500",
    title: "Leave a useful trace.",
    description:
      "Turn an experiment, reference, failure, or observation into something another person can build on.",
    href: "/writing",
    action: "Read field notes",
    external: false,
  },
] as const;
