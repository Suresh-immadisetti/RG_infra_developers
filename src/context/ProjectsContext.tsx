import { createContext, useState, useContext, ReactNode } from 'react';

// Types
export type ProjectStatus = 'upcoming' | 'present' | 'completed';

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  status: ProjectStatus;
  thumbnailUrl: string;
  images: string[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
  brochureUrl?: string;
  completionDate?: string;
  startDate?: string;
}

interface ProjectsContextType {
  projects: Project[];
  filteredProjects: Project[];
  filterProjectsByStatus: (status: ProjectStatus | 'all') => void;
  getProjectById: (id: string) => Project | undefined;
  updateProjectStatus: (id: string, newStatus: ProjectStatus) => void;
  currentFilter: ProjectStatus | 'all';
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

// Sample project data
const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Serenity Heights',
    location: 'Jubilee Hills, Hyderabad',
    description: 'Luxury apartments with panoramic city views, offering 3 & 4 BHK configurations with world-class amenities and sustainable design features.',
    status: 'present',
    thumbnailUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg'
    ],
    features: [
      'Infinity pool with city views',
      'Smart home technology',
      'Multilevel parking',
      'Landscaped gardens',
      'Premium fitness center'
    ],
    specifications: {
      'Type': 'Residential',
      'Area': '10 acres',
      'Units': '120 apartments',
      'Size Range': '1800 - 3200 sq ft',
      'Floors': '25'
    },
    startDate: 'June 2022',
    completionDate: 'December 2024'
  },
  {
    id: '2',
    title: 'Harmony Business Park',
    location: 'HITEC City, Hyderabad',
    description: 'Premium office spaces designed for the modern workforce with state-of-the-art facilities and excellent connectivity to major transportation hubs.',
    status: 'upcoming',
    thumbnailUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
    images: [
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg',
      'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg'
    ],
    features: [
      'Grade A Office Spaces',
      'Automated building management system',
      'Green building certification',
      'Conference facilities',
      'High-speed elevators'
    ],
    specifications: {
      'Type': 'Commercial',
      'Area': '15 acres',
      'Office Spaces': '200 units',
      'Size Range': '1000 - 10000 sq ft',
      'Floors': '30'
    },
    startDate: 'September 2023',
    completionDate: 'March 2026'
  },
  {
    id: '3',
    title: 'Green Valley Villas',
    location: 'Kokapet, Hyderabad',
    description: 'Exclusive gated community of luxury villas with private gardens, designed for families seeking space, privacy and premium amenities.',
    status: 'present',
    thumbnailUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg'
    ],
    features: [
      'Private swimming pools',
      'Solar power integration',
      'Rainwater harvesting',
      'Smart security systems',
      'Electric vehicle charging points'
    ],
    specifications: {
      'Type': 'Residential Villas',
      'Area': '30 acres',
      'Villas': '75',
      'Size Range': '3500 - 5000 sq ft',
      'Plot Size': '4000 - 6000 sq ft'
    },
    startDate: 'January 2023',
    completionDate: 'June 2025'
  },
  {
    id: '4',
    title: 'Urban Square Mall',
    location: 'Banjara Hills, Hyderabad',
    description: 'A premium shopping destination with international brands, gourmet dining options, multiplex cinema, and family entertainment zones.',
    status: 'completed',
    thumbnailUrl: 'https://images.pexels.com/photos/5961922/pexels-photo-5961922.jpeg',
    images: [
      'https://images.pexels.com/photos/5961922/pexels-photo-5961922.jpeg',
      'https://images.pexels.com/photos/3769149/pexels-photo-3769149.jpeg',
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg'
    ],
    features: [
      'Premium retail spaces',
      'Gourmet restaurants',
      '8-screen multiplex',
      'Indoor gaming zone',
      'Multi-level parking'
    ],
    specifications: {
      'Type': 'Commercial - Retail',
      'Area': '8 acres',
      'Retail Spaces': '250+',
      'Size Range': '500 - 5000 sq ft',
      'Floors': '6'
    },
    startDate: 'March 2020',
    completionDate: 'November 2022'
  },
  {
    id: '5',
    title: 'Pearl Residences',
    location: 'Gachibowli, Hyderabad',
    description: 'Contemporary apartments with smart home features, designed for young professionals with an emphasis on community living and convenience.',
    status: 'upcoming',
    thumbnailUrl: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg'
    ],
    features: [
      'Co-working spaces',
      'Rooftop infinity pool',
      'Smart home automation',
      'Pet-friendly zones',
      'Yoga and meditation deck'
    ],
    specifications: {
      'Type': 'Residential',
      'Area': '5 acres',
      'Units': '250 apartments',
      'Size Range': '1200 - 2500 sq ft',
      'Floors': '22'
    },
    startDate: 'December 2023',
    completionDate: 'June 2026'
  },
  {
    id: '6',
    title: 'Heritage Courts',
    location: 'Madhapur, Hyderabad',
    description: 'A completed residential project that blends traditional aesthetics with modern amenities, creating an oasis of calm in the urban landscape.',
    status: 'completed',
    thumbnailUrl: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
    images: [
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
      'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg'
    ],
    features: [
      'Classical architecture',
      'Courtyard gardens',
      'Community hall',
      'Children\'s play area',
      'Senior citizen corner'
    ],
    specifications: {
      'Type': 'Residential',
      'Area': '7 acres',
      'Units': '180 apartments',
      'Size Range': '1500 - 2800 sq ft',
      'Floors': '18'
    },
    startDate: 'April 2019',
    completionDate: 'August 2022'
  }
];

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);
  const [currentFilter, setCurrentFilter] = useState<ProjectStatus | 'all'>('all');

  const filterProjectsByStatus = (status: ProjectStatus | 'all') => {
    setCurrentFilter(status);
    if (status === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.status === status));
    }
  };

  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
  };

  const updateProjectStatus = (id: string, newStatus: ProjectStatus) => {
    const updatedProjects = projects.map(project => 
      project.id === id ? { ...project, status: newStatus } : project
    );
    setProjects(updatedProjects);
    filterProjectsByStatus(currentFilter);
  };

  return (
    <ProjectsContext.Provider value={{
      projects,
      filteredProjects,
      filterProjectsByStatus,
      getProjectById,
      updateProjectStatus,
      currentFilter
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};