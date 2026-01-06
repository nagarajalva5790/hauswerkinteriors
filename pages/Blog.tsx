
import React from 'react';
// Fixed: Explicitly verify named export 'Link' from react-router-dom
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  return (
    <div className="pt-24 animate-fadeIn">
      {/* Header */}
      <section className="bg-neutral-50 py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6 font-serif">Tips & Inspiration</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Expert advice on interior design, home maintenance, and lifestyle for the modern Bangalore home.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center shadow-sm">
                      <Tag size={10} className="mr-1.5 text-amber-600" /> {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex items-center text-neutral-400 text-xs mb-4 font-medium uppercase tracking-widest">
                    <Calendar size={14} className="mr-2" /> {post.date}
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-amber-600 transition-colors font-serif leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center text-neutral-900 font-bold group/btn text-sm">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {/* Newsletter Section */}
          <div className="mt-32 bg-neutral-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 max-w-2xl mx-auto">
               <h3 className="text-3xl font-bold text-white mb-6">Stay Inspired</h3>
               <p className="text-neutral-400 mb-10 leading-relaxed">
                 Subscribe to our newsletter for latest trends, maintenance tips, and exclusive offers.
               </p>
               <form className="flex flex-col sm:flex-row gap-4">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="flex-grow px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                 />
                 <button className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-700 transition-all">
                   Subscribe
                 </button>
               </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
