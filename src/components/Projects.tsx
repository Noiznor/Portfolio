import React from 'react';
import { ExternalLink, Github, Shield, Network, PenTool as Tool, Search } from 'lucide-react';
import type { Project } from '../types/Project';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return <Shield className="h-5 w-5" />;
      case 'networking': return <Network className="h-5 w-5" />;
      case 'tools': return <Tool className="h-5 w-5" />;
      case 'research': return <Search className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'security': return 'text-green-400 border-green-500/30';
      case 'networking': return 'text-cyan-400 border-cyan-500/30';
      case 'tools': return 'text-yellow-400 border-yellow-500/30';
      case 'research': return 'text-purple-400 border-purple-500/30';
      default: return 'text-green-400 border-green-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            Security Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of cybersecurity tools, research projects, and security solutions 
            I've developed to enhance organizational security posture.
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-black/50 border border-gray-700 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-green-400/10 transform hover:-translate-y-2"
              onClick={() => onProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 flex items-center space-x-2 px-3 py-1 rounded-full bg-black/70 border ${getCategoryColor(project.category)}`}>
                  {getCategoryIcon(project.category)}
                  <span className="text-xs font-medium uppercase">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-600">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-green-400/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;