
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, TypeScript, HTML5, CSS3' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, Responsive Design' },
    { name: 'Database Management', icon: Database, description: 'SQL, MongoDB, PostgreSQL' },
    { name: 'Web Technologies', icon: Globe, description: 'Node.js, REST APIs, GraphQL' }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {skill.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
