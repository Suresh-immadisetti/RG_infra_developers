import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjects, ProjectStatus } from '../context/ProjectsContext';
import { ArrowLeft, MapPin, Calendar, FileCheck, DownloadCloud, Share2 } from 'lucide-react';

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const badges = {
    upcoming: { class: 'badge-upcoming', label: 'Upcoming' },
    present: { class: 'badge-present', label: 'In Progress' },
    completed: { class: 'badge-completed', label: 'Completed' }
  };
  
  return (
    <span className={`badge ${badges[status].class} text-sm`}>
      {badges[status].label}
    </span>
  );
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProjectById, updateProjectStatus } = useProjects();
  const [activeImage, setActiveImage] = useState(0);
  const [project, setProject] = useState(id ? getProjectById(id) : undefined);
  
  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      setProject(projectData);
      
      if (projectData) {
        document.title = `${projectData.title} | RG Infra Developers`;
      } else {
        document.title = 'Project Not Found | RG Infra Developers';
      }
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [id, getProjectById]);
  
  if (!project) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-3xl font-semibold mb-4">Project Not Found</h2>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/projects')}
          className="btn btn-primary"
        >
          View All Projects
        </button>
      </div>
    );
  }
  
  const handleStatusChange = (newStatus: ProjectStatus) => {
    updateProjectStatus(project.id, newStatus);
    setProject({ ...project, status: newStatus });
  };
  
  return (
    <div className="pt-24 pb-16">
      {/* Back button */}
      <div className="container-custom mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-primary-gold transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Projects
        </button>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Image gallery */}
            <div className="mb-8">
              <div className="relative rounded-lg overflow-hidden h-[500px] mb-4">
                <img 
                  src={project.images[activeImage]} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-md ${
                      activeImage === index ? 'ring-2 ring-primary-gold' : 'opacity-70'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} thumbnail ${index + 1}`} 
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Project title and status */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-semibold">{project.title}</h1>
              <StatusBadge status={project.status} />
            </div>
            
            {/* Location and date */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-primary-gold" />
                {project.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar size={18} className="mr-2 text-primary-gold" />
                {project.completionDate ? `Completion: ${project.completionDate}` : `Launch: ${project.startDate}`}
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
            
            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gold/20 text-primary-gold mr-3 mt-0.5">
                      <FileCheck size={14} />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Specifications */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-3">
                    <h3 className="text-gray-500 text-sm">{key}</h3>
                    <p className="text-gray-800 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            {/* Call to action card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Interested in this project?</h3>
              <p className="text-gray-600 mb-4">
                Connect with our team for more information, pricing details, or to schedule a site visit.
              </p>
              <a 
                href="/contact" 
                className="btn btn-primary w-full text-center mb-4"
              >
                Contact Us
              </a>
              <a 
                href={project.brochureUrl || '#'} 
                className="btn btn-outline w-full text-center flex items-center justify-center"
              >
                <DownloadCloud size={18} className="mr-2" /> Download Brochure
              </a>
            </div>
            
            {/* Share card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Share this project</h3>
                <Share2 size={18} className="text-gray-600" />
              </div>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'whatsapp'].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="h-10 w-10 rounded-full bg-gray-100 hover:bg-primary-gold hover:text-white transition-colors flex items-center justify-center"
                    aria-label={`Share on ${platform}`}
                  >
                    <span className="capitalize">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Admin controls (simulated) */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Update Project Status</h3>
              <p className="text-gray-600 mb-4">
                Change the current status of this project:
              </p>
              <div className="flex flex-col space-y-2">
                {['upcoming', 'present', 'completed'].map((status) => (
                  <button 
                    key={status}
                    onClick={() => handleStatusChange(status as ProjectStatus)}
                    className={`px-4 py-2 rounded border ${
                      project.status === status 
                        ? 'bg-primary-gold text-white border-primary-gold' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {status === 'upcoming' ? 'Upcoming' : 
                     status === 'present' ? 'In Progress' : 
                     'Completed'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;