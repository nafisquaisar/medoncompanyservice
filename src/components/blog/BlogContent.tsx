import type { BlogSection } from "@/data/blog-posts";

interface BlogContentProps {
  sections: BlogSection[];
}

export default function BlogContent({ sections }: BlogContentProps) {
  return (
    <div className="prose-medon">
      {sections.map((section, i) => (
        <section key={i} className="mb-10 last:mb-0">
          {/* H2 heading */}
          <h2
            id={`section-${i}`}
            className="text-xl sm:text-2xl font-bold text-primary tracking-tight mb-4 scroll-mt-24"
          >
            {section.heading}
          </h2>

          {/* Section paragraph */}
          <div
            className="text-gray-600 text-[15px] sm:text-base leading-[1.8] mb-6"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />

          {/* Sub-sections with H3 headings */}
          {section.subSections?.map((sub, j) => (
            <div key={j} className="mb-6 last:mb-0">
              <h3 className="text-base sm:text-lg font-semibold text-primary-dark/90 mb-2.5">
                {sub.heading}
              </h3>
              <div
                className="text-gray-600 text-[15px] sm:text-base leading-[1.8]"
                dangerouslySetInnerHTML={{ __html: sub.content }}
              />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
