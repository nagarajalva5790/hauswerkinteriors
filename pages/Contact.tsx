import React, { useState, useRef } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { BUSINESS_INFO } from '../constants';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID || 'service_shhyusd';
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kozwql6';
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || '3lCw-YYxRZ9Gpcucg';

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('EmailJS Success!');
            setSubmitted(true);
            setIsSending(false);
          },
          (error) => {
            console.error('EmailJS Error:', error);
            setError('Failed to send message. Please try again later or contact us directly.');
            setIsSending(false);
          }
        );
    }
  };

  return (
    <div className='pt-24 animate-fadeIn'>
      {/* Header */}
      <section className='bg-neutral-50 py-24 border-b border-neutral-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold text-neutral-900 mb-6'>Contact Us</h1>
          <p className='text-xl text-neutral-600 max-w-2xl leading-relaxed'>
            Let's discuss your home project. Serving clients across Bangalore.
          </p>
        </div>
      </section>

      <section className='py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-20'>
            {/* Form */}
            <div>
              <h2 className='text-3xl font-bold mb-8'>Get a Free Consultation</h2>
              {submitted ? (
                <div className='bg-green-50 text-green-700 p-8 rounded-2xl border border-green-100'>
                  <h3 className='text-xl font-bold mb-2'>Thank you!</h3>
                  <p>Your requirement has been received. Our expert will contact you within 24 hours.</p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label className='block text-sm font-bold text-neutral-700 mb-2'>Full Name</label>
                    <input
                      type='text'
                      name='name'
                      required
                      className='w-full px-5 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all'
                      placeholder='John Doe'
                      defaultValue={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-bold text-neutral-700 mb-2'>Phone Number</label>
                      <input
                        type='tel'
                        name='phone'
                        required
                        className='w-full px-5 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all'
                        placeholder='+91 00000 00000'
                        defaultValue={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-bold text-neutral-700 mb-2'>Email Address</label>
                      <input
                        type='email'
                        name='email'
                        required
                        className='w-full px-5 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all'
                        placeholder='john@example.com'
                        defaultValue={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-bold text-neutral-700 mb-2'>Tell us about your requirement</label>
                    <textarea
                      rows={4}
                      name='requirement'
                      required
                      className='w-full px-5 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all'
                      placeholder='e.g. 3BHK Full Interior, Modular Kitchen, Painting etc.'
                      defaultValue={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    ></textarea>
                  </div>
                  {error && <div className='text-red-600 text-sm font-medium'>{error}</div>}
                  <button
                    type='submit'
                    disabled={isSending}
                    className='w-full bg-neutral-900 text-white py-4 rounded-lg font-bold hover:bg-neutral-800 transition-all flex items-center justify-center disabled:bg-neutral-500 disabled:cursor-not-allowed'
                  >
                    {isSending ? 'Sending...' : 'Submit Requirement'} <Send size={18} className='ml-2' />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className='space-y-12'>
              <div>
                <h3 className='text-xl font-bold mb-6'>Reach Out Directly</h3>
                <div className='space-y-6'>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className='flex items-center p-6 bg-white border border-neutral-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow'
                  >
                    <div className='w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-5'>
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className='text-sm text-neutral-500 uppercase font-bold tracking-widest mb-1'>Call Us</p>
                      <p className='text-lg font-bold'>{BUSINESS_INFO.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center p-6 bg-white border border-neutral-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow'
                  >
                    <div className='w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-5'>
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className='text-sm text-neutral-500 uppercase font-bold tracking-widest mb-1'>WhatsApp</p>
                      <p className='text-lg font-bold'>Message our team</p>
                    </div>
                  </a>
                  <div className='flex items-center p-6 bg-white border border-neutral-100 shadow-sm rounded-2xl'>
                    <div className='w-12 h-12 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center mr-5'>
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className='text-sm text-neutral-500 uppercase font-bold tracking-widest mb-1'>Email</p>
                      <p className='text-lg font-bold'>{BUSINESS_INFO.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-bold mb-6'>Our Location</h3>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <MapPin className='text-amber-600 mt-1 mr-4 flex-shrink-0' size={24} />
                    <p className='text-neutral-600 leading-relaxed'>{BUSINESS_INFO.address}</p>
                  </div>
                  <div className='flex items-start'>
                    <Clock className='text-amber-600 mt-1 mr-4 flex-shrink-0' size={24} />
                    <p className='text-neutral-600 leading-relaxed'>
                      Mon - Sat: 10:00 AM - 7:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
                <div className='mt-8 p-6 bg-neutral-900 text-white rounded-2xl'>
                  <p className='text-sm font-medium italic'>"{BUSINESS_INFO.locations}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
