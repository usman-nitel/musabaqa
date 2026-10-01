export const copy = {
  brand: {
    name: "Musabaqa",
    description:
      "A home for Qur'an competitions, recitations, and community achievement.",
  },
  navigation: {
    primaryLabel: "Primary navigation",
    mobileLabel: "Mobile navigation",
    searchLabel: "Search (coming soon)",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    participate: "How to Participate",
    links: {
      home: "Home",
      events: "Events",
      recitations: "Recitations",
      results: "Results",
      about: "About",
    },
  },
  footer: {
    explore: "Explore",
    community: "Community",
    about: "About Musabaqa",
    copyrightPrefix: "©",
  },
  home: {
    eyebrow: "Qur'an recitation competitions",
    heading: "Musabaqa setup is ready",
    description:
      "The foundation is in place. The landing page sections will be added one stage at a time.",
  },
  participation: {
    heading: "How to Participate",
    comingSoon: "Coming soon",
  },
} as const;

export const navigationItems = [
  { href: "/", label: copy.navigation.links.home },
  { href: "/events", label: copy.navigation.links.events },
  { href: "/recitations", label: copy.navigation.links.recitations },
  { href: "/results", label: copy.navigation.links.results },
  { href: "/about", label: copy.navigation.links.about },
] as const;