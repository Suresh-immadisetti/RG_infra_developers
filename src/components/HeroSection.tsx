import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        parallaxRef.current.style.opacity = `${1 - scrollPosition * 0.002}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg')" }}
        ref={parallaxRef}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-blue/70 z-10"></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-3xl fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
            <span className="block">Creating</span> 
            <span className="text-primary-gold">Exceptional</span> Spaces
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Premium residential and commercial developments that redefine modern living
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn btn-primary flex items-center justify-center sm:justify-start gap-2">
              Explore Our Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline flex items-center justify-center sm:justify-start gap-2">
              Connect With Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll</span>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m-7-7l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;