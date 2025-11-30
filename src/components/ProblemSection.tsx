import { FastForward, Users, Leaf } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: FastForward,
      title: "Modern life moves too fast",
      description: "We're disconnected from ourselves, nature, and authentic community. The constant rush leaves us feeling depleted and longing for something more."
    },
    {
      icon: Users,
      title: "Lack of authentic community spaces",
      description: "Most spaces feel either too commercial or too isolated. We crave genuine connection but struggle to find places that truly foster it."
    },
    {
      icon: Leaf,
      title: "Disconnection from nature",
      description: "We've lost touch with natural rhythms and the healing power of nature. Our souls yearn for spaces where we can slow down and reconnect."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          We need spaces that nourish the soul
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          In our fast-paced modern world, we've lost connection with what truly matters
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
