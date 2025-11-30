import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingPreview = () => {
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

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Accommodation options
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Simple, rustic stays designed for connection and rest. Choose what feels right for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {options.map((option, index) => (
            <Card 
              key={index} 
              className={`relative ${option.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
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
          ))}
        </div>

        <div className="text-center">
          <NavLink to="/pricing">
            <Button size="lg" variant="outline">
              View all pricing & details
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
