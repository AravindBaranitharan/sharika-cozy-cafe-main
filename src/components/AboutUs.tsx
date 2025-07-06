import { useState, useEffect, useRef } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-cozy">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'text-fade-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-cocoa mb-6">
              Our Soulful Journey
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Story */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'text-slide-right' : ''}`}>
              <div className="card-cozy text-left">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                  A Family Legacy of Flavors
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Born from the heart of tradition and nurtured by generations of culinary passion, 
                    Sharika Restaurant & Cafe stands as a testament to the beautiful fusion of cultures 
                    and flavors that define our multicuisine journey.
                  </p>
                  <p>
                    Our story begins with a simple belief: that food is the universal language of love. 
                    From the aromatic spices of authentic Indian cuisine to the rustic charm of Italian 
                    classics and the delicate artistry of Chinese gastronomy, we bring you a world of 
                    tastes under one cozy roof.
                  </p>
                  <p>
                    Every dish we serve carries the warmth of home-cooked meals, prepared with the same 
                    care and attention that our grandmothers put into their kitchens. At Sharika, 
                    you're not just a customer – you're family.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Values */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'text-fade-up' : ''}`}>
              <div className="space-y-6">
                <div className="card-cozy">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🍽️</div>
                    <h4 className="text-xl font-serif font-semibold text-deep-cocoa mb-2">
                      Multicuisine Excellence
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Indian • Italian • Chinese cuisines crafted with authentic recipes and fresh ingredients
                    </p>
                  </div>
                </div>

                <div className="card-cozy">
                  <div className="text-center">
                    <div className="text-4xl mb-3">❤️</div>
                    <h4 className="text-xl font-serif font-semibold text-deep-cocoa mb-2">
                      Family Values
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Every meal is prepared with love, served with warmth, and shared with joy
                    </p>
                  </div>
                </div>

                <div className="card-cozy">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏡</div>
                    <h4 className="text-xl font-serif font-semibold text-deep-cocoa mb-2">
                      Homely Atmosphere
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      A cozy space where strangers become friends and every visit feels like coming home
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'text-fade-up' : ''}`}>
            <div className="card-cozy bg-primary/10 border-primary/20">
              <h3 className="text-2xl font-serif font-semibold text-deep-cocoa mb-4">
                Come, Be Part of Our Story
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're craving the comfort of home-style Indian curry, the romance of Italian pasta, 
                or the delicate balance of Chinese flavors, we invite you to create beautiful memories with us.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary font-medium">
                <span className="px-4 py-2 bg-primary/10 rounded-full">🍛 Authentic Indian</span>
                <span className="px-4 py-2 bg-primary/10 rounded-full">🍝 Italian Classics</span>
                <span className="px-4 py-2 bg-primary/10 rounded-full">🥢 Chinese Delights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;