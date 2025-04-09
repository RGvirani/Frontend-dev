
import { Link } from "react-router-dom";
import { Gamepad2, Mail, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-game-blue-600" />
              <span className="text-xl font-bold text-game-blue-700">Game AE</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Making games accessible for everyone through expert evaluation, guidelines, and tools.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-muted-foreground hover:text-foreground">
                  Game Database
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Email: contact@gameae.com
              </li>
              <li className="text-muted-foreground">
                Phone: +1 (123) 456-7890
              </li>
              <li className="text-muted-foreground">
                Address: 123 Game Street, San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Game AE. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
