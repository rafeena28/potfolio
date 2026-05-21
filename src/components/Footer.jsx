import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900/60 pt-16 pb-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        
        {/* 3 SECTION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-900/40">
          
          {/* SECTION 1: LEFT SIDE (NAME & DESCRIPTION) */}
          <div className="space-y-4">
            <h3 className="text-lg font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              RAFEENA.S
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A passionate UI/UX Designer and Frontend Developer dedicated to creating visually stunning, user-friendly digital experiences. Constantly learning and building modern web solutions that merge creativity with code.
            </p>
          </div>

          {/* SECTION 2: MIDDLE (NAVIGATION LINKS) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h3>
            <div className="flex flex-col space-y-2.5">
              <a href="#home" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 w-fit">
                Home
              </a>
              <a href="#about" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 w-fit">
                About
              </a>
              <a href="#education" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 w-fit">
                Education
              </a>
              <a href="#contact" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 w-fit">
                Contact
              </a>
            </div>
          </div>

          {/* SECTION 3: RIGHT SIDE (CONTACT & SOCIAL SYMBOLS) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              Contact
            </h3>
            <p className="text-sm text-slate-400">Let's connect and build something awesome together!</p>
            
            {/* SOCIAL ICONS ROW */}
            <div className="flex items-center gap-3 pt-1">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                title="LinkedIn"
              >
                💼
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-1 transition-all duration-300"
                title="GitHub"
              >
                💻
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/30 hover:-translate-y-1 transition-all duration-300"
                title="Instagram"
              >
                📸
              </a>

              {/* Email */}
              <a 
                href="mailto:your-email@gmail.com" 
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300"
                title="Email"
              >
                ✉️
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 text-center">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} Rafeena.S. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;