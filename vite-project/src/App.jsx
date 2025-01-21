import React, { useState } from 'react';
import { Github, Linkedin, Mail, MenuIcon, X } from 'lucide-react';
import './App.css';

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
        "Frontend: React, JavaScript, HTML, CSS",
        "Backend: Node.js",
        "Database: PostgreSQL",
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Professional-README-Generator",
          description: "Generate a README file by using a command-line application.",
          tech: ["JavaScript"]
        },
        {
          title: "Vehicle-Builder",
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
    <div id="root">
      {/* Navigation */}
      <nav className="card fade-in">
        <div className="container">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Nolan Marshke</span>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 fade-in">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <a key={item} href={`#${item}`} className="block py-2">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container fade-in">
        <h1>Software Developer</h1>
        <p className="text-xl mb-8">Building digital experiences that make a difference</p>
        <img
          src="/api/placeholder/150/150"
          alt="Profile"
          className="hero-image rounded-full"
        />
      </div>

      {/* Main Content */}
      <main className="container">
        {/* About Section */}
        <section id="about" className="card fade-in">
          <h2>{sections.about.title}</h2>
          <p>{sections.about.content}</p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="card fade-in">
          <h2>{sections.skills.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.skills.items.map((skill, index) => (
              <div key={index} className="skill-item p-6">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="card fade-in">
          <h2>{sections.projects.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.projects.items.map((project, index) => (
              <div key={index} className="project-card p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag px-3 py-1 rounded-full text-sm"
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
        <section id="contact" className="card fade-in">
          <h2>Contact</h2>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="https://github.com/Nolan-Marshke" className="contact-icon">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="contact-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nmarshke@gmail.com" className="contact-icon">
              <Mail size={24} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-secondary fade-in">
        <p>© 2025 Nolan Marshke. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;