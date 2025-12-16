import React from 'react';
import { Slack, Mail, Mic2, Users, ArrowRight } from 'lucide-react';
import { LINKS } from '../constants';

const Join: React.FC = () => {
  return (
    <section id="join" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Become a Member</h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              Join a growing network of researchers, clinicians, and engineers pushing the boundaries of what's possible with Generative AI in healthcare.
            </p>
            
            <div className="space-y-4">
              <a 
                href={LINKS.slack}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#4A154B] rounded-xl text-white">
                    <Slack size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Join Slack Channel</h3>
                    <p className="text-sm text-slate-400">Connect for daily discussions</p>
                  </div>
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-white transition-colors" />
              </a>

              <a 
                href={LINKS.mailingList}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Subscribe to Mailing List</h3>
                    <p className="text-sm text-slate-400">Get monthly updates and invites</p>
                  </div>
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white text-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Mic2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Call for Speakers</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We are actively seeking speakers for our monthly sessions. Whether you want to present your latest NeurIPS paper or nominate a colleague, we want to hear from you.
              </p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={LINKS.speakerForm}
                  className="w-full py-4 px-6 rounded-xl bg-slate-900 text-white font-medium text-center hover:bg-slate-800 transition-colors shadow-lg"
                >
                  Submit a Proposal
                </a>
                <p className="text-center text-xs text-slate-400 mt-2">
                  Nominations are reviewed on a rolling basis by the committee.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Join;