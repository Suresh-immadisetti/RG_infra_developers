import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, MapPin, ArrowRight } from 'lucide-react';
import { Project, ProjectStatus } from '../context/ProjectsContext';

interface ProjectCardProps {
  project: Project;
}

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const badges = {
    upcoming: { class: 'badge-upcoming', label: 'Upcoming' },
    present: { class: 'badge-present', label: 'In Progress' },
    completed: { class: 'badge-completed', label: 'Completed' }
  };
  
  return (
    <span className={`badge ${badges[status].class}`}>
      {badges[status].label}
    </span>
  );
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card group hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with overlay on hover */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-primary-blue/90 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>
        
        {/* Status badge */}
        <div className="absolute top-4 right-4 z-10">
          <StatusBadge status={project.status} />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary-blue group-hover:text-primary-gold transition-colors">
          {project.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-2 text-primary-gold" />
          <span>{project.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center text-gray-600 mb-5">
          <CalendarClock size={16} className="mr-2 text-primary-gold" />
          <span>{project.completionDate ? `Completion: ${project.completionDate}` : `Launch: ${project.startDate}`}</span>
        </div>
        
        <Link 
          to={`/project/${project.id}`}
          className="inline-flex items-center text-primary-gold hover:text-primary-blue font-medium transition-colors"
        >
          View Details <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;