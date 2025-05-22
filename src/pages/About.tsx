import { useEffect } from 'react';
import { Award, Target, Users, Shield, Activity, Map } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Set document title
    document.title = "About Us | RG Infra Developers";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="relative py-20 bg-primary-blue">
        <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">About Our Company</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Building dreams and transforming skylines since 2005
          </p>
        </div>
      </section>
      
      {/* Story section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                RG Infra Developers was founded in 2005 by Rajesh Gupta with a vision to create 
                exceptional living and working spaces that stand the test of time. What began as 
                a small family business has grown into one of the region's most respected real 
                estate development companies.
              </p>
              <p className="text-gray-600 mb-6">
                Over the past 18 years, we have successfully delivered over 50 projects spanning 
                residential complexes, commercial buildings, and integrated townships. Our journey 
                has been defined by an unwavering commitment to quality, innovation, and customer 
                satisfaction.
              </p>
              <p className="text-gray-600">
                Today, under the leadership of our managing director, we continue to push boundaries 
                in architectural design, sustainable development, and creating communities that 
                enhance the quality of life for our customers.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg" 
                alt="RG Infra Developers History" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-5xl font-bold text-primary-gold">18+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Vision & Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guided by strong principles and a clear vision, we're building the future of real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-primary-gold/20 p-3 rounded-full mr-4">
                  <Target size={28} className="text-primary-gold" />
                </div>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-6">
                To be the most trusted and innovative real estate developer, creating spaces 
                that inspire, endure, and enhance the quality of life for generations to come.
              </p>
              <ul className="space-y-3">
                {['Setting new standards in quality construction', 'Pioneering sustainable development practices', 'Creating landmark properties that appreciate in value'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gold/20 text-primary-gold mr-3 mt-0.5">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-primary-gold/20 p-3 rounded-full mr-4">
                  <Map size={28} className="text-primary-gold" />
                </div>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-6">
                To develop properties that perfectly balance aesthetics, functionality, and sustainability, 
                while maintaining the highest standards of business ethics and customer service.
              </p>
              <ul className="space-y-3">
                {['Delivering projects on time with promised quality', 'Building long-term relationships with customers and partners', 'Contributing to community development through thoughtful urban planning', 'Embracing innovation in construction technology and design'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gold/20 text-primary-gold mr-3 mt-0.5">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core values */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={28} />,
                title: 'Integrity',
                description: 'We maintain the highest ethical standards in all our business dealings, ensuring transparency and honesty at every step.'
              },
              {
                icon: <Award size={28} />,
                title: 'Excellence',
                description: 'We are committed to exceeding expectations and delivering exceptional quality in every project we undertake.'
              },
              {
                icon: <Users size={28} />,
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We listen, understand, and tailor our offerings to meet their needs.'
              },
              {
                icon: <Activity size={28} />,
                title: 'Innovation',
                description: 'We continuously seek new ideas, technologies, and methods to improve our designs and construction processes.'
              },
              {
                icon: <Shield size={28} />,
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible development practices that minimize our ecological footprint.'
              },
              {
                icon: <Users size={28} />,
                title: 'Teamwork',
                description: 'We foster a collaborative environment where diverse perspectives come together to create exceptional results.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary-gold mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team section (placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries leading RG Infra Developers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Rajesh Gupta',
                position: 'Founder & Chairman',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Priya Sharma',
                position: 'Managing Director',
                image: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                name: 'Vikram Mehta',
                position: 'Chief Architect',
                image: 'https://randomuser.me/api/portraits/men/68.jpg'
              },
              {
                name: 'Anjali Reddy',
                position: 'Head of Operations',
                image: 'https://randomuser.me/api/portraits/women/65.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary-gold">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-cta-pattern bg-cover bg-center">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Join Our Journey</h2>
            <p className="text-xl mb-8">
              Discover how RG Infra Developers can help you find your dream property or investment opportunity.
            </p>
            <a href="/contact" className="btn btn-primary">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;