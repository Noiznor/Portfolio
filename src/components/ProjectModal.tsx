import React from 'react';
import { X, Github, ExternalLink, Shield, Network, PenTool as Tool, Search } from 'lucide-react';
import type { Project } from '../types/Project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return <Shield className="h-6 w-6" />;
      case 'networking': return <Network className="h-6 w-6" />;
      case 'tools': return <Tool className="h-6 w-6" />;
      case 'research': return <Search className="h-6 w-6" />;
      default: return <Shield className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'security': return 'text-green-400 bg-green-400/10 border-green-500/30';
      case 'networking': return 'text-cyan-400 bg-cyan-400/10 border-cyan-500/30';
      case 'tools': return 'text-yellow-400 bg-yellow-400/10 border-yellow-500/30';
      case 'research': return 'text-purple-400 bg-purple-400/10 border-purple-500/30';
      default: return 'text-green-400 bg-green-400/10 border-green-500/30';
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-black border border-green-500/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Header */}
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-700 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-full border ${getCategoryColor(project.category)}`}>
              {getCategoryIcon(project.category)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-400">{project.title}</h2>
              <p className="text-gray-400 uppercase text-sm font-medium">{project.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Images Gallery */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed text-lg">{project.fullDescription}</p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Technologies Used</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-green-500/50 transition-colors"
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-green-500/50 rounded-lg transition-all duration-200 text-gray-300 hover:text-green-400 font-medium"
            >
              <Github className="h-5 w-5" />
              <span>View Source Code</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 rounded-lg transition-all duration-200 text-white font-medium shadow-lg hover:shadow-green-400/25"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;