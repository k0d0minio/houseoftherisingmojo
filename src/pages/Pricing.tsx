import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Private Room / Caravan",
      prices: [
        { duration: "per night", price: "€50" },
        { duration: "per week", price: "€250" },
        { duration: "2 weeks", price: "€400" },
        { duration: "3 weeks", price: "€500" },
        { duration: "per month (summer)", price: "€600" },
        { duration: "per month (winter)", price: "€500" }
      ],
      twoPersonPrice: "€70/night for 2 people",
      features: [
        "Access to all communal spaces",
        "Shared kitchen facilities",
        "Community atmosphere",
        "Beautiful natural surroundings"
      ]
    },
    {
      name: "Wooden Cabin",
      popular: true,
      prices: [
        { duration: "per night", price: "€75" },
        { duration: "per week", price: "€300" },
        { duration: "2 weeks", price: "€450" },
        { duration: "3 weeks", price: "€550" },
        { duration: "per month (summer)", price: "€700" },
        { duration: "per month (winter)", price: "€600" }
      ],
      twoPersonPrice: "€95/night for 2 people",
      features: [
        "Self-contained space",
        "More privacy",
        "Access to communal areas",
        "Charming rustic setting"
      ]
    },
    {
      name: "Bell Tent",
      prices: [
        { duration: "per night", price: "€40" },
        { duration: "per week", price: "€200" },
        { duration: "2 weeks", price: "€350" },
        { duration: "3 weeks", price: "€450" },
        { duration: "per month (summer only)", price: "€550" }
      ],
      twoPersonPrice: "€60/night for 2 people",
      note: "Available until November",
      features: [
        "Glamping experience",
        "Close to nature",
        "Authentic outdoor living",
        "Summer season only"
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included with my stay?",
      answer: "All stays include access to communal spaces, shared kitchen facilities, living room with fireplace, yoga platform, dome, fire pit, and beautiful natural surroundings. You'll be part of our vibrant community atmosphere."
    },
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in is flexible, typically after 2 PM, and check-out is before 12 PM. We're happy to accommodate your schedule when possible - just let us know in advance."
    },
    {
      question: "Do you provide linens and towels?",
      answer: "Yes, we provide basic linens. We recommend bringing your own towels, though we can provide them if needed."
    },
    {
      question: "What about food and meals?",
      answer: "We have a semi-outdoor kitchen where you can prepare your own meals. We also have shared community meals regularly - you'll be invited to join and contribute if you'd like."
    },
    {
      question: "How do I get to the Mojo?",
      answer: "We're located in Santo Isidoro, about 8 minutes from Ericeira by car. It's a 5-minute drive to the ocean or a beautiful 30-minute walk through the countryside. We can provide detailed directions once you book."
    },
    {
      question: "What should I know about the space?",
      answer: "The Mojo is intentionally rustic and simple. We have one warm shower to share, one shared indoor toilet, and two eco-friendly compost toilets. There's no WiFi (by choice, though phone data works well), and we maintain a drug and alcohol-free environment. It can get humid when it rains, so pack cozy layers and an open mindset. Minimum stay: 3 nights in summer or 1 month in winter."
    }
  ];

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

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
            Accommodation options for every stay
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose from rustic private rooms, a charming wooden cabin, or cozy bell tents. Pricing varies by season and length of stay. Minimum stay: 3 nights (summer) or 1 month (winter).
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20" ref={cardsRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: tier.popular ? 1.05 : 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className={`relative ${tier.popular ? 'border-primary shadow-xl' : ''}`}
                >
                  {tier.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium"
                      initial={{ scale: 0 }}
                      animate={cardsInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      Popular Choice
                    </motion.div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {tier.twoPersonPrice}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Pricing */}
                    <div className="space-y-2">
                      {tier.prices.map((price, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{price.duration}</span>
                          <span className="font-semibold text-foreground">{price.price}</span>
                        </div>
                      ))}
                    </div>

                    {tier.note && (
                      <p className="text-sm text-primary font-medium">{tier.note}</p>
                    )}

                    {/* Features */}
                    <ul className="space-y-3 border-t border-border pt-4">
                      {tier.features.map((feature, idx) => (
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
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <NavLink to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg">
                  Book your stay
                </Button>
              </motion.div>
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30" ref={faqRef}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-serif text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Pricing;
