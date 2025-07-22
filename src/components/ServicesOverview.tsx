import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sparkles, Users, Waves, Heart } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Massage Therapies",
    icon: Sparkles,
    description: "Traditional and specialized massage techniques for ultimate relaxation",
    services: [
      "Classic Massage",
      "Six-Hand Massage", 
      "Body Massage",
      "Bamboo Massage",
      "Hot Oil Massage",
      "Hot Stone Massage",
      "Cupping Massage"
    ],
    details: "Experience our range of therapeutic massages designed to rejuvenate your body and mind. Our certified therapists use premium oils and traditional techniques to provide the ultimate relaxation experience."
  },
  {
    id: 2,
    title: "Specialty & Signature Treatments",
    icon: Heart,
    description: "Exclusive treatments crafted for an extraordinary experience",
    services: [
      "Premium Signature Therapy",
      "Double Paradise (Couple Massage)",
      "Female-to-Male Massage"
    ],
    details: "Our signature treatments are exclusively designed to provide unparalleled luxury and personalized care. Each session is customized to your specific needs and preferences."
  },
  {
    id: 3,
    title: "Baths & Spa Rituals",
    icon: Waves,
    description: "Immersive spa rituals for complete rejuvenation",
    services: [
      "Shahi Milk Bath",
      "Jacuzzi Bath", 
      "Moroccan Hammam"
    ],
    details: "Indulge in our luxurious bath treatments that combine ancient rituals with modern spa techniques. Each ritual is designed to cleanse, purify, and revitalize your entire being."
  },
  {
    id: 4,
    title: "Wellness & Skincare",
    icon: Users,
    description: "Holistic wellness and premium skincare treatments",
    services: [
      "Relaxation Aromatherapy Massage",
      "Customized Facial Treatments",
      "Holistic Wellness (Yoga & Mindfulness)"
    ],
    details: "Our wellness programs focus on complete mind-body harmony. From skincare to meditation, we offer comprehensive treatments for your overall well-being."
  }
];

const ServicesOverview = () => {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Signature</span> Services
          </h2>
          <div className="divider-gold w-24 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant">
            Discover our curated collection of premium spa treatments, each designed to provide an exceptional experience of luxury and relaxation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="card-luxury group cursor-pointer">
                <div className="text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6 group-hover:animate-luxury-pulse">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-luxury text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 font-elegant">
                    {service.description}
                  </p>
                  
                  {/* Services List Preview */}
                  <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                    {service.services.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-center justify-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                    {service.services.length > 3 && (
                      <li className="text-primary font-medium">
                        +{service.services.length - 3} more services
                      </li>
                    )}
                  </ul>
                  
                  {/* Price Badge */}
                  <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4">
                    <span className="text-primary font-semibold text-sm">Price on Call</span>
                  </div>
                  
                  {/* Learn More Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full btn-outline-luxury"
                        onClick={() => setSelectedService(service)}
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-card border border-primary/20">
                      <DialogHeader>
                        <DialogTitle className="font-luxury text-2xl text-primary">
                          {service.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <p className="text-muted-foreground font-elegant">
                          {service.details}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-4">Available Services:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.services.map((item, index) => (
                              <div key={index} className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                <span className="text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                          <p className="text-center text-primary font-semibold">
                            Call 07738 404054 for pricing and booking
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;