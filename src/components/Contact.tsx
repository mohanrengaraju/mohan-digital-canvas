
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('mailto:mohanrengaraju2451@gmail.com', '_blank')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://www.linkedin.com/in/mohan-r-1646a9314/', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
