import React from "react";

function Home() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-6 lg:px-16 pt-24 pb-12">
      
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* Main Container: Flexbox handles Left & Right Layout */}
      <div className="max-w-6xl w-full z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* LEFT SIDE: LARGE PROFILE IMAGE WITH MODERN SQUARE-ROUND SHAPE */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* ബാക്ക്ഗ്രൗണ്ടിൽ തിളങ്ങുന്ന മോഡേൺ ഗ്ലോ എഫക്റ്റ് */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* നിങ്ങളുടെ ഫോട്ടോ - അല്പം ചരിഞ്ഞ മോഡേൺ ഷേപ്പിൽ */}
            <img 
              src="/profile.jpg" 
              alt="Rafeena" 
              className="relative w-full h-full object-cover rounded-[2rem] border-2 border-slate-800 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Rafeena";
              }}
            />

            {/* അലങ്കാരത്തിന് വേണ്ടി ഒരു ചെറിയ ഫ്ലോട്ടിങ് ബാഡ്ജ് */}
            <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-bold text-slate-300 shadow-xl hidden sm:block">
              💻 Code & Design
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: TEXT DETAILS (LARGE & POWERFUL) */}
        <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-1.5 rounded-full text-blue-400 font-bold text-xs uppercase tracking-wider shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>🚀 Open for Opportunities</span>
          </div>

          {/* Title / Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-white">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 block mt-1">
              Rafeena.S
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-300 tracking-wide">
            UI/UX Designer & <span className="text-blue-400">Frontend Developer</span>
          </h2>

          {/* Info Badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            <span className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold text-slate-300 shadow-sm flex items-center gap-1.5">
              <span>📍</span> Balaramapuram, TVM
            </span>
            <span className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 px-4 py-2 rounded-2xl text-sm font-semibold text-slate-300 shadow-sm flex items-center gap-1.5">
              <span>🎓</span> Computer Engineering Student
            </span>
          </div>

          {/* Intro Text (ഇപ്പോൾ പൂർണ്ണമായും ഇംഗ്ലീഷിലാണ്) */}
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
            I love designing beautiful websites and apps, and bringing them to life through code. I am always passionate about learning new technologies and building impactful digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center"
            >
              Contact Me ✉
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-slate-300 font-bold rounded-xl border border-slate-800 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center"
            >
              About Me 🔍
            </a>
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default Home;