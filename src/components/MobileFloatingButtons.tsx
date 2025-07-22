import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileFloatingButtons = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917738404054", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+917738404054";
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-between px-4 md:hidden">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-elegant"
      >
        <img 
          src="/lovable-uploads/fd12051c-6d2d-4250-ba1e-7d62651e9b4b.png" 
          alt="WhatsApp" 
          className="h-8 w-8"
        />
      </Button>

      {/* Call Button */}
      <Button
        onClick={handleCall}
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-14 h-14 p-0 shadow-elegant"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default MobileFloatingButtons;