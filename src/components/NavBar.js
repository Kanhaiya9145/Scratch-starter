// src/Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-2xl font-bold">Scratch Clone</span>
        </div>
        <div className="flex items-center">
          <a href="https://github.com/Kanhaiya9145" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
