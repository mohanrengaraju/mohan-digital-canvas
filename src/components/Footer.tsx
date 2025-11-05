import { Button } from "@/components/ui/button";
import { Download, LinkedinIcon, Github } from "lucide-react";

interface FooterProps {
  onDownloadResume: () => void;
}

const Footer = ({ onDownloadResume }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Mohan R
            </h3>
            <p className="text-gray-400">
              Full Stack Developer & Machine Learning Enthusiast
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              size="lg"
              onClick={onDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mohan-r-1646a9314/",
                  "_blank"
                )
              }
              className="border-white !text-white hover:!bg-white hover:!text-gray-900 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4 mr-2" />
              <span>Connect</span>
            </Button> */}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                window.open("https://github.com/mohanrengaraju", "_blank")
              }
              className="!text-white hover:!text-white hover:!bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              <span>GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mohan-r-1646a9314/",
                  "_blank"
                )
              }
              className="!text-white hover:!text-white hover:!bg-white/10 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              <span>LinkedIn</span>
            </Button>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © 2024 Mohan R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
