import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  visitorCount: number;
}

const Footer = ({ visitorCount }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-blue text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Building2 size={28} className="text-primary-gold mr-2" />
              <div>
                <span className="font-playfair font-bold text-xl">RG INFRA</span>
                <span className="text-primary-gold ml-1 font-playfair font-bold">DEVELOPERS</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              Creating luxurious living spaces and commercial properties 
              with a perfect blend of innovation, quality and timeless design.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-primary-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-primary-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-primary-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-primary-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About Us', 'Contact', 'Careers', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-primary-gold transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Projects */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Our Projects</h4>
            <ul className="space-y-2">
              {['Residential', 'Commercial', 'Upcoming Projects', 'Completed Projects'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/projects"
                    className="text-gray-300 hover:text-primary-gold transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-primary-gold mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Business Avenue, Corporate District, City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-gold mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-gold transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@rginfra.com" className="text-gray-300 hover:text-primary-gold transition-colors">
                  info@rginfra.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-700 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} RG Infra Developers. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="bg-primary-gold/20 rounded-md px-4 py-2 text-primary-gold flex items-center">
              <span className="mr-2">Visitors:</span>
              <span className="font-semibold">{visitorCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;