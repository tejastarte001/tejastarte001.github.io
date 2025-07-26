// src/components/Navbar.tsx
import { motion } from "framer-motion";
import { Menu, X, Cpu, Code, Globe, Smartphone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

const links = [
  {
    name: "Work", // instead of "Projects"
    href: "#projects",
    icon: <Code size={18} className="text-primary-500" />,
  },
  {
    name: "About Me",
    href: "#about",
    icon: <Cpu size={18} className="text-primary-500" />,
  },
  {
    name: "Let's Talk", // instead of "Contact"
    href: "#contact",
    icon: <Smartphone size={18} className="text-primary-500" />,
  },
];


  const handleSmoothScroll = (id: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id.replace("#", ""));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id.replace("#", ""));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate("/");
    // Scroll to top when going home
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200/30 dark:border-gray-800/30 shadow-sm"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.button
  onClick={handleHomeClick}
  whileHover={{ scale: 1.05 }}
  className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent flex items-center gap-2"
>
  <Globe size={18} className="text-primary-500 animate-spin-slow" />
  TEJAS TARTE
</motion.button>


          {/* Desktop Navigation - remains exactly the same */}
          <div className="hidden md:flex items-center">
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 gap-3 shadow-inner">

              {links.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleSmoothScroll(link.href)}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  {link.icon}
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button - remains exactly the same */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu - remains exactly the same */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 space-y-2"
          >
            {links.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleSmoothScroll(link.href)}
                whileHover={{ x: 5 }}
                className="block px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-3 w-full text-left"
              >
                {link.icon}
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
