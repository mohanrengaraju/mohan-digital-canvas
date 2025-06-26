
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/mohanrengaraju'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/mohanrengaraju'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for displaying complex data with charts and analytics.',
      technologies: ['React', 'D3.js', 'PostgreSQL', 'Express'],
      githubUrl: 'https://github.com/mohanrengaraju'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg group">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-gray-50 transition-colors group"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
