import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 animate-fade-in">
          Welcome to the House of the Rising Mojo
        </h1>
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-accent-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          A sanctuary for connection, healing & growth
        </p>
        <p className="text-base md:text-lg text-accent/90 mb-12 max-w-2xl mx-auto animate-fade-in">
          Located in the heart of nature near Ericeira, Portugal, the Mojo is a soulful oasis for rest and inspiration. Whether you're here to unwind, co-create, or dive into a retreat, we welcome you into our home with open arms and grounded hearts.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <NavLink to="/contact">
            <Button size="lg" className="text-lg px-8 py-6">
              Book a Stay
            </Button>
          </NavLink>
          <a
            href="https://www.tickettailor.com/events/houseoftherisingmojo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              View Events
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">150+</div>
            <div className="text-sm md:text-base text-muted-foreground">Events hosted annually</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">500+</div>
            <div className="text-sm md:text-base text-muted-foreground">Guests welcomed yearly</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">Year-round</div>
            <div className="text-sm md:text-base text-muted-foreground">Community living</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
