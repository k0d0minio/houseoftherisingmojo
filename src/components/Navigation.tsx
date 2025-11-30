import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <motion.h1 
              className="font-serif text-2xl md:text-3xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              House of the Rising Mojo
            </motion.h1>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <NavLink
                to="/pricing"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Accommodations
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <a
                href="https://www.tickettailor.com/events/houseoftherisingmojo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Events
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <NavLink
                to="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="mt-4 pb-4 space-y-4">
                <motion.div variants={menuItemVariants}>
                  <NavLink
                    to="/pricing"
                    className="block text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accommodations
                  </NavLink>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <a
                    href="https://www.tickettailor.com/events/houseoftherisingmojo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Events
                  </a>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <NavLink
                    to="/contact"
                    className="block text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
