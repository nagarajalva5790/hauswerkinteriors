import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, BUSINESS_INFO } from '../constants';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const headerBgClass = isHome
    ? scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
      : 'bg-transparent py-5'
    : 'bg-white shadow-sm py-3';

  const linkColorClass = (active: boolean) => {
    if (isHome) {
      if (active) return scrolled ? 'text-amber-600 font-bold' : 'text-amber-400 font-bold';
      return scrolled ? 'text-neutral-600 hover:text-amber-600' : 'text-white/80 hover:text-white';
    } else {
      if (active) return 'text-amber-600 font-bold';
      return 'text-neutral-600 hover:text-amber-600';
    }
  };

  const menuButtonColorClass = isHome ? (scrolled ? 'text-neutral-900' : 'text-white') : 'text-neutral-900';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <Logo variant={isHome ? 'adaptive' : 'dark'} scrolled={scrolled} />
          </Link>

          <div className='hidden md:flex space-x-8 items-center'>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${linkColorClass(active)}`}
                >
                  {item.label}
                  {active && (
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${
                        isHome && !scrolled ? 'bg-amber-400' : 'bg-amber-600'
                      } rounded-full`}
                    ></span>
                  )}
                </Link>
              );
            })}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className='bg-amber-600 text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-amber-700 transition-all shadow-lg shadow-amber-900/10'
            >
              Consult Now
            </a>
          </div>

          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className={menuButtonColorClass}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-0 left-0 w-full h-screen bg-white z-[60] flex flex-col'>
          <div className='flex justify-between items-center px-4 py-5 border-b border-neutral-100'>
            <Link to='/' onClick={() => setIsOpen(false)}>
              <Logo variant='dark' />
            </Link>
            <button onClick={() => setIsOpen(false)} className='text-neutral-900'>
              <X size={28} />
            </button>
          </div>
          <div className='flex-grow flex flex-col items-center justify-center space-y-2 py-8 overflow-y-auto'>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-2xl font-medium w-full text-center transition-colors ${
                    active ? 'text-amber-600 font-bold bg-amber-50' : 'text-neutral-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className='p-6 border-t border-neutral-100 bg-neutral-50'>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className='flex items-center justify-center bg-amber-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-900/10 mb-4'
            >
              <Phone size={20} className='mr-2' /> Call Now
            </a>
            <p className='text-center text-neutral-500 text-sm'>Site visits by appointment only.</p>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <footer className='bg-neutral-900 text-white pt-20 pb-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
          <div className='col-span-1 md:col-span-1'>
            <Link to='/' className='inline-block mb-6'>
              <Logo variant='light' />
            </Link>
            <p className='text-neutral-400 text-sm leading-relaxed max-w-xs'>
              Crafting functional, timeless homes for the modern homeowner in Bangalore. End-to-end design and maintenance
              services.
            </p>
          </div>

          <div>
            <h4 className='font-bold text-lg mb-6'>Quick Links</h4>
            <ul className='space-y-4 text-neutral-400 text-sm'>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`transition-colors ${isActive(item.href) ? 'text-amber-500' : 'hover:text-amber-500'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='font-bold text-lg mb-6'>Our Services</h4>
            <ul className='space-y-4 text-neutral-400 text-sm'>
              <li>Home Interiors</li>
              <li>Modular Kitchens</li>
              <li>Plumbing Services</li>
              <li>Electrical Services</li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold text-lg mb-6'>Contact Us</h4>
            <p className='text-neutral-400 text-sm mb-4'>{BUSINESS_INFO.address}</p>
            <p className='text-neutral-400 text-sm mb-2 font-bold text-white'>{BUSINESS_INFO.phone}</p>
            <p className='text-neutral-400 text-sm'>{BUSINESS_INFO.email}</p>
          </div>
        </div>

        <div className='border-t border-neutral-800 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500'>
          <p>© {new Date().getFullYear()} HausWerk Interiors. All rights reserved.</p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => (
  <div className='fixed bottom-6 right-6 flex flex-col gap-3 z-50'>
    <a
      href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center'
      title='WhatsApp Us'
    >
      <MessageCircle size={24} />
    </a>
    <a
      href={`tel:${BUSINESS_INFO.phone}`}
      className='bg-amber-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center'
      title='Call Us'
    >
      <Phone size={24} />
    </a>
  </div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
