import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Heart, Sparkles } from "lucide-react";
import communityImage from "@/assets/community-image.jpg";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const offerRef = useRef(null);
  const offerInView = useInView(offerRef, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Home,
      title: "Rustic sanctuary",
      description: "A simple, earthy space close to nature where you can truly rest and reset. This is not a luxury stay - it's intentionally rustic, authentic, and grounded."
    },
    {
      icon: Heart,
      title: "Heart-centered community",
      description: "Experience authentic connection through shared meals, community living, and transformative events. Here, everyone is welcomed with open arms and grounded hearts."
    },
    {
      icon: Sparkles,
      title: "Transformative experiences",
      description: "Every retreat, workshop, and healing session is designed to support your personal growth and wellbeing. From ecstatic dance to circles, each experience invites transformation."
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
    <section className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-serif text-3xl md:text-5xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          A sanctuary for connection, healing & growth
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The Mojo offers a different way - a space where you can slow down, reconnect, and experience authentic community
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <solution.icon className="w-8 h-8 text-secondary" />
              </motion.div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 text-foreground">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl"
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={communityImage} 
            alt="Community gathering at House of the Rising Mojo"
            className="w-full h-auto"
          />
        </motion.div>

        {/* What We Offer */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto"
          ref={offerRef}
        >
          <motion.h3 
            className="font-serif text-2xl md:text-3xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={offerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            What we offer
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={offerInView ? "visible" : "hidden"}
          >
            {[
              { emoji: "🏡", title: "Accommodations", desc: "Private rooms, wooden cabin, bell tents, and caravan" },
              { emoji: "✨", title: "Events & Retreats", desc: "Workshops, circles, ecstatic dance, yoga, concerts, and regenerative gatherings" },
              { emoji: "🌿", title: "Community Living", desc: "Simple, heart-centered living close to nature" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-muted/30 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
