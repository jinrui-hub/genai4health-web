import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-[30%] left-[20%] w-64 h-64 bg-slate-50 rounded-full blur-2xl opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
          Advancing Healthcare through <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Generative AI
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
           Our mission is to bring together people from industry, academia, and healthcare to collaborate on building responsible and impactful AI solutions that improve health for individuals and communities worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection('schedule')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 text-white font-medium text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Explore Events
            <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center"
          >
            About Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;