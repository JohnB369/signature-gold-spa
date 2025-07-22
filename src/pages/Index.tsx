import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
