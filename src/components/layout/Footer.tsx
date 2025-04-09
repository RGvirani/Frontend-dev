
import { Link } from "react-router-dom";
import { Gamepad2, Mail, GitHub, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <GitHub className="h-5 w-5" />
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
            <h3 className="font-semibold text-sm mb-3">Platform</h3>
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
                <Link to="/checklists" className="text-muted-foreground hover:text-foreground">
                  Accessibility Checklists
                </Link>
              </li>
              <li>
                <Link to="/evaluate" className="text-muted-foreground hover:text-foreground">
                  Evaluation Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/guidelines" className="text-muted-foreground hover:text-foreground">
                  Accessibility Guidelines
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-muted-foreground hover:text-foreground">
                  Research Methods
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Game AE. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/cookies" className="text-xs text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
