import { createContext, useState, useContext, ReactNode } from 'react';

// Import all thumbnails
import venkateswaraheightsThumb from '../../assets/projects/Venkateswara-heights/thumbnail.jpg';
import businessParkThumb from '../../assets/projects/Business-Park/thumbnail.jpg';
import butterflyResidencyThumb from '../../assets/projects/Butterfly-residency/thumbnail.jpg';
import runseraThumb from '../../assets/projects/runsera/thumbnail.jpg';
import gemsResidencesThumb from '../../assets/projects/Gems-residences/thumbnail.jpg';
import armoorSiteThumb from '../../assets/projects/Armoor-Site/thumbnail.jpg';
import indalwaiThumb from '../../assets/projects/Indalwai/thumbnail.jpg';
import attapurSiteThumb from '../../assets/projects/Attapur-Site/thumbnail.jpg';

// Import all project images
import venkateswaraheightsImg1 from '../../assets/projects/Venkateswara-heights/image1.jpg';
import venkateswaraheightsImg2 from '../../assets/projects/Venkateswara-heights/image2.jpg';
import venkateswaraheightsImg3 from '../../assets/projects/Venkateswara-heights/image3.jpg';

import businessParkImg1 from '../../assets/projects/Business-Park/image1.jpg';
import businessParkImg2 from '../../assets/projects/Business-Park/image2.jpg';
import businessParkImg3 from '../../assets/projects/Business-Park/image3.jpg';

import butterflyResidencyImg1 from '../../assets/projects/Butterfly-residency/image1.jpg';
import butterflyResidencyImg2 from '../../assets/projects/Butterfly-residency/image2.jpg';
import butterflyResidencyImg3 from '../../assets/projects/Butterfly-residency/image3.jpg';

import runseraImg1 from '../../assets/projects/runsera/image1.jpg';
import runseraImg2 from '../../assets/projects/runsera/image2.jpg';
import runseraImg3 from '../../assets/projects/runsera/image3.jpg';

import gemsResidencesImg1 from '../../assets/projects/Gems-residences/image1.jpg';
import gemsResidencesImg2 from '../../assets/projects/Gems-residences/image2.jpg';
import gemsResidencesImg3 from '../../assets/projects/Gems-residences/image3.jpg';

import armoorSiteImg1 from '../../assets/projects/Armoor-Site/image1.jpg';
import armoorSiteImg2 from '../../assets/projects/Armoor-Site/image2.jpg';
import armoorSiteImg3 from '../../assets/projects/Armoor-Site/image3.jpg';

import indalwaiImg1 from '../../assets/projects/Indalwai/image1.jpg';
import indalwaiImg2 from '../../assets/projects/Indalwai/image2.jpg';
import indalwaiImg3 from '../../assets/projects/Indalwai/image3.jpg';

import attapurSiteImg1 from '../../assets/projects/Attapur-Site/image1.jpg';
import attapurSiteImg2 from '../../assets/projects/Attapur-Site/image2.jpg';
import attapurSiteImg3 from '../../assets/projects/Attapur-Site/image3.jpg';

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

// Sample project data with imported images
const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Venkateswara Heights',
    location: 'Jubilee Hills, Hyderabad',
    description: 'Luxury apartments with panoramic city views, offering 3 & 4 BHK configurations with world-class amenities and sustainable design features.',
    status: 'present',
    thumbnailUrl: venkateswaraheightsThumb,
    images: [
      venkateswaraheightsImg1,
      venkateswaraheightsImg2,
      venkateswaraheightsImg3
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
    title: 'Business Park',
    location: 'HITEC City, Hyderabad',
    description: 'Premium office spaces designed for the modern workforce with state-of-the-art facilities and excellent connectivity to major transportation hubs.',
    status: 'upcoming',
    thumbnailUrl: businessParkThumb,
    images: [
      businessParkImg1,
      businessParkImg2,
      businessParkImg3
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
    title: 'Butterfly-residency',
    location: 'Gachibowli, Hyderabad',
    description: 'Exclusive gated community of luxury villas with private gardens, designed for families seeking space, privacy and premium amenities.',
    status: 'present',
    thumbnailUrl: butterflyResidencyThumb,
    images: [
      butterflyResidencyImg1,
      butterflyResidencyImg2,
      butterflyResidencyImg3
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
    title: 'RunsEra Digital Solutions Pvt. Ltd.',
    location: 'Banjara Hills, Hyderabad',
    description: 'A premium shopping destination with international brands, gourmet dining options, Digital marketing company interior design',
    status: 'completed',
    thumbnailUrl: runseraThumb,
    images: [
      runseraImg1,
      runseraImg2,
      runseraImg3
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
    title: 'Gems Residences',
    location: 'Gachibowli, Hyderabad',
    description: 'Contemporary apartments with smart home features, designed for young professionals with an emphasis on community living and convenience.',
    status: 'upcoming',
    thumbnailUrl: gemsResidencesThumb,
    images: [
      gemsResidencesImg1,
      gemsResidencesImg2,
      gemsResidencesImg3
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
    title: 'Armoor Site',
    location: 'Armoor, Nizamabad',
    description: 'A completed residential project that blends traditional aesthetics with modern amenities, creating an oasis of calm in the urban landscape.',
    status: 'completed',
    thumbnailUrl: armoorSiteThumb,
    images: [
      armoorSiteImg1,
      armoorSiteImg2,
      armoorSiteImg3
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
  },
  {
    id: '7',
    title: 'Indalwai',
    location: 'Indalwai, Nizamabad',
    description: 'A completed residential project that blends traditional aesthetics with modern amenities, creating an oasis of calm in the urban landscape.',
    status: 'completed',
    thumbnailUrl: indalwaiThumb,
    images: [
      indalwaiImg1,
      indalwaiImg2,
      indalwaiImg3
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
  },
  {
    id: '8',
    title: 'Attapur site',
    location: 'Attapur, Hyderabad',
    description: 'A completed residential project that blends traditional aesthetics with modern amenities, creating an oasis of calm in the urban landscape.',
    status: 'completed',
    thumbnailUrl: attapurSiteThumb,
    images: [
      attapurSiteImg1,
      attapurSiteImg2,
      attapurSiteImg3
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

// Rest of your context provider code remains the same...
export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);
  const [currentFilter, setCurrentFilter] = useState<ProjectStatus | 'all'>('all');

  const filterProjectsByStatus = (status: ProjectStatus | 'all') => {
    setCurrentFilter(status);
    setFilteredProjects(
      status === 'all' ? projects : projects.filter(p => p.status === status)
    );
  };

  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
  };

  const updateProjectStatus = (id: string, newStatus: ProjectStatus) => {
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...project, status: newStatus } : project
    );
    setProjects(updatedProjects);
    setFilteredProjects(
      currentFilter === 'all'
        ? updatedProjects
        : updatedProjects.filter(p => p.status === currentFilter)
    );
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        filteredProjects,
        filterProjectsByStatus,
        getProjectById,
        updateProjectStatus,
        currentFilter
      }}
    >
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