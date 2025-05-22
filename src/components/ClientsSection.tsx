import { useState, useEffect, useRef } from 'react';

// Sample client data
const clients = [
  { id: 1, name: 'Acme Corporation', logo: 'https://via.placeholder.com/150?text=ACME', description: 'Leading technology solutions provider' },
  { id: 2, name: 'Global Industries', logo: 'https://via.placeholder.com/150?text=GLOBAL', description: 'International manufacturing company' },
  { id: 3, name: 'Nexus Ventures', logo: 'https://via.placeholder.com/150?text=NEXUS', description: 'Investment and venture capital firm' },
  { id: 4, name: 'Evergreen Properties', logo: 'https://via.placeholder.com/150?text=EVERGREEN', description: 'Sustainable real estate development' },
  { id: 5, name: 'Summit Holdings', logo: 'https://via.placeholder.com/150?text=SUMMIT', description: 'Diversified business conglomerate' },
  { id: 6, name: 'Crystal Developers', logo: 'https://via.placeholder.com/150?text=CRYSTAL', description: 'Premium residential projects' },
  { id: 7, name: 'Artisan Spaces', logo: 'https://via.placeholder.com/150?text=ARTISAN', description: 'Innovative interior design solutions' },
  { id: 8, name: 'Metropolitan Group', logo: 'https://via.placeholder.com/150?text=METRO', description: 'Urban development specialists' },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    client: 'John Smith',
    company: 'Acme Corporation',
    role: 'CEO',
    content: 'RG Infra Developers delivered our corporate headquarters ahead of schedule and with exceptional quality. Their attention to detail and commitment to sustainability aligned perfectly with our company values.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    client: 'Emily Johnson',
    company: 'Global Industries',
    role: 'Director of Facilities',
    content: 'We have partnered with RG Infra for three consecutive projects, and they continue to exceed our expectations. Their team\'s professionalism and innovative solutions have made them our preferred development partner.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    client: 'Michael Chen',
    company: 'Nexus Ventures',
    role: 'Investment Manager',
    content: 'As investors in multiple real estate projects, we value partners who deliver consistent returns. RG Infra has proven time and again that they understand market dynamics and build properties that appreciate in value.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const ClientsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${activeTestimonial * 100}%)`;
    }
  }, [activeTestimonial]);

  return (
    <section className="section-padding bg-off-white" id="clients">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Our Valued Clients</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We take pride in our relationships with industry leaders who trust us with their real estate needs.
          </p>
        </div>
        
        {/* Clients logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-16 object-contain mb-4 grayscale hover:grayscale-0 transition-all"
              />
              <h4 className="text-primary-blue font-medium">{client.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{client.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">What Our Clients Say</h3>
          
          <div className="relative overflow-hidden">
            {/* Testimonial slider */}
            <div 
              ref={sliderRef} 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full px-4 md:px-8" 
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white p-8 rounded-lg shadow-custom">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.client} 
                        className="w-20 h-20 rounded-full object-cover border-4 border-primary-gold"
                      />
                      <div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                        <div>
                          <h4 className="font-semibold text-primary-blue">{testimonial.client}</h4>
                          <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${activeTestimonial === index ? 'bg-primary-gold' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;