import React from "react";

function About() {
  return (
    <section id="about" className="bg-slate-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-slate-800/80 shadow-2xl transition-all duration-500 hover:border-slate-700/80">
      
      <div className="flex items-center gap-4 mb-8 group">
        <div className="h-10 w-2 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          About Me
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        
        {/* Info Highlights */}
        <div className="md:col-span-1 bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Location
            </span>
            <p className="text-base font-bold text-slate-200 flex items-center gap-2">📍 Balaramapuram, TVM</p>
          </div>
          
          <div className="space-y-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Current Status
            </span>
            <p className="text-base font-bold text-slate-200 leading-snug">🎓 Student at GWPTC Kaimanam</p>
          </div>
        </div>

        {/* Bio Text */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-5">
          <p className="text-slate-300 leading-relaxed text-lg font-medium">
            I am <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Rafeena.S</span>, a dedicated Computer Engineering diploma student with a strong passion for technology and software development.
          </p>
          <p className="text-slate-400 leading-relaxed text-base md:text-lg">
            My core focus is on learning modern programming frameworks, web development tools, and database systems. Driven by curiosity, my ultimate goal is to evolve into a <span className="text-blue-400 font-bold underline decoration-indigo-500 decoration-2 underline-offset-4">Software Engineer</span> capable of creating impactful, efficient, and user-centric digital products.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;