import Hero from "@/components/hero/Hero";
import Hero2 from "@/components/hero/Hero2";
import AutoLogoSlider from "@/components/ui/AutoLogoSlider";
import CaseStudies from "@/components/ui/CaseStudies";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <AutoLogoSlider />
      <Services />
      <Hero2 />
      <CaseStudies />
    </div>
  );
}
