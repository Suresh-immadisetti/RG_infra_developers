import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { useProjects, ProjectStatus } from '../context/ProjectsContext';

const ProjectsSection = () => {
  const { filteredProjects, filterProjectsByStatus, currentFilter } = useProjects();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleFilterChange = (status: ProjectStatus | 'all') => {
    if (status !== currentFilter) {
      setIsAnimating(true);
      setTimeout(() => {
        filterProjectsByStatus(status);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">Our Signature Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our portfolio of luxurious residential and commercial developments
            that combine innovative design with premium quality.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'upcoming', 'present', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => handleFilterChange(status as ProjectStatus | 'all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                currentFilter === status
                  ? 'bg-primary-gold text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status === 'all' ? 'All Projects' : 
               status === 'upcoming' ? 'Upcoming' : 
               status === 'present' ? 'In Progress' : 
               'Completed'}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Show more button */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="btn btn-outline inline-flex items-center"
            >
              View All Projects
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
        
        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;