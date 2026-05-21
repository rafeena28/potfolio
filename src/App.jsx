import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // 1. ഇത് ഇവിടെ ആഡ് ചെയ്യുക

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-blue-500/30">
      {/* NAVBAR */}
      <Navbar />

      {/* SECTIONS */}
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>

      {/* FOOTER */}
      <Footer /> {/* 2. ഇത് ഇവിടെയും ആഡ് ചെയ്യുക */}
    </div>
  );
}

export default App;