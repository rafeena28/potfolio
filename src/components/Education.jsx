import React from "react";

function Education() {
  const educationData = [
    {
      title: "Diploma in Computer Engineering",
      institution: "Government Women's Polytechnic College, Kaimanam",
      duration: "2023 - Present",
      status: "Present",
      description: "Focusing on core computer science subjects including Data Structures, Operating Systems, Database Management, and Full-Stack Web Development principles."
    },
    {
      title: "Higher Secondary Education (Plus Two)",
      institution: "Your School Name, Balaramapuram",
      duration: "2021 - 2023",
      status: "Past",
      description: "Specialized in Science / Computer Science stream with a strong foundation in mathematics and analytical thinking."
    },
    {
      title: "Secondary School Leaving Certificate (SSLC)",
      institution: "Your School Name",
      duration: "Completed",
      status: "Past",
      description: "Completed general secondary education with excellent academic performance."
    }
  ];

  return (
    <section className="bg-slate-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-slate-800/80 shadow-2xl">
      
      <div className="flex items-center gap-4 mb-12">
        <div className="h-10 w-2 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Education
        </h2>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-8 pb-2">
        {educationData.map((edu, index) => (
          <div key={index} className="relative pl-8 md:pl-10 group">
            
            {/* Timeline Indicator */}
            <div className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-slate-950 shadow-md transition-all duration-500 group-hover:scale-125 ${
              edu.status === 'Present' 
                ? 'bg-blue-400 ring-4 ring-blue-500/20' 
                : 'bg-slate-700 group-hover:bg-blue-400'
            }`} />

            {/* Card */}
            <div className={`p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-0.5 ${
              edu.status === 'Present'
                ? 'bg-slate-900/90 border-blue-500/40 shadow-xl shadow-blue-500/5'
                : 'bg-slate-900/50 border-slate-800/60 hover:bg-slate-900/80 hover:border-slate-700'
            }`}>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className={`text-xl font-bold tracking-tight ${
                  edu.status === 'Present' ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-extrabold' : 'text-slate-200 group-hover:text-blue-400 transition-colors'
                }`}>
                  {edu.title}
                </h3>
                
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full w-fit border ${
                  edu.status === 'Present' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20 animate-pulse' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {edu.duration}
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-400 flex items-center gap-2 mb-4">
                🏛️ {edu.institution}
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;