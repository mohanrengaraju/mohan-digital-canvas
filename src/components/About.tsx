
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="text-xl mb-6">
              I'm a passionate full-stack developer with a keen eye for creating seamless digital experiences. 
              My journey in software development spans several years, during which I've honed my skills in 
              both frontend and backend technologies.
            </p>
            <p className="text-lg mb-6">
              I specialize in building scalable web applications using modern frameworks and technologies. 
              My approach combines technical excellence with user-centered design principles, ensuring that 
              every project not only functions flawlessly but also provides an exceptional user experience.
            </p>
            <p className="text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in continuous learning 
              and staying updated with the ever-evolving landscape of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
