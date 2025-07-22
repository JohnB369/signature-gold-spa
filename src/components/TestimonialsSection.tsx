import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Andheri West",
    rating: 5,
    text: "Absolutely divine experience! The hot stone massage was incredibly relaxing and the ambiance is pure luxury. The therapists are highly skilled and professional.",
    treatment: "Hot Stone Massage"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bandra",
    rating: 5,
    text: "The couple massage experience was perfect for our anniversary. The attention to detail and the serene environment made it truly special. Highly recommended!",
    treatment: "Double Paradise (Couple Massage)"
  },
  {
    id: 3,
    name: "Sneha Patel",
    location: "Juhu",
    rating: 5,
    text: "The Shahi Milk Bath was an extraordinary experience. I felt completely rejuvenated and pampered. The staff is incredibly courteous and the facilities are top-notch.",
    treatment: "Shahi Milk Bath"
  },
  {
    id: 4,
    name: "Amit Verma",
    location: "Versova",
    rating: 5,
    text: "Regular visits here have become essential for my well-being. The bamboo massage is exceptional and the overall spa experience is unmatched in Mumbai.",
    treatment: "Bamboo Massage"
  },
  {
    id: 5,
    name: "Kavya Reddy",
    location: "Lokhandwala",
    rating: 5,
    text: "The aromatherapy massage combined with the peaceful atmosphere helped me unwind completely. This is my go-to place for stress relief and relaxation.",
    treatment: "Aromatherapy Massage"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <div className="divider-gold w-24 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-elegant">
            Experience the luxury through the words of our valued clients
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="card-luxury max-w-3xl mx-auto text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
              <Quote className="h-8 w-8 text-primary-foreground" />
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 font-elegant leading-relaxed italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Treatment Badge */}
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="text-primary font-semibold text-sm">
                {currentTestimonial.treatment}
              </span>
            </div>

            {/* Client Info */}
            <div className="border-t border-border pt-6">
              <h4 className="font-semibold text-foreground text-lg">
                {currentTestimonial.name}
              </h4>
              <p className="text-muted-foreground font-elegant">
                {currentTestimonial.location}
              </p>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/50 hover:bg-primary/20 border border-primary/30"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/50 hover:bg-primary/20 border border-primary/30"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 font-elegant">
            Ready to create your own luxury spa experience?
          </p>
          <Button 
            className="btn-luxury text-lg px-8 py-4"
            onClick={() => window.location.href = "tel:+917738404054"}
          >
            Book Your Session Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;