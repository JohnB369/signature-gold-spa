import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import MobileFloatingButtons from "@/components/MobileFloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <MobileFloatingButtons />
    </div>
  );
};

export default Index;
