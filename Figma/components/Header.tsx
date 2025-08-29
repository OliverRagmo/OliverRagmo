import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DoodleUnderline } from './DoodleElements';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
            <button
              onClick={() => scrollToSection('hero')}
              className="relative inline-block hover:scale-105 transition-transform duration-200"
            >
              <span className="text-xl font-semibold">Oliver Rågmo</span>
              <DoodleUnderline className="h-2 text-red-accent opacity-60" color="var(--red-accent)" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="relative group hover:text-red-accent transition-colors duration-200"
            >
              About
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="relative group hover:text-red-accent transition-colors duration-200"
            >
              Work
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative group hover:text-red-accent transition-colors duration-200"
            >
              Contact
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 px-3 hover:bg-accent rounded-lg hover:text-red-accent transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-left py-2 px-3 hover:bg-accent rounded-lg hover:text-red-accent transition-colors duration-200"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 px-3 hover:bg-accent rounded-lg hover:text-red-accent transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}