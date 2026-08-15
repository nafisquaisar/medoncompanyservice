import type { LocationPageData } from "@/data/locations";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import LocationJsonLd from "@/components/seo/LocationJsonLd";
import GoogleMap, { MAPS_DIRECTIONS_URL } from "@/components/common/GoogleMap/GoogleMap";
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
  return (
    <>
      <LocationJsonLd location={data} />
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

        {/* Google Maps embed for local SEO */}
        <section className="py-12 sm:py-16 bg-secondary" aria-label="Our location on map">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary text-center mb-6">
              Find Us on the Map
            </h2>
            <GoogleMap height={350} />
            <div className="text-center mt-4">
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary
                           hover:text-primary-dark underline underline-offset-4 transition-colors"
              >
                📍 Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        <LocationCrossLinks currentSlug={data.slug} />

        <ServiceCTA />
      </main>

      <Footer />
    </>
  );
}
