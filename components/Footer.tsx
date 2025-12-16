import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 text-center border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="mb-6 font-bold text-2xl text-white tracking-tight">GenAI4Health</div>
        <p className="text-slate-500 text-sm mb-8 max-w-md">
          A joint initiative by Stanford University and UT Austin to advance the intersection of AI and Healthcare.
        </p>
        <div className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} GenAI4Health Community. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;