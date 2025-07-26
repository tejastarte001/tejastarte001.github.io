// src/components/ProjectDetails.tsx
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Code, Smartphone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Project } from "../types/project";
import type { FC } from "react";



const ProjectDetails: FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const project = state?.project as Project;
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  const isMobile = project.categories.includes("Mobile");
  const isBackend = project.categories.includes("Backend");
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen"
    >
      {/* Back button */}
      <div className="container mx-auto px-6">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -4 }}
          className="flex items-center text-primary-500 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </motion.button>
      </div>

      {/* Project header */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Project image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Project info */}
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-6"
            >
              {project.fullDescription}
            </motion.p>

            <div className="flex gap-4 mb-8">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-primary-500 text-white px-6 py-3 rounded-lg font-medium"
              >
                {isMobile ? (
                  <>
                    <Smartphone className="mr-2" size={18} />
                    Live Demo
                  </>
                ) : isBackend ? (
                  <>
                    <Code className="mr-2" size={18} />
                    API Documentation
                  </>
                ) : (
                  <>
                    <ExternalLink className="mr-2" size={18} />
                    Visit Project
                  </>
                )}
              </motion.a>
              
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg font-medium"
                >
                  <Github className="mr-2" size={18} />
                  View Code
                </motion.a>
              )}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project details sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.highlights?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges & Solutions */}
          {project.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 md:col-span-3"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Challenges & Solutions
              </h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      {challenge.problem}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;