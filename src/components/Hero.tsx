
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from 'lucide-react';

interface HeroProps {
  onDownloadResume: () => void;
}

const Hero = ({ onDownloadResume }: HeroProps) => {
  return (
    <section id="home" className="pt-24 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through clean code, innovative solutions, and user-centered design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://www.linkedin.com/in/mohan-r-1646a9314/', '_blank')}
              className="px-8 py-3 rounded-full border-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
