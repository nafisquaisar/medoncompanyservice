import Hero from "@/components/sections/Hero/Hero";
import Services from "@/page-components/Services/Services";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Reviews from "@/components/sections/Reviews/Reviews";
import Contact from "@/page-components/Contact/ContactPage";
import GalleryPreview from "@/components/sections/Gallery/GalleryPreview";
import AboutPreview from "@/components/sections/About/AboutPreview";

const HomePage = () => {
  return (
    <>
     <section id="home" className="scroll-mt-20">
  <Hero />
</section>

<section id="services" className="scroll-mt-20">
  <Services />
</section>

<section id="how-it-works" className="scroll-mt-20">
  <HowItWorks />
</section>

<section id="gallery" className="scroll-mt-20">
  <GalleryPreview />
</section>

<section id="about" className="scroll-mt-20">
  <AboutPreview />
</section>


<section id="reviews" className="scroll-mt-20">
  <Reviews />
</section>

<section id="contact" className="scroll-mt-20">
  <Contact />
</section>

    </>
  );
};

export default HomePage;
