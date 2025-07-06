import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Karthik E",
    rating: 5,
    text: "Must visit place. Not expecting the taste, quality and presentation. Everything is top notch. Tried butter garlic mushroom, chicken strips and risotto. All were top notch. Chef/owner worked in multiple big brand restaurants. Also got some quality ingredients."
  },
  {
    name: "Itai Aosi",
    rating: 5,
    text: "I was looking for a place to eat and randomly stumbled upon this restaurant. I was a bit unsure initially as I was the only customer. However, I am glad I gave this place a try. The food was super fresh and delicious. The prices are okayish compared to other \"western\" style restaurants in the area, the hosts were welcoming and warm."
  },
  {
    name: "SARTHAK HARURAY",
    rating: 5,
    text: "Excellent restaurant and more so excellent service. The owner is quite accommodating of special requests and the food is of high standard and yet economical. I also noticed they use quite high quality raw materials such as premium paneer and cheese. Recommended dishes would be paneer steak and egg cheese wrap!"
  },
  {
    name: "Sruthi Sushma",
    rating: 5,
    text: "Amazing experience at Sharika Restaurant & Cafe! The ambiance is cozy and the food quality is exceptional. Highly recommend for anyone looking for great multicuisine options."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-muted-gold fill-muted-gold' : 'text-muted/30'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-cozy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-8 w-6 h-6 rounded-full bg-muted-gold animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-4 h-4 rounded-full bg-primary animate-pulse delay-300"></div>
        <div className="absolute top-32 right-12 w-8 h-8 rounded-full bg-accent animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'text-fade-up' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-deep-cocoa mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the warmth through the words of our cherished customers
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'text-fade-up' : ''}`}>
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card-cozy max-w-3xl mx-auto text-center">
                    <Quote className="w-12 h-12 text-muted-gold mx-auto mb-6 opacity-50" />
                    
                    <blockquote className="text-xl md:text-2xl text-deep-cocoa font-medium leading-relaxed mb-8">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex justify-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <cite className="text-lg font-semibold text-primary not-italic">
                      — {testimonial.name}
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-deep-cocoa group-hover:text-primary transition-colors" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-deep-cocoa group-hover:text-primary transition-colors" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'text-fade-up' : ''}`}>
          <p className="text-lg text-muted-foreground mb-6">
            Join our family of satisfied customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'tel:8667490598'}
              className="btn-cozy"
            >
              Reserve Your Table
            </button>
            <a
              href="https://maps.app.goo.gl/3DQeBSR5tvebRvpk7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow"
            >
              Find Us on Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;