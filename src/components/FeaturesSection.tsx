import { Bed, Users, Calendar, Flower2, MapPin, Trees } from "lucide-react";
import yogaImage from "@/assets/yoga-image.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Bed,
      title: "Rustic accommodations",
      description: "Choose from private rooms, a charming wooden cabin, cozy bell tents, or our unique caravan. Each option offers simple, authentic comfort close to nature."
    },
    {
      icon: Users,
      title: "Community living",
      description: "Share meals, gather in communal spaces, and experience the vibrant atmosphere of heart-centered community living. Connection is at the heart of everything we do."
    },
    {
      icon: Calendar,
      title: "Events & retreats",
      description: "With 150+ events yearly, there's always something transformative happening - from workshops and circles to ecstatic dance, yoga, concerts, and regenerative gatherings."
    },
    {
      icon: Flower2,
      title: "Healing services",
      description: "Access holistic treatments including osteopathy, massotherapy, and other healing modalities designed to support your wellbeing and personal growth."
    },
    {
      icon: MapPin,
      title: "Prime location",
      description: "Located near the surf town of Ericeira, just a 5-minute drive to the ocean or a 30-minute scenic walk through beautiful Portuguese countryside."
    },
    {
      icon: Trees,
      title: "Natural facilities",
      description: "Enjoy our yoga platform, dome space, fire pit, living room with fireplace, and beautiful natural surroundings perfect for rest and reflection."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Everything you need for rest, connection & growth
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Simple facilities, authentic experiences, and natural beauty combine to create the perfect sanctuary
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <img 
            src={yogaImage} 
            alt="Yoga platform at House of the Rising Mojo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
