import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, User, ChevronDown, ChevronUp, Plus, PlayCircle } from 'lucide-react';
import { EVENTS } from '../constants';
import { Event, EventType } from '../types';
import { formatDate, generateGoogleCalendarUrl } from '../utils';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventType>(EventType.UPCOMING);
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const filteredEvents = EVENTS.filter(e => e.type === activeTab).sort((a, b) => {
    // Sort upcoming ascending, past descending
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return activeTab === EventType.UPCOMING ? dateA - dateB : dateB - dateA;
  });

  const toggleExpand = (id: string) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <section id="schedule" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Events & Seminars</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Monthly seminars and special events featuring cutting-edge research and invited speakers in generative AI and healthcare.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 p-1 rounded-full relative">
            <button
              onClick={() => setActiveTab(EventType.UPCOMING)}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                activeTab === EventType.UPCOMING ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Upcoming Seminars
              {activeTab === EventType.UPCOMING && (
                <div className="absolute inset-0 bg-slate-900 rounded-full -z-10 animate-fade-in" />
              )}
            </button>
            <button
              onClick={() => setActiveTab(EventType.PAST)}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                activeTab === EventType.PAST ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Past Recordings
              {activeTab === EventType.PAST && (
                 <div className="absolute inset-0 bg-slate-900 rounded-full -z-10 animate-fade-in" />
              )}
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500 font-medium">No events currently scheduled for this period.</p>
            </div>
          ) : (
            filteredEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                isExpanded={expandedEventId === event.id} 
                onToggle={() => toggleExpand(event.id)} 
              />
            ))
          )}
        </div>

      </div>
    </section>
  );
};

interface EventCardProps {
  event: Event;
  isExpanded: boolean;
  onToggle: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isExpanded, onToggle }) => {
  const isUpcoming = event.type === EventType.UPCOMING;

  return (
    <div 
      className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        isExpanded ? 'border-blue-200 shadow-xl ring-4 ring-blue-50/50' : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
      }`}
    >
      {/* Card Header (Always Visible) */}
      <div className="p-6 md:p-8 cursor-pointer" onClick={onToggle}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          
          {/* Date Badge */}
          <div className="flex-shrink-0 flex md:flex-col items-center justify-center md:w-20 md:h-20 bg-slate-50 rounded-xl border border-slate-100 text-slate-900 p-3 md:p-0 gap-2 md:gap-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
            </span>
            <span className="text-2xl font-bold md:text-3xl">
              {new Date(event.date).getDate()}
            </span>
            <span className="text-xs md:hidden text-slate-400">|</span>
             <span className="text-xs md:hidden text-slate-500">
               {new Date(event.date).getFullYear()}
             </span>
          </div>

          {/* Main Info */}
          <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {event.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-blue-500" />
                {new Date(event.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </div>
              {event.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-blue-500" />
                  {event.location}
                </div>
              )}
               <div className="flex items-center gap-1.5">
                  <User size={16} className="text-blue-500" />
                  {event.speaker.name}
                </div>
            </div>
          </div>

          {/* Action / Toggle Icon */}
          <div className="flex items-center gap-3">
             {isUpcoming ? (
                 <a 
                 href={generateGoogleCalendarUrl(event)}
                 target="_blank"
                 rel="noopener noreferrer"
                 onClick={(e) => e.stopPropagation()}
                 className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors"
                 title="Add to Google Calendar"
               >
                 <Plus size={16} />
                 Add
               </a>
             ) : event.recordingUrl ? (
                <a 
                href={event.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors"
              >
                <PlayCircle size={16} />
                Watch
              </a>
             ) : null}

            <button className={`p-2 rounded-full bg-slate-50 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-slate-100 text-slate-600' : ''}`}>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-8 pb-8 pt-0 border-t border-slate-50">
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            
            {/* Speaker Bio */}
            <div className="md:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Speaker</h4>
              <div className="flex items-start gap-4">
                <img 
                  src={event.speaker.imageUrl || "https://picsum.photos/200"} 
                  alt={event.speaker.name} 
                  className="w-16 h-16 rounded-full object-cover border border-slate-100"
                />
                <div>
                  <p className="font-bold text-slate-900">{event.speaker.name}</p>
                  <p className="text-sm text-blue-600 mb-2">{event.speaker.affiliation}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{event.speaker.bio}</p>
                </div>
              </div>
            </div>

            {/* Abstract */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Abstract</h4>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {event.abstract}
              </p>

              {/* Mobile Actions */}
              <div className="mt-6 md:hidden flex gap-3">
                 {isUpcoming ? (
                     <a 
                     href={generateGoogleCalendarUrl(event)}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 text-white font-medium"
                   >
                     <Calendar size={18} /> Add to Calendar
                   </a>
                 ) : event.recordingUrl ? (
                    <a 
                    href={event.recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-600 text-white font-medium"
                  >
                    <PlayCircle size={18} /> Watch Recording
                  </a>
                 ) : null}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;