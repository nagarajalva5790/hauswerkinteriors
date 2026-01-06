import React from 'react';
import {
  Home,
  ChefHat,
  DoorOpen,
  Layers,
  Droplet,
  Zap,
  Paintbrush,
  Hammer,
  ShieldCheck,
  Clock,
  CircleDollarSign,
  UserCheck,
  TrendingUp,
  BookOpen,
  Image as ImageIcon,
} from 'lucide-react';
import { Service, NavItem, BlogPost } from './types';

export const BUSINESS_INFO = {
  name: 'HausWerk Interiors',
  tagline: 'Crafting Functional, Timeless Homes',
  phone: '+91 8618245870',
  whatsapp: '+918618245870',
  email: 'hauswerkinteriors@gmail.com',
  address: 'Thannisandra, Bangalore, KA 560064',
  locations: 'Serving clients across Bangalore. Site visits by appointment only.',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Why Choose Us', href: '/why-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    title: 'Minimalist Living Room',
    category: 'Living',
  },
  {
    url: 'https://images.unsplash.com/photo-1556911223-e25424f1367c?auto=format&fit=crop&q=80&w=1200',
    title: 'Premium Kitchen Cabinetry',
    category: 'Kitchen',
  },
  {
    url: 'https://images.unsplash.com/photo-1616486341353-c5833ad8afca?auto=format&fit=crop&q=80&w=1200',
    title: 'Luxury Bedroom Design',
    category: 'Bedroom',
  },
  {
    url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
    title: 'Modern Apartment Foyer',
    category: 'Living',
  },
  {
    url: 'https://images.unsplash.com/photo-1539922980492-38f6673af8dd?auto=format&fit=crop&q=80&w=1200',
    title: 'Handleless Kitchen Design',
    category: 'Kitchen',
  },
  {
    url: 'https://images.unsplash.com/photo-1595428774223-ef0486e4c373?auto=format&fit=crop&q=80&w=1200',
    title: 'Sliding Wardrobe with Mirror',
    category: 'Storage',
  },
  {
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    title: 'Indirect Cove Lighting',
    category: 'Ceiling',
  },
  {
    url: 'https://images.unsplash.com/photo-1507089947368-19c1da977531?auto=format&fit=crop&q=80&w=1200',
    title: 'Contemporary Dining Area',
    category: 'Living',
  },
  {
    url: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1200',
    title: 'Wall-to-Wall Storage',
    category: 'Storage',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'bangalore-trends-2024',
    title: 'Top 5 Interior Design Trends for Bangalore Apartments in 2024',
    date: 'May 12, 2024',
    category: 'Design Trends',
    excerpt:
      "From biophilic elements to 'quiet luxury', discover what's shaping modern home interior Bangalore trends this year.",
    image: 'https://images.unsplash.com/photo-1615529182906-c3409a82faac?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'monsoon-maintenance',
    title: 'Essential Home Maintenance Checklist for Bangalore Monsoon',
    date: 'April 28, 2024',
    category: 'Maintenance',
    excerpt: 'Ensure your home stays damp-free and vibrant during the heavy Bangalore rains with our expert maintenance guide.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'kitchen-materials',
    title: 'Choosing the Right Materials for Your Modular Kitchen Bangalore',
    date: 'April 15, 2024',
    category: 'Materials',
    excerpt:
      'A comparison of BWP Plywood vs. MDF for your modular kitchen Bangalore project and best finishes for Indian cooking.',
    image: 'https://images.unsplash.com/photo-1556911223-e25424f1367c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'compact-living-hacks',
    title: 'Maximizing Space: Smart Storage Hacks for Compact Homes',
    date: 'March 30, 2024',
    category: 'Space Saving',
    excerpt: 'Small apartment in Whitefield? Learn how to use vertical space and multi-functional furniture effectively.',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'interior-design',
    title: 'Home Interior Bangalore',
    description: 'End-to-end home interior Bangalore services from conceptual moodboards to high-quality site handover.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Bangalore',
    description: 'Ergonomic, high-quality modular kitchen Bangalore solutions with premium hardware and sleek finishes.',
    icon: 'ChefHat',
    image: 'https://images.unsplash.com/photo-1556911223-e25424f1367c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'wardrobes',
    title: 'Wardrobes & Storage',
    description: 'Custom storage solutions designed for maximum efficiency and modern aesthetics in Bangalore homes.',
    icon: 'DoorOpen',
    image: 'https://images.unsplash.com/photo-1595428774223-ef0486e4c373?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling & Lighting',
    description:
      'Designer ceilings integrated with sophisticated lighting for the perfect ambiance in your Bangalore residence.',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services Bangalore',
    description: 'Reliable plumbing services Bangalore for residential maintenance, leak-proof piping, and installations.',
    icon: 'Droplet',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'electrical',
    title: 'Electrical Services Bangalore',
    description: 'Safe, certified electrical services Bangalore including professional wiring and premium switchgear setups.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'painting',
    title: 'Painting & Polishing',
    description: 'Premium wall finishes and wood polishing services that breathe new life into your Bangalore property.',
    icon: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'renovation',
    title: 'Renovation & Repair',
    description: 'Complete home makeover services in Bangalore, from structural changes to cosmetic upgrades.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800',
  },
];

export const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  ChefHat,
  DoorOpen,
  Layers,
  Droplet,
  Zap,
  Paintbrush,
  Hammer,
  ShieldCheck,
  Clock,
  CircleDollarSign,
  UserCheck,
  TrendingUp,
  BookOpen,
  Image: ImageIcon,
};

export const REASONS = [
  {
    title: 'Single Point of Contact',
    description:
      'We manage every vendor and detail, so you only talk to one professional for your home interior Bangalore project.',
    icon: 'UserCheck',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden costs. Detailed itemized quotes that respect your budget.',
    icon: 'CircleDollarSign',
  },
  {
    title: 'Quality Workmanship',
    description: 'Rigorous quality checks at every stage of modular kitchen Bangalore design and execution.',
    icon: 'ShieldCheck',
  },
  {
    title: 'On-Time Delivery',
    description: 'Strict project timelines ensured by professional project coordination.',
    icon: 'Clock',
  },
];
