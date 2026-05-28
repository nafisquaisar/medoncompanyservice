"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface LinkItem {
  label: string;
  type: "route" | "scroll";
  path?: string;
  id?: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (window.location.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">{title}</h4>

      <ul className="mt-5 space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            {link.type === "route" ? (
              <Link
                href={link.path!}
                onClick={() =>
                  setTimeout(() => window.scrollTo(0, 0), 0)
                }
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <button
                onClick={() => handleScroll(link.id!)}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 text-left"
              >
                {link.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
