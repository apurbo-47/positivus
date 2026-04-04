import Hero from "@/components/hero/Hero";
import Hero2 from "@/components/hero/Hero2";
import AutoLogoSlider from "@/components/ui/AutoLogoSlider";
import CaseStudies from "@/components/ui/CaseStudies";
import ContactForm from "@/components/ui/ContactForm";
import FaqSection from "@/components/ui/FaqSection";
import Services from "@/components/ui/Services";
import TeamSection from "@/components/ui/TeamSection";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <AutoLogoSlider />
      <Services />
      <Hero2 />
      <CaseStudies />
      <FaqSection />
      <TeamSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
