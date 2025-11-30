import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FastForward, Users, Leaf } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: FastForward,
      title: "Modern life moves too fast",
      description: "We're disconnected from ourselves, nature, and authentic community. The constant rush leaves us feeling depleted and longing for something more."
    },
    {
      icon: Users,
      title: "Lack of authentic community spaces",
      description: "Most spaces feel either too commercial or too isolated. We crave genuine connection but struggle to find places that truly foster it."
    },
    {
      icon: Leaf,
      title: "Disconnection from nature",
      description: "We've lost touch with natural rhythms and the healing power of nature. Our souls yearn for spaces where we can slow down and reconnect."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-serif text-3xl md:text-5xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          We need spaces that nourish the soul
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          In our fast-paced modern world, we've lost connection with what truly matters
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <problem.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
