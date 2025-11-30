import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Check } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Rustic & simple",
    "Close to nature",
    "Heart-centered community"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-20 md:py-32 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="font-serif text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Ready to experience the Mojo?
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book your stay or join one of our transformative events. We welcome you into our home with open arms and grounded hearts.
        </motion.p>

        {/* Key Points */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Check className="w-5 h-5" />
              <span className="font-medium">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <NavLink to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Book your stay
              </Button>
            </motion.div>
          </NavLink>
          <motion.a
            href="https://www.tickettailor.com/events/houseoftherisingmojo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Events
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
