import { Home, Heart, Sparkles } from "lucide-react";
import communityImage from "@/assets/community-image.jpg";

const SolutionSection = () => {
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

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          A sanctuary for connection, healing & growth
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          The Mojo offers a different way - a space where you can slow down, reconnect, and experience authentic community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <solution.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 text-foreground">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <img 
            src={communityImage} 
            alt="Community gathering at House of the Rising Mojo"
            className="w-full h-auto"
          />
        </div>

        {/* What We Offer */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            What we offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Accommodations</h4>
              <p className="text-sm text-muted-foreground">Private rooms, wooden cabin, bell tents, and caravan</p>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Events & Retreats</h4>
              <p className="text-sm text-muted-foreground">Workshops, circles, ecstatic dance, yoga, concerts, and regenerative gatherings</p>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Community Living</h4>
              <p className="text-sm text-muted-foreground">Simple, heart-centered living close to nature</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
