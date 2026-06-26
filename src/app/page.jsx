import Hero from "@/components/sections/home/Hero"
import {About} from "@/components/sections/home/About"
import CatalogSlider from "@/components/modules/CatalogSlider";
import Accommodation from "@/components/sections/home/Accommodation";
import Services from "@/components/sections/home/Services";
import Restaurant from "@/components/sections/home/Restaurant";
import Gallery from "@/components/sections/home/Gallery";
import MapSection from "@/components/shared/MapSection";
import CertificateSection from "@/components/shared/CertificateSection";
import FaqSection from "@/components/sections/home/FaqSection";
import LeadFormSection from "@/components/shared/LeadFormSection";
import ContactsSection from "@/components/shared/ContactsSection";
import Footer from "@/components/layout/Footer";

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
