
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  requirement: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}
