import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "@/components/NavLink";
import { Instagram } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-foreground text-background py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl font-bold mb-4">House of the Rising Mojo</h3>
            <p className="text-sm opacity-80 mb-4">
              A sanctuary for connection, healing & growth. Located in Santo Isidoro, Portugal.
            </p>
            <motion.a 
              href="https://instagram.com/houseoftherisingmojo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Instagram className="w-5 h-5" />
              @houseoftherisingmojo
            </motion.a>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/pricing" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Accommodations
                </NavLink>
              </li>
              <li>
                <a 
                  href="https://www.tickettailor.com/events/houseoftherisingmojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Events
                </a>
              </li>
              <li>
                <NavLink to="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>
                <a href="mailto:houseoftherisingmojo@gmail.com" className="hover:text-primary transition-colors">
                  houseoftherisingmojo@gmail.com
                </a>
              </p>
              <p>Calçada do Cravo 1</p>
              <p>2640-086 Santo Isidoro</p>
              <p>Portugal</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          className="border-t border-background/20 pt-8 text-center text-sm opacity-70"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} House of the Rising Mojo. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
