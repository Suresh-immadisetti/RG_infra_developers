import { useState, useEffect } from 'react';
import {  HashRouter  as Router, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import { ProjectStatus } from './context/ProjectsContext';

// Pages
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Context
import { ProjectsProvider } from './context/ProjectsContext';

function AppWrapper() {
  return (
    <ProjectsProvider>
      <Router>
        <AppContent />
      </Router>
    </ProjectsProvider>
  );
}

function AppContent() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Track visitors
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const storedCount = localStorage.getItem('visitorCount');
        let count = storedCount ? parseInt(storedCount, 10) : 0;
        
        // Only increment if it's a new session
        if (!sessionStorage.getItem('isVisited')) {
          count += 1;
          localStorage.setItem('visitorCount', count.toString());
          sessionStorage.setItem('isVisited', 'true');
        }
        
        setVisitorCount(count);
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  // Optional redirect if URL has no hash
  useEffect(() => {
    if (!window.location.hash) {
      window.location.replace(`${window.location.href}#/`);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/projects" 
            element={<ProjectsPage filter={searchParams.get('filter') as ProjectStatus | null} />} 
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer visitorCount={visitorCount} />
    </div>
  );
}

export default AppWrapper;