import React from "react";

function Skills() {
  const technicalSkills = [
    { name: "HTML5", icon: "🌐" }, { name: "CSS3", icon: "🎨" }, { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" }, { name: "Tailwind CSS", icon: "🌊" }, { name: "Computer Hardware", icon: "⚙️" },
    { name: "C Programming", icon: "💻" }
  ];

  const professionalSkills = [
    { name: "UI / UX Design", icon: "✨" }, { name: "Problem Solving", icon: "🧩" },
    { name: "Teamwork", icon: "🤝" }, { name: "Effective Communication", icon: "🗣️" }, { name: "Time Management", icon: "⏰" }
  ];

  return (
    <section className="bg-slate-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-slate-800/80 shadow-2xl">
      
      <div className="flex items-center gap-4 mb-12">
        <div className="h-10 w-2 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Skills
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tech Skills */}
        <div className="bg-slate-900/70 p-6 md:p-8 rounded-2xl border border-slate-800/60 shadow-sm">
          <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-base border border-slate-700">💻</span> 
            Technical Core
          </h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="flex items-center gap-2 bg-slate-950 border border-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-sm font-semibold hover:border-blue-500 hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300 cursor-default group">
                <span className="text-base group-hover:scale-110 transition-transform">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="bg-slate-900/70 p-6 md:p-8 rounded-2xl border border-slate-800/60 shadow-sm">
          <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-base border border-slate-700">🎯</span> 
            Professional Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((skill, index) => (
              <span key={index} className="flex items-center gap-2 bg-slate-950 border border-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-sm font-semibold hover:border-indigo-500 hover:text-indigo-400 hover:-translate-y-0.5 transition-all duration-300 cursor-default group">
                <span className="text-base group-hover:scale-110 transition-transform">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;