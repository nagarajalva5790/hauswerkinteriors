
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
// Fixed: Explicitly verify named export 'Link' from react-router-dom
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-24 animate-fadeIn">
      {/* Header */}
      <section className="bg-neutral-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6 font-serif">Comprehensive Home Solutions</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From modern home interior Bangalore concepts to technical maintenance, HausWerk is your single point of contact for everything home.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-32">
            {SERVICES.map((service, idx) => {
              const IconComp = ICON_MAP[service.icon];
              const isEven = idx % 2 === 0;
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
                  <div className="md:w-1/2">
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-lg mb-6">
                      <IconComp size={24} />
                    </div>
                    <h2 className="text-4xl font-bold text-neutral-900 mb-6 font-serif">{service.title}</h2>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                      {service.description} Our expertise ensures that every modular kitchen Bangalore or home interior Bangalore project is handled with technical precision and aesthetic care. We follow a strict execution timeline for all our plumbing services Bangalore and electrical services Bangalore.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-10">
                      {["Quality Tested", "Professional execution", "Transparent pricing"].map((tag, i) => (
                        <span key={i} className="text-xs font-bold uppercase tracking-widest text-neutral-400 bg-neutral-100 px-3 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-md font-bold hover:bg-neutral-800 transition-colors">
                      Inquire About This Service
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Maintenance */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 font-serif">Beyond Design: Home Maintenance & Repair</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto mb-12 text-lg">
            A beautiful home stays functional through professional care. We offer specialized plumbing services Bangalore and certified electrical services Bangalore to keep your residence safe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg mb-4 font-serif">Emergency Support</h4>
              <p className="text-sm text-neutral-500">Quick response for critical plumbing services Bangalore or electrical issues in your apartment.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg mb-4 font-serif">Renovation Consulting</h4>
              <p className="text-sm text-neutral-500">Expert advice on modular kitchen Bangalore modifications and structural works.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg mb-4 font-serif">Quality Audits</h4>
              <p className="text-sm text-neutral-500">Regular checkups for painting, polishing, and home interior Bangalore quality standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
