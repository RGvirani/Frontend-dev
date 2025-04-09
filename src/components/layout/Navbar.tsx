
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Gamepad2, Menu, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-game-blue-600" />
            <span className="text-xl font-bold text-game-blue-700">Game AE</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-game-blue-600">
            Dashboard
          </Link>
          <Link to="/games" className="text-sm font-medium hover:text-game-blue-600">
            Games
          </Link>
          <Link to="/checklists" className="text-sm font-medium hover:text-game-blue-600">
            Checklists
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-game-blue-600">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          
          <Button size="sm" className="hidden md:flex">
            Get Started
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="container pb-4 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-2 mt-2">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-muted">
              Dashboard
            </Link>
            <Link to="/games" className="px-3 py-2 rounded-md hover:bg-muted">
              Games
            </Link>
            <Link to="/checklists" className="px-3 py-2 rounded-md hover:bg-muted">
              Checklists
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-muted">
              About
            </Link>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" size="sm" className="flex-1">
                Sign In
              </Button>
              <Button size="sm" className="flex-1">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
