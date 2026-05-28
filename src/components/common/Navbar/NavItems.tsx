type NavItem = {
  label: string;
  hash: `#${string}`;
};

export const navItems: NavItem[] = [
  { label: "Home", hash: "#home" },
  { label: "Services", hash: "#services" },
  { label: "How It Works", hash: "#how-it-works" },
  { label: "Gallery", hash: "#gallery" },
  { label: "About", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];
