// src/sections/Projects.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Smartphone, Globe, Database, Cpu } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/project";

const Projects = () => {

  const countProjectsByTech = (tech: string) => {
  return projects.filter(project => 
    project.tags.includes(tech)
  ).length;
};
  // Enhanced projects data with proper categorization
const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      fullDescription: "Complete shopping platform with customer/admin interfaces, order management, payments, and real-time updates",
      categoryDetails: {
        "Full-Stack": {
          description: "Full solution with Flutter mobile app + Angular web dashboard + Node.js backend",
          highlights: [
            "Flutter mobile app for customers",
            "Angular admin dashboard",
            "Node.js API with MySQL"
          ]
        },
        "Backend": {
          description: "REST API with Node.js and MySQL database",
          highlights: [
            "Product inventory management",
            "Order processing system",
            "JWT authentication"
          ]
        }
      },
      tags: ["Flutter", "Angular", "Node.js", "MySQL", "REST API"],
      link: "#",
      image: "/ecommerce-project.jpg",
      categories: ["Full-Stack", "Backend"]
    },
    {
      id: "2",
      title: "Emergency Alert App",
      fullDescription: "Cross-platform emergency app with real-time alerts",
      categoryDetails: {
        "Mobile": {
          description: "Flutter mobile application with emergency features",
          highlights: [
            "Panic button with one-tap activation",
            "Real-time location sharing",
            "Emergency contact notifications"
          ]
        },
        "Backend": {
          description: "Firebase-powered backend services",
          highlights: [
            "Firebase Authentication",
            "Firestore real-time database",
            "Cloud Functions for alerts"
          ]
        }
      },
      tags: ["Flutter", "Firebase", "Google Maps API", "Firestore"],
      link: "#",
      image: "/emergency-app.jpg",
      categories: ["Mobile", "Backend"]
    },
    {
      id: "3",
      title: "Weather Forecast App",
      fullDescription: "Mobile weather application with real-time forecasts",
      categoryDetails: {
        "Mobile": {
          description: "Flutter weather application with OpenWeather API",
          highlights: [
            "Current weather conditions",
            "7-day forecast",
            "Location-based weather"
          ]
        }
      },
      tags: ["Flutter", "OpenWeather API", "Geolocation"],
      link: "#",
      image: "/weather-app.jpg",
      categories: ["Mobile"]
    }
  ];

  const categories = [
    { name: "All", icon: <Code className="w-5 h-5" /> },
    { name: "Mobile", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Web", icon: <Globe className="w-5 h-5" /> },
    { name: "Full-Stack", icon: <Cpu className="w-5 h-5" /> },
    { name: "Backend", icon: <Database className="w-5 h-5" /> }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  // Enhance project data with category-specific content
  const getProjectForCategory = (project: Project) => {
    if (activeCategory === "All" || !project.categoryDetails[activeCategory]) {
      return {
        ...project,
        description: project.fullDescription,
        highlights: []
      };
    }
    return {
      ...project,
      description: project.categoryDetails[activeCategory].description,
      highlights: project.categoryDetails[activeCategory].highlights
    };
  };


  return (
// Change the section className to:
<section id="projects" className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-secondary-400/20 to-secondary-600/20 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {activeCategory === "All" 
              ? "Each project represents unique challenges and solutions"
              : `Showing ${filteredProjects.length} ${activeCategory} project${filteredProjects.length !== 1 ? 's' : ''}`}
          </p>
        </motion.div>

        {/* Enhanced category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-2 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
                  activeCategory === category.name
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const enhancedProject = getProjectForCategory(project);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard 
                  project={enhancedProject} 
                  activeCategory={activeCategory}
                />
              </motion.div>
            );
          })}
        </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400">
              No {activeCategory.toLowerCase()} projects found
            </p>
          </motion.div>
        )}

        {/* Enhanced stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">{projects.length}</div>
              <div className="text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {countProjectsByTech("Node.js") + countProjectsByTech("Firebase")}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Backend Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {[...new Set(projects.flatMap(p => p.tags))].length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Technologies Used</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {countProjectsByTech("Flutter")}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Mobile Apps</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;