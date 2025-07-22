import { Shield, Award, Leaf, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Therapists",
      description: "Our skilled professionals are trained in traditional and modern spa techniques"
    },
    {
      icon: Leaf,
      title: "Holistic Approach",
      description: "We focus on complete mind-body wellness and rejuvenation"
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Only the finest products and highest hygiene standards"
    },
    {
      icon: Clock,
      title: "Personalized Experience",
      description: "Each treatment is customized to your individual needs"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Signature Luxury Spa</span>?
            </h2>
            <div className="divider-gold w-24 mb-8"></div>
            
            <p className="text-lg text-muted-foreground mb-8 font-elegant leading-relaxed">
              At Signature Luxury Spa, we believe in the power of holistic healing and luxurious pampering. 
              Our philosophy centers around creating a sanctuary where mind, body, and spirit can find perfect harmony 
              through expertly crafted treatments and an atmosphere of pure tranquility.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 font-elegant leading-relaxed">
              Located in the heart of Andheri West, we combine traditional wellness wisdom with modern luxury 
              to deliver an unparalleled spa experience that rejuvenates and inspires.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-elegant">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="space-y-8">
            <div className="card-luxury text-center">
              <div className="text-4xl font-luxury font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-elegant">Happy Clients</div>
            </div>
            
            <div className="card-luxury text-center">
              <div className="text-4xl font-luxury font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground font-elegant">Signature Treatments</div>
            </div>
            
            <div className="card-luxury text-center">
              <div className="text-4xl font-luxury font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground font-elegant">Years of Excellence</div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 text-center">
              <h3 className="font-luxury text-xl font-semibold text-primary mb-3">
                Our Promise
              </h3>
              <p className="text-muted-foreground font-elegant">
                "Every visit to Signature Luxury Spa is a journey towards wellness, 
                relaxation, and inner peace. We are committed to exceeding your expectations 
                with our exceptional service and genuine care."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;