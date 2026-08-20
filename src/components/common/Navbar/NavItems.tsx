type NavItem = {
  label: string;
  hash?: `#${string}`;
  href?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", hash: "#home" },
  { label: "Services", hash: "#services" },
  { label: "How It Works", hash: "#how-it-works" },
  { label: "Gallery", hash: "#gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", hash: "#contact" },
];
