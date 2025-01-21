import React, { useState } from 'react';
import { Github, Linkedin, Mail, MenuIcon, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = {
    about: {
      title: "About Me",
      content: "Hi, I'm a software developer passionate about creating elegant solutions to complex problems. With experience in full-stack development, I specialize in React, Node.js,"
    },
    skills: {
      title: "Skills",
      items: [
        "Frontend: React, JavaScript, HTML, CSS,",
        "Backend: Node.js,",
        "Database:PostgreSQL",
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Professional-README-Generator",
          description: "Generate a README file by using a command-line application.",
          tech: ["JavaScript",]
        },
        {
          title: "Vehicle-Builder ",
          description: "Created a vehicle Builder by using command line",
          tech: ["TypeScript"]
        },
        {
          title: "Project-Snake",
          description: "callback to one of the earliest computer games: Snake. We sought to make an interface that the player could interact with in order to experience a timeless classic.",
          tech: ["JavaScript", "Canvas API", "Bulma"]
        }
      ]
    }
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">Nolan Marshke</span>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#about" className="block py-2 text-gray-600">About</a>
              <a href="#skills" className="block py-2 text-gray-600">Skills</a>
              <a href="#projects" className="block py-2 text-gray-600">Projects</a>
              <a href="#contact" className="block py-2 text-gray-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Software Developer</h1>
          <p className="text-xl text-gray-600 mb-8">Building digital experiences that make a difference</p>
          <img
            src="/api/placeholder/150/150"
            alt="Profile"
            className="rounded-full mx-auto mb-8"
          />
        </div>
      </div>

{/* Main Content */}
<main className="max-w-6xl mx-auto px-4 py-12">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">{sections.about.title}</h2>
          <p className="text-lg text-gray-600">{sections.about.content}</p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">{sections.skills.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.skills.items.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">{sections.projects.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.projects.items.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="mailto:email@example.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>
        </section>
      </main>
  

  {/* Footer */}
  <footer className="bg-white mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2025 Nolan Marshke. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};


export default Portfolio;