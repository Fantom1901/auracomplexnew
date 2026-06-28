import Hero from "@/app/components/Hero"
import {About} from "@/app/components/About"
import CatalogSlider from "@/components/features/CatalogSlider";
import Accommodation from "@/app/components/Accommodation";
import Services from "@/app/components/Services";
import Restaurant from "@/app/components/Restaurant";
import Gallery from "@/app/components/Gallery";
import MapSection from "@/components/shared/MapSection";
import CertificateSection from "@/components/shared/CertificateSection";
import FaqSection from "@/app/components/FaqSection";
import LeadFormSection from "@/components/shared/LeadFormSection";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <CatalogSlider/>
      <Accommodation/>
      <Services/>
      <Restaurant/>
      <Gallery/>
      <MapSection/>
      <CertificateSection/>
      <FaqSection/>
      <LeadFormSection/>
    </>
  );
}
