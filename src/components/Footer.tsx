import { NavLink } from "@/components/NavLink";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">House of the Rising Mojo</h3>
            <p className="text-sm opacity-80 mb-4">
              A sanctuary for connection, healing & growth. Located in Santo Isidoro, Portugal.
            </p>
            <a 
              href="https://instagram.com/houseoftherisingmojo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @houseoftherisingmojo
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/pricing" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Accommodations
                </NavLink>
              </li>
              <li>
                <a 
                  href="https://www.tickettailor.com/events/houseoftherisingmojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Events
                </a>
              </li>
              <li>
                <NavLink to="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>
                <a href="mailto:houseoftherisingmojo@gmail.com" className="hover:text-primary transition-colors">
                  houseoftherisingmojo@gmail.com
                </a>
              </p>
              <p>Calçada do Cravo 1</p>
              <p>2640-086 Santo Isidoro</p>
              <p>Portugal</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} House of the Rising Mojo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
