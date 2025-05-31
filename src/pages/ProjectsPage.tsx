import ProjectsSection from '../components/ProjectsSection';
import { useEffect } from 'react';
import { useProjects } from '../context/ProjectsContext';
import { ProjectStatus } from '../context/ProjectsContext';

interface ProjectsPageProps {
  filter?: ProjectStatus | 'all' | null;
}

const ProjectsPage = ({ filter }: ProjectsPageProps) => {
  const { filterProjectsByStatus } = useProjects();

  useEffect(() => {
    if (filter && filter !== 'all') {
      filterProjectsByStatus(filter);
    } else {
      filterProjectsByStatus('all');
    }
  }, [filter, filterProjectsByStatus]);

  return (
    <div className="py-12">
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;