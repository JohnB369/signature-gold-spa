import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  const handleBookCall = () => {
    window.location.href = "tel:+917738404054";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917738404054?text=I would like to book a spa appointment", "_blank");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in">
        <h1 className="font-luxury text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Signature Luxury Spa
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-elegant">
          Signature Spa Experiences in the Heart of Andheri West
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleBookCall}
            className="btn-luxury text-lg px-8 py-4 min-w-[200px]"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Your Experience
          </Button>
          
          <Button 
            onClick={handleWhatsApp}
            variant="outline"
            className="btn-outline-luxury text-lg px-8 py-4 min-w-[200px]"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;