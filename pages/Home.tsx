import React from 'react';
import { Link } from 'react-router-dom';
// Fixed: Added missing Phone and MessageCircle imports from lucide-react
import { ChevronRight, ArrowRight, Calendar, Phone, MessageCircle } from 'lucide-react';
import { SERVICES, REASONS, BUSINESS_INFO, ICON_MAP, BLOG_POSTS } from '../constants';

const Home = () => {
  return (
    <div className='animate-fadeIn'>
      {/* Hero Section */}
      <section className='relative h-screen min-h-[600px] flex items-center'>
        <div className='absolute inset-0 z-0'>
          <img
            src='https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000'
            alt='Modern Indian Home Interior Bangalore'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-neutral-900/50 lg:bg-neutral-900/40'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20'>
          <div className='max-w-2xl text-white'>
            <span className='inline-block px-4 py-1.5 bg-amber-600 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 animate-slideInLeft shadow-lg'>
              Bangalore's Premier Home Experts
            </span>
            <h1 className='text-5xl md:text-7xl font-bold mb-8 leading-[1.1] animate-slideInLeft delay-100 font-serif'>
              Premium <span className='text-amber-400'>Home Interior</span> Bangalore.
            </h1>
            <p className='text-lg md:text-xl mb-10 text-neutral-100 leading-relaxed font-light animate-slideInLeft delay-200'>
              Specializing in high-end modular kitchen Bangalore designs and end-to-end luxury transformations. Quality
              workmanship with 100% price transparency.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 animate-slideInLeft delay-300'>
              <Link
                to='/contact'
                className='bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-bold text-center transition-all flex items-center justify-center shadow-xl shadow-amber-900/20'
              >
                Get Free Estimate <ArrowRight size={18} className='ml-2' />
              </Link>
              <Link
                to='/services'
                className='bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-md font-bold text-center transition-all border border-white/30'
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className='py-24 bg-neutral-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-neutral-900 mb-8 font-serif'>Expert Home Interior Bangalore Solutions.</h2>
              <p className='text-neutral-600 leading-relaxed mb-6 text-lg'>
                HausWerk Interiors is a premium home interior Bangalore company offering end-to-end design and maintenance. From
                contemporary modular kitchen Bangalore setups to reliable plumbing and electrical services Bangalore, we are
                your trusted local partner.
              </p>
              <p className='text-neutral-600 leading-relaxed mb-10'>
                Whether it's a new 3BHK apartment in Sarjapur or a luxury villa renovation in Whitefield, our team delivers
                excellence in every corner of your Bangalore residence.
              </p>
              <Link to='/about' className='text-amber-600 font-bold flex items-center group text-lg'>
                Learn more about our philosophy <ChevronRight className='ml-1 group-hover:translate-x-1 transition-transform' />
              </Link>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-4'>
                <img
                  src='https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
                  alt='Indian Modern Living'
                  className='rounded-2xl shadow-lg w-full'
                />
                <img
                  src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
                  alt='Detail Workmanship'
                  className='rounded-2xl shadow-lg w-full'
                />
              </div>
              <div className='pt-8'>
                <img
                  src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
                  alt='Indian Kitchen Layout'
                  className='rounded-2xl shadow-lg w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-neutral-900 mb-4 font-serif'>Our Core Expertise</h2>
            <p className='text-neutral-500 max-w-2xl mx-auto text-lg'>
              From professional modular kitchen Bangalore units to home maintenance, we cover every aspect of your property.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {SERVICES.slice(0, 4).map((service) => {
              const IconComp = ICON_MAP[service.icon];
              return (
                <div
                  key={service.id}
                  className='group bg-neutral-50 p-8 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-neutral-200 transition-all border border-neutral-100 flex flex-col h-full'
                >
                  <div className='w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all transform group-hover:-translate-y-1'>
                    <IconComp size={28} />
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                  <p className='text-neutral-500 text-sm leading-relaxed mb-6 flex-grow'>{service.description}</p>
                  <Link
                    to='/services'
                    className='text-sm font-bold text-neutral-900 flex items-center group-hover:text-amber-600 transition-colors'
                  >
                    View Details <ChevronRight size={16} className='ml-1' />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className='mt-16 text-center'>
            <Link
              to='/services'
              className='inline-block bg-neutral-900 text-white px-10 py-4 rounded-xl hover:bg-neutral-800 transition-all font-bold shadow-xl'
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className='py-24 bg-neutral-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-16'>
            <div className='max-w-2xl'>
              <h2 className='text-4xl font-bold text-neutral-900 mb-4 font-serif'>Home Inspiration</h2>
              <p className='text-neutral-500 text-lg'>
                Expert advice on home interior Bangalore and maintenance for property owners.
              </p>
            </div>
            <Link to='/blog' className='mt-6 md:mt-0 text-amber-600 font-bold flex items-center group text-lg'>
              View all articles <ChevronRight className='ml-1 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className='bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group'
              >
                <div className='h-60 overflow-hidden relative'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-white/90 backdrop-blur text-neutral-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest'>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className='p-8'>
                  <div className='flex items-center text-neutral-400 text-[10px] uppercase tracking-widest font-bold mb-4'>
                    <Calendar size={12} className='mr-1.5' /> {post.date}
                  </div>
                  <h4 className='text-xl font-bold mb-4 font-serif leading-tight group-hover:text-amber-600 transition-colors'>
                    <Link to='/blog'>{post.title}</Link>
                  </h4>
                  <p className='text-neutral-500 text-sm line-clamp-2 leading-relaxed'>{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className='py-24 bg-neutral-900 text-white overflow-hidden relative'>
        <div className='absolute bottom-0 right-0 w-1/2 h-full opacity-5 pointer-events-none translate-x-1/4'>
          <svg viewBox='0 0 100 100' className='w-full h-full text-white fill-current'>
            <path d='M0,100 L100,0 L100,100 Z' />
          </svg>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-10 font-serif'>The HausWerk Difference</h2>
              <div className='space-y-10'>
                {REASONS.map((reason, idx) => {
                  const ReasonIcon = ICON_MAP[reason.icon];
                  return (
                    <div key={idx} className='flex items-start group'>
                      <div className='flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all'>
                        <ReasonIcon size={28} />
                      </div>
                      <div className='ml-6'>
                        <h4 className='text-xl font-bold mb-2'>{reason.title}</h4>
                        <p className='text-neutral-400 text-sm leading-relaxed'>{reason.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='bg-white text-neutral-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative'>
              <div className='absolute -top-4 -right-4 bg-amber-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl'>
                Best Service 2025
              </div>
              <h3 className='text-3xl font-bold mb-6 font-serif'>Ready to transform your home?</h3>
              <p className='text-neutral-600 mb-10 text-lg leading-relaxed'>
                Schedule a site visit with our experts for your home interior Bangalore project today.
              </p>
              <div className='space-y-4'>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className='flex items-center justify-center w-full bg-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-900/10'
                >
                  <Phone size={20} className='mr-2' /> {BUSINESS_INFO.phone}
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-900/10'
                >
                  <MessageCircle size={20} className='mr-2' /> Chat on WhatsApp
                </a>
              </div>
              <p className='mt-6 text-center text-xs text-neutral-400 font-medium'>Free Initial Consultation & 3D Estimates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
