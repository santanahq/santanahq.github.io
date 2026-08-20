export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}

export const primaryNavigation = [
  {
    label: "Research",
    href: "/research",
    icon: "lucide:flask-conical",
  },
  {
    label: "Projects",
    href: "/projects",
    icon: "lucide:blocks",
  },
  {
    label: "Field notes",
    href: "/writing",
    icon: "lucide:notebook-pen",
  },
  {
    label: "Archive",
    href: "/archive",
    icon: "lucide:archive",
  },
] as const satisfies readonly NavigationItem[];
