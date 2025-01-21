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
