// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import type { FC } from 'react';
import type { Project } from '../types/project';
import { ExternalLink, Code, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  activeCategory: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, activeCategory }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const isBackend = activeCategory === "Backend";
  const isMobile = activeCategory === "Mobile";
  const isFullStack = activeCategory === "Full-Stack";

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      {project.image && (
        <div className="relative overflow-hidden h-48">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 flex items-end p-6`}>
            <motion.a
              href={`/projects/${project.id}`}
              onClick={handleViewDetails}
              className="inline-flex items-center text-white bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isBackend ? (
                <>
                  <Code className="mr-2 h-4 w-4" />
                  View API Specs
                </>
              ) : isMobile ? (
                <>
                  <Smartphone className="mr-2 h-4 w-4" />
                  View Mobile Demo
                </>
              ) : (
                <>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View {isFullStack ? "Full App" : "Details"}
                </>
              )}
            </motion.a>
          </div>
        </div>
      )}
      {/* Rest of your card content remains exactly the same */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
          {project.title}
          {activeCategory !== "All" && (
            <span className="ml-2 text-sm font-normal text-primary-500">
              ({activeCategory})
            </span>
          )}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-4 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <motion.span 
              key={tag}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1 text-sm rounded-full ${
                (isBackend && ["Node.js", "Firebase", "Express", "API"].includes(tag))
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;