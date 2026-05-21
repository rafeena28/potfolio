 import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-slate-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-slate-800/80 shadow-2xl max-w-4xl mx-auto">
      
      <div className="flex flex-col items-center text-center mb-10 group">
        <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-base mt-2 max-w-md font-medium">
          Feel free to reach out for internship opportunities, projects, or just a professional chat!
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        
        {/* Left Side Link Cards */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <a href="mailto:rafeenarafi2004@gmail.com" className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">✉️</div>
            <div className="text-left">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-0.5">Email Me</p>
              <p className="text-sm font-extrabold text-slate-200 truncate max-w-[150px] sm:max-w-none">rafeena@example.com</p>
            </div>
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">💻</div>
            <div className="text-left">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-0.5">GitHub</p>
              <p className="text-sm font-extrabold text-slate-200">rafeena-github</p>
            </div>
          </a>
        </div>

        {/* Right Side Form */}
        <div className="md:col-span-3 bg-slate-900/70 border border-slate-800/80 p-6 md:p-8 rounded-2xl">
          <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
            <span>💬</span> Drop a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all" />
              <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all" />
            </div>
            <textarea rows="4" placeholder="Your Message..." required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"></textarea>
            
            <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/10 active:scale-95 transition-all duration-300">
              Send Message 🚀
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;