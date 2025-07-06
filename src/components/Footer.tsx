import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCallClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleSocialClick = (platform: string) => {
    // Placeholder for social media links
    console.log(`Opening ${platform}`);
  };

  return (
    <footer className="bg-deep-cocoa text-light-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Restaurant Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-6 text-muted-gold">
              Sharika Restaurant & Cafe
            </h3>
            <p className="text-light-cream/80 mb-6 leading-relaxed">
              Where every bite feels like home. Experience the warmth of multicuisine 
              delights in our cozy, family-friendly atmosphere.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button 
                onClick={() => handleSocialClick('Instagram')}
                className="w-10 h-10 bg-muted-gold/20 rounded-full flex items-center justify-center hover:bg-muted-gold hover:text-deep-cocoa transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Facebook')}
                className="w-10 h-10 bg-muted-gold/20 rounded-full flex items-center justify-center hover:bg-muted-gold hover:text-deep-cocoa transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('YouTube')}
                className="w-10 h-10 bg-muted-gold/20 rounded-full flex items-center justify-center hover:bg-muted-gold hover:text-deep-cocoa transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-xl font-serif font-semibold mb-6 text-muted-gold">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-5 h-5 text-muted-gold" />
                <div className="space-y-1">
                  <button 
                    onClick={() => handleCallClick('8667490598')}
                    className="block hover:text-muted-gold transition-colors duration-300"
                  >
                    8667490598
                  </button>
                  <button 
                    onClick={() => handleCallClick('9342487489')}
                    className="block hover:text-muted-gold transition-colors duration-300"
                  >
                    9342487489
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-serif font-semibold mb-6 text-muted-gold">
              Visit Us
            </h4>
            <div className="flex flex-col items-center md:items-end">
              <MapPin className="w-5 h-5 text-muted-gold mb-3" />
              <address className="text-light-cream/80 not-italic leading-relaxed">
                No.44/A, Auroville Main Road<br />
                Lakshmipuram<br />
                Opp ICICI Bank, Kuilapalayam<br />
                Villupuram, Tamil Nadu - 605101
              </address>
            </div>
          </div>
        </div>

       {/* Divider */}
<div className="border-t border-light-cream/20 mt-12 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-light-cream/60 text-sm mb-4 md:mb-0">
      © {currentYear} Sharika Restaurant & Cafe. All rights reserved.
    </p>
    <p className="text-light-cream/60 text-sm">
      Designed by{' '}
      <a
        href="https://www.linkedin.com/in/aravind-baranitharan/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-gold font-medium hover:underline"
      >
        Aravind Baranitharan
      </a>
    </p>
  </div>
</div>


        {/* Spiritual Note */}
        <div className="text-center mt-8">
          <p className="text-light-cream/60 text-sm font-serif italic">
            ✨ Sri Muthumariamman Thunai ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;