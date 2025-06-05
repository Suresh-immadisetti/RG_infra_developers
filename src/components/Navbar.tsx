import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust the path according to your project structure

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="RG Infra Developers Logo" 
              className="h-16 w-auto" // Adjust height as needed
            />
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-primary-blue' : 'text-white'}`}>
              <span className="font-playfair font-bold text-xl md:text-2xl">RG INFRA</span>
              <span className="text-primary-gold ml-1 font-playfair font-bold">DEVELOPERS</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-gold transition-colors duration-300 font-medium`}
              >
                {item}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} /> : 
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container-custom flex flex-col space-y-4">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-gray-800 hover:text-primary-gold transition-colors py-2 border-b border-gray-100"
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <a href="tel:+919966966863" className="flex items-center gap-2 text-primary-blue">
              <Phone size={16} /> +91 9966966863
            </a>
            <a href="mailto:rginfradevelopersinfo@gmail.com" className="flex items-center gap-2 text-primary-blue">
              <Mail size={16} /> rginfradevelopersinfo@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;