import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
