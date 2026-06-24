import Hero from "@/components/sections/Hero"
import {About} from "@/components/sections/About"
import CatalogSlider from "@/components/sections/CatalogSlider";
import Accommodation from "@/components/sections/Accommodation";
import Services from "@/components/sections/Services";
import Restaurant from "@/components/sections/Restaurant";
import Gallery from "@/components/sections/Gallery";
import MapSection from "@/components/sections/MapSection";
import CertificateSection from "@/components/sections/CertificateSection";
import FaqSection from "@/components/sections/FaqSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/sections/Footer";

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
      <ContactsSection/>
      <Footer/>
    </>
  );
}
