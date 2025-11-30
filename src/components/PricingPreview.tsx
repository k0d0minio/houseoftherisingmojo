import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const options = [
    {
      name: "Private Room / Caravan",
      price: "€50",
      period: "per night",
      features: [
        "Access to all communal spaces",
        "Shared kitchen facilities",
        "Community atmosphere",
        "Beautiful natural surroundings"
      ]
    },
    {
      name: "Wooden Cabin",
      price: "€75",
      period: "per night",
      popular: true,
      features: [
        "Self-contained space",
        "More privacy",
        "Access to communal areas",
        "Charming rustic setting"
      ]
    },
    {
      name: "Bell Tent",
      price: "€40",
      period: "per night",
      features: [
        "Glamping experience",
        "Close to nature",
        "Available until November",
        "Authentic outdoor living"
      ]
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

  const cardVariants = {
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
          Accommodation options
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Simple, rustic stays designed for connection and rest. Choose what feels right for you.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className={`relative ${option.popular ? 'border-primary shadow-lg' : ''}`}
              >
                {option.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    Popular
                  </motion.div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{option.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-foreground">{option.price}</span>
                    <span className="text-muted-foreground"> {option.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <NavLink to="/pricing">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline">
                View all pricing & details
              </Button>
            </motion.div>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
