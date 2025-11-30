import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates about upcoming events and offerings.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Stay connected with the Mojo community
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get updates on upcoming events, community gatherings, and special offerings.
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="flex-1"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-background text-foreground"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;
