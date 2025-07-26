// src/sections/Home.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Linkedin,
  Mail,
  Download,
  Github,
  Code,
  Cpu,
} from "lucide-react";
import { useRef } from "react";
import { smoothScrollTo } from "../utils/smoothScroll";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      {/* Enhanced background elements */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 overflow-hidden -z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-secondary-400/20 to-secondary-600/20 blur-3xl animate-float-delay"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary-300/10 to-primary-500/10 blur-3xl animate-float-slow"></div>
      </motion.div>

      {/* Floating tech bubbles */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {["Flutter", "Angular", "Node", "Firebase", "Python"].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-xs font-medium px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm"
            initial={{
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
            >
              <span className="w-2 h-2 mr-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block text-gray-700 dark:text-gray-300">
                Hello, I'm
              </span>
              <span className="text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  TEJAS
                </span>{" "}
                TARTE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
            >
              I build exceptional digital experiences with Flutter, Angular, and
              modern web technologies. Passionate about creating scalable and
              efficient applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => smoothScrollTo('projects')}
  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all"
>
  <span>View Projects</span>
  <ArrowDown size={18} className="opacity-80" />
</motion.button>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-primary-500/30 hover:border-primary-500/50 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
              >
                <span>My Resume</span>
                <Download size={18} className="opacity-80" />
              </motion.a>
            </motion.div>

            {/* Enhanced social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Let's connect:
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://linkedin.com/in/tejas-tarte-8b5697257",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Mail size={20} />,
                    href: "mailto:tejasvitthaltarte@gmail.com",
                    label: "Email",
                  },
                  {
                    icon: <Github size={20} />,
                    href: "https://github.com/yourusername",
                    label: "GitHub",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <div className="relative w-[416px] h-[416px] md:w-[448px] md:h-[448px]">
              {/* Code Editor Mockup - Larger */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
                {/* Editor Header */}
                <div className="flex items-center px-6 py-4 bg-gray-900/80 border-b border-gray-700/50">
                  <div className="flex space-x-3">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400 mx-auto">index.tsx</div>
                </div>

                {/* Code Content - Larger */}
                <div className="p-6 font-mono text-base">
                  {" "}
                  {/* Increased padding and font size */}
                  <div className="text-gray-400 mb-4">
                    // My Developer Profile
                  </div>
                  <div className="text-primary-400 mb-3">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-gray-300">developer</span> = {"{"}
                  </div>
                  <div className="ml-6 text-gray-300 space-y-2">
                    <div>
                      <span className="text-amber-300">name:</span>{" "}
                      <span className="text-emerald-400">'Tejas Tarte'</span>,
                    </div>
                    <div>
                      <span className="text-amber-300">role:</span>{" "}
                      <span className="text-emerald-400">
                        'Full-Stack Developer'
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-amber-300">skills:</span> [
                    </div>
                    <div className="ml-6 text-emerald-400">
                      'Flutter', 'Angular', 'Node.js',
                    </div>
                    <div className="ml-6 text-emerald-400">
                      'Firebase', 'Python', 'React'
                    </div>
                    <div className="text-gray-300">],</div>
                    {/* <div><span className="text-amber-300">experience:</span> <span className="text-blue-400">5+ years</span></div> */}
                  </div>
                  <div className="text-primary-400">{"}"}</div>
                </div>

                {/* Floating Code Elements - Scaled up */}
                <motion.div
                  className="absolute top-2/4 left-1/4 text-sm bg-gray-800/90 px-3 py-1.5 rounded"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                  }}
                >
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">buildProject</span>()
                </motion.div>
              </div>

              {/* Floating Tech Icons - Scaled up */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 rounded-lg bg-gray-800/80 backdrop-blur-md flex items-center justify-center shadow-xl border border-gray-700/30"
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              >
                <Code size={28} className="text-blue-400" />
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 w-18 h-18 rounded-full bg-gray-800/80 backdrop-blur-md flex items-center justify-center shadow-xl border border-gray-700/30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 2,
                }}
              >
                <Cpu size={28} className="text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
