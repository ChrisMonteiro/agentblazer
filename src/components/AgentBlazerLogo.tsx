import React from 'react';
import { useClubLogo } from '../context/LogoContext';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textClassName?: string;
  subTextClassName?: string;
  animate?: boolean;
  alt?: string;
  variant?: 'emblem' | 'full' | 'poster';
  forceSrc?: string;
}

export const AgentBlazerLogo: React.FC<LogoProps> = ({
  className = '',
  size = 48,
  animate = false,
  alt = 'AgentBlazer Club Official Emblem',
  variant = 'emblem',
  forceSrc,
}) => {
  const { logoUrl } = useClubLogo();
  const dimension = typeof size === 'number' ? `${size}px` : size;
  const resolvedSrc = forceSrc || logoUrl;

  // Full or poster variant (for Hero, LoadingScreen) - pristine rendering with zero artificial color tinting
  if (variant === 'full' || variant === 'poster') {
    return (
      <div
        style={{
          width: dimension,
          height: dimension,
        }}
        className={`relative inline-flex items-center justify-center select-none ${className}`}
      >
        <img
          src={resolvedSrc}
          alt={alt}
          loading="eager"
          decoding="async"
          className={`w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300 ${
            animate ? 'hover:scale-105' : ''
          }`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Pure emblem display (Navbar, CTA, Footer) - strictly your exact image, clean and unaltered
  return (
    <div
      style={{ width: dimension, height: dimension }}
      className={`relative inline-flex flex-shrink-0 items-center justify-center select-none ${className}`}
    >
      <img
        src={resolvedSrc}
        alt={alt}
        loading="eager"
        decoding="async"
        className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] transition-transform duration-300"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default AgentBlazerLogo;
