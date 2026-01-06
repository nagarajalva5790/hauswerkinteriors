# HausWerk Interiors

HausWerk Interiors is a premium home interior design website for a Bangalore-based company. The platform showcases high-end interior solutions including modular kitchens, wardrobe designs, and renovation services. Built with modern web technologies, it offers a fast, responsive, and visually appealing experience for potential clients.

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices (mobile, tablet, desktop).
- **Service Showcase**: Detailed sections for Modular Kitchens, Wardrobes, Plumbing, Electrical, and Painting services.
- **Gallery**: High-quality image gallery of completed projects.
- **Blog**: Interior design trends and maintenance tips.
- **Contact Integration**: Functional contact form powered by **EmailJS** for direct inquiries.
- **SEO Optimized**: targeted meta tags and content for local Bangalore SEO.
- **Interactive UI**: Smooth animations and transitions using CSS and React.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/nagarajalva5790/hauswerkinteriors.git
    cd hauswerk-interiors
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

To enable the contact form functionality, you need to set up environment variables for EmailJS.

1.  Create a `.env` file in the root directory (or `.env.local`).
2.  Add the following variables with your EmailJS credentials:

    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

Previews the production build:

```bash
npm run preview
```

## Project Structure

```
hauswerk-interiors/
├── components/       # Reusable UI components (Layout, Logo, etc.)
├── pages/           # Page components (Home, Contact, Services, etc.)
├── constants.tsx    # Static data (Services list, Blog posts, SEO text)
├── App.tsx          # Main application component & Routing
├── index.html       # HTML entry point with SEO meta tags
└── ...config files  # Vite, Tailwind, TypeScript configs
```

## License

This project is private and proprietary to HausWerk Interiors.
