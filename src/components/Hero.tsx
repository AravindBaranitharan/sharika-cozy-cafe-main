import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const logoUrl = '/lovable-uploads/58281077-504c-48f9-9095-b2b0d8f6b7e5.png';

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCallClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="min-h-screen bg-gradient-hero bg-doodles relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-muted-gold animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 rounded-full bg-warm-coffee animate-pulse delay-200"></div>
        <div className="absolute bottom-40 left-16 w-8 h-8 rounded-full bg-accent animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-12 w-5 h-5 rounded-full bg-primary animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Spiritual Tagline */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'text-fade-up' : ''}`}>
          <p className="text-muted-foreground font-serif italic text-lg">
            ✨ Sri Muthumariamman Thunai ✨
          </p>
        </div>

        {/* Main Content - Logo Left, Restaurant Name Center */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto mb-16">
          {/* Logo Section - Left */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-200 ${isVisible ? 'text-slide-right' : ''}`}>
            <div className="w-80 h-80 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
              <img 
                src={logoUrl} 
                alt="Sharika Restaurant & Cafe Logo" 
                className="w-72 h-72 object-contain logo-breathe"
              />
            </div>
          </div>

          {/* Restaurant Name & Details - Center */}
          <div className={`flex-1 text-center lg:text-left lg:pl-12 transition-all duration-1000 delay-300 ${isVisible ? 'text-fade-up' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-deep-cocoa mb-4 leading-tight">
              Sharika
            </h1>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Restaurant & Cafe
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8">
              The Multicuisine
            </p>
            
            {/* Welcome Message */}
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-serif text-deep-cocoa leading-relaxed mb-4">
                "Where Every Bite Feels Like Home"
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Experience the warmth of family traditions through our carefully crafted 
                Indian, Italian, and Chinese cuisines, served with love and heritage.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? 'text-fade-up' : ''}`}>
              <button 
                onClick={() => handleCallClick('8667490598')}
                className="btn-phone text-center min-w-[200px]"
              >
                📞 8667490598
              </button>
              <button 
                onClick={() => handleCallClick('9342487489')}
                className="btn-phone text-center min-w-[200px]"
              >
                📞 9342487489
              </button>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'text-fade-up' : ''}`}>
          <div className="card-cozy max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-bounce" />
              <div className="text-left">
                <p className="text-sm font-semibold text-primary mb-2">📍 Visit Us</p>
                <a 
                  href="https://maps.app.goo.gl/3DQeBSR5tvebRvpk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deep-cocoa leading-relaxed hover:text-primary transition-colors duration-300 cursor-pointer block"
                >
                  No.44/A, Auroville Main Road, Lakshmipuram<br />
                  Opp ICICI Bank, Kuilapalayam<br />
                  Villupuram, Tamil Nadu - 605101
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;