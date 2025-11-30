import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/30" ref={heroRef}>
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Get in touch with the Mojo family
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about staying with us or hosting an event? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your inquiry..."
                        rows={6}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button type="submit" size="lg" className="w-full">
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-6"
              ref={infoRef}
              initial={{ opacity: 0, x: 30 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: (
                    <a 
                      href="mailto:houseoftherisingmojo@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      houseoftherisingmojo@gmail.com
                    </a>
                  ),
                  bgColor: "bg-primary/10",
                  iconColor: "text-primary"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: (
                    <p className="text-muted-foreground">
                      Calçada do Cravo 1<br />
                      2640-086 Santo Isidoro<br />
                      Portugal<br />
                      <span className="text-sm mt-2 block">8 minutes from Ericeira by car</span>
                    </p>
                  ),
                  bgColor: "bg-secondary/10",
                  iconColor: "text-secondary"
                },
                {
                  icon: Instagram,
                  title: "Social Media",
                  content: (
                    <a 
                      href="https://instagram.com/houseoftherisingmojo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @houseoftherisingmojo
                    </a>
                  ),
                  bgColor: "bg-accent/20",
                  iconColor: "text-accent-foreground"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={infoInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                        </motion.div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                          {item.content}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Contact;
