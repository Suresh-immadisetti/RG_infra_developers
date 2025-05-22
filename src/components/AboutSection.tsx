import { useState, useEffect, useRef } from 'react';
import { Award, Users, Building, PenTool } from 'lucide-react';

// Counter animation component
const AnimatedCounter = ({ value, title, icon: Icon }: { value: number, title: string, icon: any }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000; // 2 seconds
          const step = value / (duration / 16); // 16ms per frame
          
          const timer = setInterval(() => {
            start += step;
            if (start > value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(start));
            }
          }, 16);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, [value]);
  
  return (
    <div 
      ref={counterRef}
      className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-gold/10 rounded-full mb-4">
        <Icon size={28} className="text-primary-gold" />
      </div>
      <h3 className="text-4xl font-bold text-primary-blue mb-2">
        {displayValue.toLocaleString()}+
      </h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="section-padding bg-gray-50" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="slide-up">
            <h2 className="section-heading mb-6">About RG Infra Developers</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2005, RG Infra Developers has established itself as a premier real estate 
              developer in Hyderabad, specializing in residential and commercial properties that 
              blend luxury with functionality.
            </p>
            <p className="text-gray-600 mb-6">
              Our philosophy centers on creating spaces that enhance quality of life while 
              incorporating sustainable practices. Each project is meticulously designed to 
              reflect our commitment to excellence, innovation, and timeless aesthetics.
            </p>
            
            {/* Values/USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { title: 'Quality Construction', description: 'Premium materials and expert craftsmanship' },
                { title: 'Innovative Design', description: 'Contemporary architecture with thoughtful layouts' },
                { title: 'Timely Delivery', description: 'Consistent track record of on-schedule completion' },
                { title: 'Customer Satisfaction', description: 'Dedicated support throughout your journey' }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gold/20 text-primary-gold">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-primary-blue">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl scale-in">
              <img 
                src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg" 
                alt="Luxury Real Estate Development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/50 to-transparent"></div>
              
              {/* Experience label */}
              <div className="absolute bottom-0 left-0 bg-primary-gold text-white p-4 rounded-tr-lg">
                <p className="text-3xl font-bold">18+</p>
                <p className="text-sm uppercase tracking-wide">Years of Excellence</p>
              </div>
            </div>
            
            {/* Floating accent images */}
            <img 
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" 
              alt="Property" 
              className="absolute -top-8 -right-8 w-32 h-32 object-cover rounded-lg shadow-lg border-4 border-white"
            />
            <img 
              src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" 
              alt="Interior" 
              className="absolute -bottom-8 -right-8 w-40 h-32 object-cover rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </div>
        
        {/* Stats/counter section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <AnimatedCounter value={50} title="Projects Completed" icon={Building} />
          <AnimatedCounter value={2500} title="Happy Families" icon={Users} />
          <AnimatedCounter value={18} title="Years of Experience" icon={Award} />
          <AnimatedCounter value={25} title="Ongoing Projects" icon={PenTool} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;