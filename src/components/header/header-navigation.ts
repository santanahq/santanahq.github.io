export interface HeaderNavigationItem {
  label: string;
  href: string;
}

export const headerNavigation: HeaderNavigationItem[] = [
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Field notes", href: "/writing" },
  { label: "Archive", href: "/archive" },
];
