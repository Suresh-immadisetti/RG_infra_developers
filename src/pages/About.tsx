import { useEffect } from 'react';
import { Award, Target, Users, Shield, Activity, Map } from 'lucide-react';
// Import images from assets
import ChairmanImage from '../../assets/chairman.jpg';
import MDImage from '../../assets/md.jpg';
import CompanyHistoryImage from '../../assets/company-history.jpg';

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
      <section className="relative py-16 md:py-20 bg-primary-blue">
        <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">About Our Company</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Building dreams and transforming skylines since 2021
          </p>
        </div>
      </section>
      
      {/* Story section */}
      <section className="py-12 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 md:mb-6">
                RG Infra Developers was founded in 2021 by Sagar Donakanti with a vision to create 
                exceptional living and working spaces that stand the test of time. What began as 
                a small family business has grown into one of the region's most respected real 
                estate development companies.
              </p>
              <p className="text-gray-600 mb-4 md:mb-6">
                Over the past 5 years, we have successfully delivered over 20 projects spanning 
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
            <div className="relative h-64 md:h-auto">
              <img 
                src={CompanyHistoryImage}
                alt="RG Infra Developers History" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
                <div className="text-2xl md:text-4xl font-bold text-primary-gold">4+</div>
                <div className="text-xs md:text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              Visionary leaders guiding our journey towards excellence
            </p>
          </div>

          {/* Chairman Section */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h3 className="text-xl md:text-3xl font-semibold mb-3 md:mb-4">Mr. Rahul Ganga</h3>
                <p className="text-primary-gold font-medium mb-4 md:mb-6">Chairman</p>
                <p className="text-gray-600 mb-4 md:mb-6">
                  With over 30 years of experience in real estate development, Mr. Rahul Ganga  
                  founded RG Infra Developers with a vision to create landmark properties that 
                  redefine urban living. His strategic vision and commitment to quality have been 
                  instrumental in shaping the company's success.
                </p>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="font-semibold text-base md:text-lg">Key Contributions:</h4>
                  <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-gold rounded-full mt-2 mr-2 md:mr-3"></span>
                      Pioneered sustainable construction practices in the region
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-gold rounded-full mt-2 mr-2 md:mr-3"></span>
                      Established strong relationships with government and industry bodies
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-gold rounded-full mt-2 mr-2 md:mr-3"></span>
                      Recipient of the "Real Estate Visionary Award" 2020
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 w-full">
                <div className="relative aspect-[4/5] w-full">
                  <img 
                    src={ChairmanImage}
                    alt="Mr. Rahul Ganga - Chairman" 
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-primary-gold text-white p-2 md:p-3 rounded-lg shadow-lg">
                    <div className="text-lg md:text-2xl font-bold">30+</div>
                    <div className="text-xs">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MD Section */}
          <div className="pt-8 md:pt-12">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[4/5] w-full">
                  <img 
                    src={MDImage}
                    alt="Mr. Sagar Donakanti - Managing Director" 
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-primary-blue text-white p-2 md:p-3 rounded-lg shadow-lg">
                    <div className="text-lg md:text-2xl font-bold">5+</div>
                    <div className="text-xs">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-xl md:text-3xl font-semibold mb-3 md:mb-4">Mr. Sagar Donakanti</h3>
                <p className="text-primary-gold font-medium mb-4 md:mb-6">Founder & Managing Director</p>
                <p className="text-gray-600 mb-4 md:mb-6">
                  Mr. Sagar Donakanti brings 5 years of international experience in real estate 
                  development and management. Since taking over as MD in 2020, He has driven 
                  innovation, operational excellence, and digital transformation across all 
                  company projects.
                </p>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="font-semibold text-base md:text-lg">Key Achievements:</h4>
                  <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-gold rounded-full mt-2 mr-2 md:mr-3"></span>
                      Implemented cutting-edge construction technologies
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-gold rounded-full mt-2 mr-2 md:mr-3"></span>
                      Expanded company operations to 3 new states
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary-gold rounded-full mt-2 mr-2 md:mr-3"></span>
                      Recognized as "Young Leader in Real Estate" by Economic Times
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4">Vision & Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              Guided by strong principles and a clear vision, we're building the future of real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Vision */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-primary-gold/20 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <Target size={24} className="text-primary-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                To be the most trusted and innovative real estate developer, creating spaces 
                that inspire, endure, and enhance the quality of life for generations to come.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['Setting new standards in quality construction', 'Pioneering sustainable development practices', 'Creating landmark properties that appreciate in value'].map((item, index) => (
                  <li key={index} className="flex items-start text-sm md:text-base">
                    <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gold/20 text-primary-gold mr-2 md:mr-3 mt-0.5">
                      <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-primary-gold/20 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                  <Map size={24} className="text-primary-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                To develop properties that perfectly balance aesthetics, functionality, and sustainability, 
                while maintaining the highest standards of business ethics and customer service.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {['Delivering projects on time with promised quality', 'Building long-term relationships with customers and partners', 'Contributing to community development through thoughtful urban planning', 'Embracing innovation in construction technology and design'].map((item, index) => (
                  <li key={index} className="flex items-start text-sm md:text-base">
                    <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gold/20 text-primary-gold mr-2 md:mr-3 mt-0.5">
                      <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: <Shield size={24} className="text-primary-gold" />,
                title: 'Integrity',
                description: 'We maintain the highest ethical standards in all our business dealings, ensuring transparency and honesty at every step.'
              },
              {
                icon: <Award size={24} className="text-primary-gold" />,
                title: 'Excellence',
                description: 'We are committed to exceeding expectations and delivering exceptional quality in every project we undertake.'
              },
              {
                icon: <Users size={24} className="text-primary-gold" />,
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We listen, understand, and tailor our offerings to meet their needs.'
              },
              {
                icon: <Activity size={24} className="text-primary-gold" />,
                title: 'Innovation',
                description: 'We continuously seek new ideas, technologies, and methods to improve our designs and construction processes.'
              },
              {
                icon: <Shield size={24} className="text-primary-gold" />,
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible development practices that minimize our ecological footprint.'
              },
              {
                icon: <Users size={24} className="text-primary-gold" />,
                title: 'Teamwork',
                description: 'We foster a collaborative environment where diverse perspectives come together to create exceptional results.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary-gold mb-3">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-12 md:py-16 bg-cta-pattern bg-cover bg-center">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">Join Our Journey</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Discover how RG Infra Developers can help you find your dream property or investment opportunity.
            </p>
            <a href="/contact" className="inline-block bg-primary-gold hover:bg-yellow-600 text-white font-medium py-2 px-6 md:py-3 md:px-8 rounded-lg transition-colors">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;