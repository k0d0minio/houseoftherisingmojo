import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Check } from "lucide-react";

const CTASection = () => {
  const features = [
    "Rustic & simple",
    "Close to nature",
    "Heart-centered community"
  ];

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
          Ready to experience the Mojo?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Book your stay or join one of our transformative events. We welcome you into our home with open arms and grounded hearts.
        </p>

        {/* Key Points */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NavLink to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Book your stay
            </Button>
          </NavLink>
          <a
            href="https://www.tickettailor.com/events/houseoftherisingmojo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Events
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
