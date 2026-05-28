import type { LocationPageData } from "@/data/locations";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import LocationHero from "./LocationHero";
import LocationAbout from "./LocationAbout";
import LocationServices from "./LocationServices";
import LocationAreas from "./LocationAreas";
import LocationTestimonials from "./LocationTestimonials";
import LocationCrossLinks from "./LocationCrossLinks";
import ServiceFAQ from "@/components/service-page/ServiceFAQ";
import ServiceCTA from "@/components/service-page/ServiceCTA";

interface LocationPageTemplateProps {
  data: LocationPageData;
}

export default function LocationPageTemplate({ data }: LocationPageTemplateProps) {
  const locationName = `${data.heroTitle.split(" ").pop()} ${data.heroHighlight}`.trim();

  return (
    <>
      <Navbar />

      <main id="main-content">
        <LocationHero
          title={data.heroTitle}
          highlight={data.heroHighlight}
          description={data.heroDescription}
          stats={data.heroStats}
        />

        <LocationAbout
          heading={data.aboutHeading}
          paragraphs={data.aboutParagraphs}
          responseTime={data.responseTime}
          sinceYear={data.sinceYear}
        />

        <LocationServices
          services={data.localServices}
          locationName={data.heroHighlight.replace(/^in\s+|^Near\s+|^Across\s+/i, "")}
        />

        <LocationAreas
          areas={data.nearbyAreas}
          locationName={data.heroHighlight.replace(/^in\s+|^Near\s+|^Across\s+/i, "")}
        />

        <LocationTestimonials testimonials={data.testimonials} />

        <ServiceFAQ faqs={data.faqs} />

        <LocationCrossLinks currentSlug={data.slug} />

        <ServiceCTA />
      </main>

      <Footer />
    </>
  );
}
