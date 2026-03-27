// =============================================
// Brand Config — Single source of truth
// Change the name here and it updates everywhere
// =============================================

export const brand = {
  name: "JadorWorks",
  serviceLine: "JadorWorks Web Studio",
  domain: "jadorworks.com",
  email: "hello@jadorworks.com",
  tagline: "Professional websites for local service businesses",
  phone: "(317) 721-5551",
} as const;

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "Demo Sites", href: "/demos" },
    { label: "What's Included", href: "/#included" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
