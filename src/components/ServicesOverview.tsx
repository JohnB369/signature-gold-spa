import { Button } from "@/components/ui/button";
import massageTherapyImg from "@/assets/massage-therapy-men.jpg";
import signatureTreatmentImg from "@/assets/signature-treatment-men.jpg";
import spaBathsImg from "@/assets/spa-baths-men.jpg";
import wellnessSkincareImg from "@/assets/wellness-skincare-men.jpg";

const servicesData = [
  {
    id: 1,
    title: "Shahi Milk Bath",
    image: massageTherapyImg,
    description: "Price On Call"
  },
  {
    id: 2,
    title: "Bamboo Massage",
    image: signatureTreatmentImg,
    description: "Price On Call"
  },
  {
    id: 3,
    title: "Cupping Massage",
    image: spaBathsImg,
    description: "Price On Call"
  },
  {
    id: 4,
    title: "Jacuzzi Bath",
    image: wellnessSkincareImg,
    description: "Price On Call"
  },
  {
    id: 5,
    title: "Premium Signature Therapy",
    image: massageTherapyImg,
    description: "Price On Call"
  },
  {
    id: 6,
    title: "Hot Oil Massage",
    image: signatureTreatmentImg,
    description: "Price On Call"
  },
  {
    id: 7,
    title: "Hot Stone Massage",
    image: spaBathsImg,
    description: "Price On Call"
  },
  {
    id: 8,
    title: "Double Paradise",
    image: wellnessSkincareImg,
    description: "Price On Call"
  },
  {
    id: 9,
    title: "Relaxation Aromatherapy Massage",
    image: massageTherapyImg,
    description: "Price On Call"
  },
  {
    id: 10,
    title: "Indulgence For Two (Couple Massage)",
    image: signatureTreatmentImg,
    description: "Price On Call"
  },
  {
    id: 11,
    title: "Female To Male",
    image: spaBathsImg,
    description: "Price On Call"
  },
  {
    id: 12,
    title: "Moroccon Hammam",
    image: wellnessSkincareImg,
    description: "Price On Call"
  }
];

const ServicesOverview = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+917738404054";
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="relative bg-card rounded-lg overflow-hidden shadow-lg group">
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Service Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">
                    {service.description}
                  </p>
                  <Button 
                    onClick={handleCallNow}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;