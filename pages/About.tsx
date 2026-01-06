import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <div className='pt-24 animate-fadeIn'>
      {/* Page Header */}
      <section className='bg-neutral-50 py-20 border-b border-neutral-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold text-neutral-900 mb-6 font-serif'>About HausWerk</h1>
          <p className='text-xl text-neutral-600 max-w-3xl leading-relaxed'>
            Founded on the principles of European engineering and Indian craftsmanship, we are redefining how{' '}
            <span className='text-amber-600 font-semibold'>home interior</span> projects are executed.
          </p>
        </div>
      </section>

      {/* Vision/Mission */}
      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-20 items-center mb-24'>
            <div>
              <img
                src='https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=800'
                alt='Professional Design Team Collaboration'
                className='rounded-3xl shadow-2xl'
              />
            </div>
            <div>
              <div className='mb-12'>
                <div className='w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4'>
                  <Target size={24} />
                </div>
                <h2 className='text-3xl font-bold mb-4 font-serif'>Our Mission</h2>
                <p className='text-neutral-600 leading-relaxed'>
                  To provide homeowners with a stress-free, high-quality, and transparent home interior experience. We believe
                  that a modern modular kitchen should not only be beautiful but also highly functional.
                </p>
              </div>
              <div>
                <div className='w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4'>
                  <Eye size={24} />
                </div>
                <h2 className='text-3xl font-bold mb-4 font-serif'>Our Vision</h2>
                <p className='text-neutral-600 leading-relaxed'>
                  To become Bangalore's most trusted partner for home interiors, modular kitchens, and specialized plumbing
                  services, known for our uncompromising workmanship.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-neutral-900 text-white p-12 md:p-20 rounded-[3rem]'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-10 font-serif'>Quality, Transparency & Local Expertise</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
                <div>
                  <h4 className='text-4xl font-bold text-amber-500 mb-2 font-serif'>100%</h4>
                  <p className='text-neutral-400 uppercase tracking-widest text-xs font-bold'>Transparency</p>
                </div>
                <div>
                  <h4 className='text-4xl font-bold text-amber-500 mb-2 font-serif'>10+</h4>
                  <p className='text-neutral-400 uppercase tracking-widest text-xs font-bold'>Trusted Vendors</p>
                </div>
                <div>
                  <h4 className='text-4xl font-bold text-amber-500 mb-2 font-serif'>Bangalore</h4>
                  <p className='text-neutral-400 uppercase tracking-widest text-xs font-bold'>Native Roots</p>
                </div>
              </div>
              <p className='mt-16 text-neutral-400 text-lg leading-relaxed'>
                Our focus is on creating long-term relationships through exceptional electrical services and innovative design.
                We ensure every modular kitchen we install is a testament to our quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Network */}
      <section className='py-24 bg-neutral-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row gap-16 items-center'>
            <div className='md:w-1/2'>
              <h2 className='text-3xl font-bold mb-6 font-serif'>Trusted Execution Network</h2>
              <p className='text-neutral-600 leading-relaxed mb-6'>
                Execution is where most home interior projects fail. At HausWerk, we've spent years vetting carpenters for
                modular kitchen projects and specialists for plumbing services.
              </p>
              <ul className='space-y-4 text-neutral-700 font-medium'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-amber-600 rounded-full mr-3'></span> Verified Local Professionals
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-amber-600 rounded-full mr-3'></span> Premium Material Sourcing
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-amber-600 rounded-full mr-3'></span> Standardized Execution Processes
                </li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <div className='bg-amber-600 p-1 rounded-2xl transform rotate-1'>
                <img
                  src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
                  alt='Specialized Construction Detail'
                  className='rounded-2xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
