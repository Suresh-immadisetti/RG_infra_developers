import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Context
import { ProjectsProvider } from './context/ProjectsContext';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count by getting a stored value or generating a random one
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setVisitorCount(parseInt(storedCount, 10) + 1);
    } else {
      // Start with a reasonable number to look established
      const initialCount = Math.floor(Math.random() * 1000) + 5000;
      setVisitorCount(initialCount);
    }
    
    // Store the updated count
    localStorage.setItem('visitorCount', visitorCount.toString());
  }, []);

  return (
    <ProjectsProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer visitorCount={visitorCount} />
        </div>
      </Router>
    </ProjectsProvider>
  );
}

export default App;