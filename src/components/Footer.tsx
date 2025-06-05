import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'; // Adjusted path to go outside src

// Define the interface for Footer props
interface FooterProps {
  visitorCount: number;
}

const Footer = ({ visitorCount }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const projectCategories = [
    'Residential', 
    'Office Spaces',
    'Education',
    'Co-Living',
    'Co-Working',
    'Hospitality',
    'Retail',
    'Facility Management',
    'Data Centres',
    'Commercial', 
    'Corporate Interiors',
    'Design & Build'
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-primary-blue text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="RG Infra Developers Logo" 
                className="h-16" // Adjust height as needed
              />
              <div>
                <span className="font-playfair font-bold text-xl block">RG INFRA</span>
                <span className="text-primary-gold font-playfair font-bold text-xl">DEVELOPERS</span>
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
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-primary-gold transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Projects */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Our Projects</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {projectCategories.map((item) => (
                <div key={item}>
                  <Link 
                    to="/projects"
                    className="text-gray-300 hover:text-primary-gold transition-colors flex items-center text-sm"
                  >
                    <span className="mr-1">›</span> {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-primary-gold mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">C-3, 12-1-863/2, Beside Asif Nagar Police Station, Mehdipatnam, Hyderabad, T.G -500028</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-gold mr-3 flex-shrink-0" />
                <a href="tel:9966966863" className="text-gray-300 hover:text-primary-gold transition-colors">
                  996696863 - 9182695782
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-gold mr-3 flex-shrink-0" />
                <a href="mailto:rginfradevelopersinfo@gmail.com" className="text-gray-300 hover:text-primary-gold transition-colors">
                  rginfradevelopersinfo@gmail.com
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