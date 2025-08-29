import { useState, useEffect } from 'react';
import { seedDefaultProjects } from '../utils/projectSeeder';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string; // Made optional
  featured: boolean;
  order: number;
  createdAt: string;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    try {
      const stored = localStorage.getItem('portfolio-projects');
      if (stored) {
        const parsedProjects = JSON.parse(stored);
        setProjects(parsedProjects.sort((a: Project, b: Project) => a.order - b.order));
      } else {
        const defaultProjects = seedDefaultProjects();
        setProjects(defaultProjects);
        localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjects));
      }
    } catch (error) {
      console.error('Error loading projects:', error);
      const defaultProjects = seedDefaultProjects();
      setProjects(defaultProjects);
    } finally {
      setLoading(false);
    }
  };

  const saveProjects = (newProjects: Project[]) => {
    try {
      localStorage.setItem('portfolio-projects', JSON.stringify(newProjects));
      setProjects(newProjects.sort((a, b) => a.order - b.order));
    } catch (error) {
      console.error('Error saving projects:', error);
    }
  };

  const addProject = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    const updatedProjects = [...projects, newProject];
    saveProjects(updatedProjects);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...project, ...updates } : project
    );
    saveProjects(updatedProjects);
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    saveProjects(updatedProjects);
  };

  const reorderProjects = (projectIds: string[]) => {
    const reorderedProjects = projectIds.map((id, index) => {
      const project = projects.find(p => p.id === id);
      return project ? { ...project, order: index + 1 } : null;
    }).filter(Boolean) as Project[];
    
    saveProjects(reorderedProjects);
  };

  const getFeaturedProjects = () => {
    return projects.filter(project => project.featured);
  };

  return {
    projects,
    loading,
    addProject,
    updateProject,
    deleteProject,
    reorderProjects,
    getFeaturedProjects,
    refreshProjects: loadProjects
  };
}