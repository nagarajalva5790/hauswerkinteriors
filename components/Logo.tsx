import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'adaptive';
  scrolled?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'adaptive', scrolled = false, className = '' }) => {
  const isDark = variant === 'dark' || (variant === 'adaptive' && scrolled);

  const iconColor = 'text-amber-600';
  const textColor = isDark ? 'text-neutral-900' : 'text-white';
  const subTextColor = isDark ? 'text-neutral-500' : 'text-neutral-300';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Abstract H-House Icon */}
      <div className='relative w-10 h-10 flex-shrink-0'>
        <svg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full'>
          <path d='M8 32V12L20 4L32 12V32' stroke='currentColor' strokeWidth='2.5' className={iconColor} />
          <path d='M14 32V20H26V32' stroke='currentColor' strokeWidth='2.5' className={iconColor} />
          <path d='M8 24H32' stroke='currentColor' strokeWidth='2.5' className={iconColor} />
        </svg>
      </div>

      <div className='flex flex-col leading-none'>
        <span className={`text-2xl font-bold tracking-tight font-serif ${textColor}`}>HAUSWERK</span>
        <span className={`text-[10px] tracking-[0.3em] uppercase font-semibold ${subTextColor}`}>Interiors</span>
      </div>
    </div>
  );
};

export default Logo;
