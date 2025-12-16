import React from 'react';
import { ExternalLink, University } from 'lucide-react';
import { ORGANIZERS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Founding Members</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl leading-relaxed">
            GenAI4Health is organized by leaders in the field from Stanford University and UT Austin, dedicated to fostering collaboration between AI researchers and medical practitioners.
          </p>
        </div>

        {/* Organizers Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {ORGANIZERS.map((organizer, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={organizer.imageUrl} 
                  alt={organizer.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-slate-50 shadow-inner"
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
    </section>
  );
};

export default About;