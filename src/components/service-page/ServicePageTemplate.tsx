import type { ServicePageData } from "@/data/services";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceDetails from "@/components/service-page/ServiceDetails";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceBenefits from "@/components/service-page/ServiceBenefits";
import ServiceReviews from "@/components/service-page/ServiceReviews";
import ServiceFAQ from "@/components/service-page/ServiceFAQ";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import ServiceCrossLinks from "@/components/service-page/ServiceCrossLinks";

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <ServiceHero
          title={data.heroTitle}
          highlight={data.heroHighlight}
          description={data.heroDescription}
          iconName={data.heroIcon}
        />

        <ServiceDetails
          heading={data.detailsHeading}
          description={data.detailsDescription}
          details={data.details}
        />

        <ServicePricing pricing={data.pricing} />

        <ServiceBenefits benefits={data.benefits} />

        <ServiceReviews />

        <ServiceFAQ faqs={data.faqs} />

        <ServiceCrossLinks currentSlug={data.slug} />

        <ServiceCTA />
      </main>

      <Footer />
    </>
  );
}
