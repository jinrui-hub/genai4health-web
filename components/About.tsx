import React from 'react';
import { ExternalLink, University } from 'lucide-react';
import { CHAIRS, ORGANIZERS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Chairs */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Chairs</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {CHAIRS.map((chair, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <img
                  src={chair.imageUrl}
                  alt={chair.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-slate-50 shadow-inner"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">{chair.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{chair.title}</p>
                  <p className="text-slate-500 mb-4">{chair.university}</p>
                  {chair.website && (
                    <a
                      href={chair.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      View Profile <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board Members */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Board Members</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {ORGANIZERS.map((organizer, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="relative">
                  <img 
                    src={organizer.imageUrl} 
                    alt={organizer.name} 
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-slate-50 shadow-inner"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-full border-2 border-white">
                    <University size={14} className="text-white" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">{organizer.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{organizer.title}</p>
                  <p className="text-slate-500 mb-4">{organizer.university}</p>
                  {organizer.website && (
                    <a 
                      href={organizer.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      View Profile <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
