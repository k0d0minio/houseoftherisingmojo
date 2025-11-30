import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates about upcoming events and offerings.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Stay connected with the Mojo community
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Get updates on upcoming events, community gatherings, and special offerings.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-background text-foreground"
          />
          <Button type="submit" size="lg">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
