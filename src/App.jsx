import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Title from './components/Title';

function App() {
  return (
    <div className="w-full h-screen bg-black flex flex-col font-mono text-[13px] sm:text-sm md:text-base selection:bg-gray-700 overflow-hidden">
      <Title/>

      <div className="flex-grow overflow-y-auto text-gray-300 scroll-smooth">
        <Hero/>
        <About />
        <Skill/>
        <Project/>
        <Experience/>
        <Contact/>
      </div>

      {/* Fixed Status Bar */}
      <div className="bg-[#171b22] px-4 py-2 border-t border-[#30363d] flex justify-center text-[10px] sm:text-xs text-gray-500 tracking-wide shrink-0 z-10 text-center">
        <span className="hidden sm:inline">Type help for available commands <span className="mx-2">•</span> Use ↑/↓ arrows or scroll for content <span className="mx-2">•</span> Press Ctrl+C to interrupt</span>
        <span className="sm:hidden">Scroll for content <span className="mx-1">•</span> Type 'help' for commands</span>
      </div>
    </div>
  );
}

export default App;
