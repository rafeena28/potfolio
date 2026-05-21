import React from 'react';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/80 navbar-smooth">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo/Name */}
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
          My Portfolio
        </span>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;