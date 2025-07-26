import { motion } from "framer-motion";
import { Code, School, Briefcase, Award, Database, Sparkles, User, Smartphone, Languages, Cpu } from "lucide-react";

const About = () => {
  const personalInfo = [
    { label: "Location", value: "Chh. Sambhajinagar, India", icon: <Sparkles className="text-primary-500" /> },
    { label: "Education", value: "B.Tech in E&CE (2022-2026)", icon: <School className="text-primary-500" /> },
    { label: "Experience", value: "Full-Stack Developer @SculptorTech", icon: <Briefcase className="text-primary-500" /> }
  ];

  const skills = [
    { 
      category: "Languages & Core", 
      icon: <Languages className="text-primary-500" />,
      items: ["Java", "Python", "C", "Dart", "JavaScript"],
      color: "bg-blue-100/80 dark:bg-blue-900/30"
    },
    { 
      category: "Mobile & Frontend", 
      icon: <Smartphone className="text-primary-500" />,
      items: ["Flutter", "Angular", "HTML/CSS", "Firebase"],
      color: "bg-purple-100/80 dark:bg-purple-900/30"
    },
    { 
      category: "Backend & Systems", 
      icon: <Cpu className="text-primary-500" />,
      items: ["Node.js", "REST APIs", "MySQL", "Git/GitHub"],
      color: "bg-emerald-100/80 dark:bg-emerald-900/30"
    }
  ];

  const educationDetails = [
    {
      degree: "B.Tech in Electronics & Computer Engineering",
      institution: "CSMSS Chh. Shahu College of Engineering",
      duration: "2022 – 2026",
      details: "CGPA: 7.1 (till 5th Sem) | Combining software development with electronics hardware knowledge"
    },
     {
      degree: "HSC (12th Grade)",
      duration: "2020 – 2022",
      details: "Score: 80.67% | Maharashtra State Board"
    },
    {
      degree: "SSC (10th Grade)",
      duration: "2020",
      details: "Score: 91.20% | Maharashtra State Board"
    }
  ];

  const experienceDetails = {
    position: "Full-Stack Developer Intern",
    company: "SculptorTech (Remote – Pune based)",
    duration: "Feb 2024 – Present",
    responsibilities: [
      "Developing features for web and mobile apps using Flutter, Angular, and REST APIs",
      "Implementing database solutions with MySQL and backend integration",
      "Collaborating on full-stack development tasks with Node.js",
      "Working on cross-platform app development and responsive web interfaces"
    ]
  };

  const certifications = [
    { name: "NPTEL Certifications", details: "Python, Java & C Programming" },
    { name: "HackerRank Certifications", details: "REST API Integration & MySQL Database" },
    { name: "ECESA", details: "Event Manager (2024–25)" },
    { name: "Volunteer Experience", details: "Cultural & Sports Events Organization" }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20">
            <User className="mr-2 text-primary-500" size={18} />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Professional Profile
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Crafting <span className="text-primary-500">Digital Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A developer passionate about solving problems and building practical applications. 
            Focused on creating efficient solutions with Flutter, Angular, and Node.js while 
            continuously expanding my skills in full-stack development.
          </p>
        </motion.div>

        {/* Personal Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {personalInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-primary-500/10">
                {info.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</h3>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Showcase */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              My <span className="text-primary-500">Technical</span> Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive skill set developed through academic projects and professional experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl p-6 ${skill.color} border border-gray-200/50 dark:border-gray-700/30`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-gray-800/80">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {skill.category}
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center px-3 py-2 bg-white/80 dark:bg-gray-800/80 rounded-lg"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="text-primary-500">Education</span> Background
            </h3>
            
            <div className="relative pl-14">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20"></div>
              
              <div className="space-y-8">
                {educationDetails.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-10 group"
                  >
                    <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500/10 border-2 border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
                      <School className="text-primary-500" size={18} />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400">
                          {edu.duration}
                        </span>
                       </div>
                  {edu.institution && (
                    <p className="text-primary-500 font-medium text-sm mb-2">{edu.institution}</p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.details}</p>
                </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Professional <span className="text-primary-500">Experience</span>
            </h3>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">{experienceDetails.position}</h4>
                  <p className="text-primary-500 font-medium">{experienceDetails.company}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  {experienceDetails.duration}
                </span>
              </div>
              
              <ul className="space-y-3">
                {experienceDetails.responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Certifications & Activities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="text-primary-500">Certifications</span> & Activities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary-500/10">
                    <Award className="text-primary-500" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;