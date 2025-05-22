import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ClientsSection from '../components/ClientsSection';
import CtaSection from '../components/CtaSection';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Set document title for the home page
    document.title = "RG Infra Developers | Premium Real Estate";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ClientsSection />
      <CtaSection />
    </>
  );
};

export default Home;