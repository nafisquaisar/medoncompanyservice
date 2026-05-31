import Link from "next/link";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";

/* ── Types ────────────────────────────────────────── */
interface LegalSection {
  heading: string;
  content: string | string[];
}

interface LegalPageTemplateProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

/* ── Legal Page Template ──────────────────────────── */
export default function LegalPageTemplate({
  title,
  lastUpdated,
  sections,
}: LegalPageTemplateProps) {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* ── Header ───────────────────────────── */}
        <header className="relative bg-gradient-to-br from-secondary via-white to-primary-light/30 py-12 sm:py-16 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs text-gray-400"
            >
              <Link
                href="/"
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-500">{title}</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight tracking-tight">
              {title}
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </header>

        {/* ── Content ──────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-lg sm:text-xl font-bold text-primary mb-4">
                  {section.heading}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-3">
                    {section.content.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {section.content}
                  </p>
                )}
              </section>
            ))}
          </div>

          {/* ── Contact Note ──────────────────── */}
          <div className="mt-12 p-6 bg-primary-light/50 rounded-2xl border border-primary/10">
            <h3 className="text-base font-bold text-primary">
              Questions?
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              If you have any questions about this policy, please contact us
              at{" "}
              <a
                href="mailto:Medoncompany@gmail.com"
                className="text-primary font-semibold hover:underline"
              >
                Medoncompany@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+917303637086"
                className="text-primary font-semibold hover:underline"
              >
                +91 7303637086
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
