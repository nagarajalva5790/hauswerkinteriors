
import React from 'react';
import { REASONS, ICON_MAP } from '../constants';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="pt-24 animate-fadeIn">
      {/* Header */}
      <section className="bg-neutral-50 py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6">The HausWerk Advantage</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Why Bangalore homeowners trust us with their most valuable asset.
          </p>
        </div>
      </section>

      {/* Detailed USP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {REASONS.map((reason, idx) => {
              const IconComp = ICON_MAP[reason.icon];
              return (
                <div key={idx} className="bg-neutral-50 border border-neutral-100 p-10 rounded-3xl hover:bg-white hover:shadow-2xl transition-all">
                  <div className="text-amber-600 mb-6">
                    <IconComp size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Professional Project Coordination</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Interior design involves juggling dozens of workers, timelines, and material deliveries. Most companies pass this stress to the homeowner. **We don't.**
              </p>
              <div className="space-y-4">
                {[
                  "Dedicated Project Manager for every site",
                  "Daily progress updates via WhatsApp",
                  "Strict adherence to safety and site hygiene",
                  "Seamless coordination between design and civil teams"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-neutral-800 font-medium">
                    <CheckCircle2 className="text-green-500 mr-3" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Execution and Quality Check" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <TrendingUp size={32} className="mb-2" />
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold">Timely Completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-500 font-bold uppercase tracking-[0.2em] mb-8">What our clients say</p>
          <blockquote className="text-3xl md:text-4xl font-light italic mb-10 leading-snug">
            "HausWerk handled everything for our 3BHK in Sarjapur. From the initial 3D designs to the last coat of paint, their transparency on costs and timelines was refreshing for the Bangalore market."
          </blockquote>
          <p className="text-lg font-bold">— Ritesh Agarwal, Apartment Owner</p>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
