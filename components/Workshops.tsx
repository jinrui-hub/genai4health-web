import React from 'react';
import { ExternalLink } from 'lucide-react';
import { WORKSHOPS } from '../constants';

const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Past Events</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {WORKSHOPS.map((workshop, idx) => (
              <a 
                key={idx}
                href={workshop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                    {workshop.year}
                  </span>
                  <ExternalLink size={20} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {workshop.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {workshop.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;