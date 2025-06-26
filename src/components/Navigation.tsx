
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mohan R
          </div>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600 font-medium' : 'text-gray-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://github.com/mohanrengaraju', '_blank')}
              className="hover:bg-gray-50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://www.linkedin.com/in/mohan-r-1646a9314/', '_blank')}
              className="hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
