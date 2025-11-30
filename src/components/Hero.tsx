import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-24 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-6"
          variants={itemVariants}
        >
          Welcome to the House of the Rising Mojo
        </motion.h1>
        <motion.p 
          className="font-serif text-xl md:text-2xl lg:text-3xl text-accent-foreground mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          A sanctuary for connection, healing & growth
        </motion.p>
        <motion.p 
          className="text-base md:text-lg text-accent/90 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Located in the heart of nature near Ericeira, Portugal, the Mojo is a soulful oasis for rest and inspiration. Whether you're here to unwind, co-create, or dive into a retreat, we welcome you into our home with open arms and grounded hearts.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <NavLink to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Book a Stay
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
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              View Events
            </Button>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {[
            { number: "150+", text: "Events hosted annually" },
            { number: "500+", text: "Guests welcomed yearly" },
            { number: "Year-round", text: "Community living" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border"
              variants={statsVariants}
              custom={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
