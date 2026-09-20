import React from 'react';

interface CircuitTechCircleProps {
  children: React.ReactNode;
  className?: string;
}

export const CircuitTechCircle: React.FC<CircuitTechCircleProps> = ({
  children,
  className = '',
}) => {
  // SVG coordinate center: (200, 200) on a 400x400 viewBox
  const cx = 200;
  const cy = 200;

  // Degrees to radians helper for polar coordinates on circle
  const pt = (angleDeg: number, r: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: +(cx + r * Math.cos(rad)).toFixed(2),
      y: +(cy + r * Math.sin(rad)).toFixed(2),
    };
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 1. Main Circular Housing with Tech Bezel (Guarantees the logo is visibly INSIDE the circle) */}
      <div className="relative w-[280px] h-[280px] sm:w-[336px] sm:h-[336px] rounded-full border-2 border-[#FFB000]/50 bg-[#131310]/85 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(255,176,0,0.08),0_0_20px_rgba(255,176,0,0.2)] flex items-center justify-center">
        
        {/* Inner Subtle Circuit Texture inside the Circle */}
        <div className="absolute inset-2 rounded-full border border-dashed border-[#FFB000]/20 pointer-events-none" />
        <div className="absolute inset-5 rounded-full border border-[#00F0FF]/15 pointer-events-none" />

        {/* The Clean Logo: Scaled appropriately so all corners and edges sit strictly INSIDE the circle */}
        <div className="relative z-10 flex items-center justify-center pointer-events-auto">
          {children}
        </div>
      </div>

      {/* 2. Precision PCB Circuit & Radar Tech Overlay Attached to the Circular Border */}
      <svg
        className="absolute w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] pointer-events-none overflow-visible"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold Circuit Gradient */}
          <linearGradient id="goldCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4B8" />
            <stop offset="50%" stopColor="#FFB000" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Cyan Circuit Gradient */}
          <linearGradient id="cyanCircuitGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>

          {/* Magenta / Purple Circuit Gradient */}
          <linearGradient id="purpleCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>

          {/* Solder Node Glow */}
          <filter id="circuitNodeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Circular Perimeter Tech Graduation Ticks (Radar Scale at R=156) */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = i * 10;
          const isMajor = angle % 90 === 0;
          const isMedium = angle % 30 === 0;
          const p1 = pt(angle, 154);
          const p2 = pt(angle, isMajor ? 164 : isMedium ? 160 : 157);
          return (
            <line
              key={i}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke={isMajor ? '#FFB000' : isMedium ? '#00F0FF' : 'rgba(255, 255, 255, 0.2)'}
              strokeWidth={isMajor ? '2' : '1'}
              strokeLinecap="round"
            />
          );
        })}

        {/* Branching PCB Circuit Traces Radiating from the Circular Border */}
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Branch 1: Top-Right Gold Circuit */}
          <path d="M 298 98 L 324 72 L 354 72" stroke="url(#goldCircuitGrad)" strokeWidth="2" />
          <circle cx="354" cy="72" r="3.5" fill="#FFF4B8" stroke="#D97706" strokeWidth="1" filter="url(#circuitNodeGlow)" />
          <path d="M 324 72 L 324 48" stroke="url(#goldCircuitGrad)" strokeWidth="1.5" />
          <circle cx="324" cy="48" r="2.5" fill="#FFB000" />

          {/* Branch 2: Right-Side Cyan Circuit with Micro-Chip */}
          <path d="M 356 195 L 378 217 L 378 245" stroke="url(#cyanCircuitGrad)" strokeWidth="2" />
          <circle cx="378" cy="245" r="3.5" fill="#00F0FF" stroke="#0369A1" strokeWidth="1" filter="url(#circuitNodeGlow)" />
          {/* Micro PCB Chip Block */}
          <rect x="368" y="170" width="16" height="12" rx="1.5" fill="#0D061C" stroke="#00F0FF" strokeWidth="1.2" />
          <line x1="365" y1="174" x2="368" y2="174" stroke="#00F0FF" strokeWidth="1" />
          <line x1="365" y1="178" x2="368" y2="178" stroke="#00F0FF" strokeWidth="1" />
          <line x1="384" y1="174" x2="387" y2="174" stroke="#00F0FF" strokeWidth="1" />
          <line x1="384" y1="178" x2="387" y2="178" stroke="#00F0FF" strokeWidth="1" />

          {/* Branch 3: Bottom-Right Gold Circuit */}
          <path d="M 302 302 L 328 328 L 358 328" stroke="url(#goldCircuitGrad)" strokeWidth="2" />
          <circle cx="358" cy="328" r="3.5" fill="#FFB000" filter="url(#circuitNodeGlow)" />
          <path d="M 328 328 L 328 352" stroke="url(#goldCircuitGrad)" strokeWidth="1.5" />
          <circle cx="328" cy="352" r="2.5" fill="#FFB000" />

          {/* Branch 4: Bottom-Left Magenta Circuit */}
          <path d="M 98 302 L 72 328 L 42 328" stroke="url(#purpleCircuitGrad)" strokeWidth="2" />
          <circle cx="42" cy="328" r="3.5" fill="#F43F5E" filter="url(#circuitNodeGlow)" />
          <path d="M 72 328 L 72 352" stroke="url(#purpleCircuitGrad)" strokeWidth="1.5" />
          <circle cx="72" cy="352" r="2.5" fill="#A855F7" />

          {/* Branch 5: Left-Side Magenta Circuit with Micro-Chip */}
          <path d="M 44 205 L 22 183 L 22 155" stroke="url(#purpleCircuitGrad)" strokeWidth="2" />
          <circle cx="22" cy="155" r="3.5" fill="#EC4899" filter="url(#circuitNodeGlow)" />
          {/* Micro PCB Chip Block */}
          <rect x="16" y="215" width="16" height="12" rx="1.5" fill="#0D061C" stroke="#F43F5E" strokeWidth="1.2" />
          <line x1="13" y1="219" x2="16" y2="219" stroke="#F43F5E" strokeWidth="1" />
          <line x1="13" y1="223" x2="16" y2="223" stroke="#F43F5E" strokeWidth="1" />
          <line x1="32" y1="219" x2="35" y2="219" stroke="#F43F5E" strokeWidth="1" />
          <line x1="32" y1="223" x2="35" y2="223" stroke="#F43F5E" strokeWidth="1" />

          {/* Branch 6: Top-Left Cyan Circuit */}
          <path d="M 98 98 L 72 72 L 42 72" stroke="url(#cyanCircuitGrad)" strokeWidth="2" />
          <circle cx="42" cy="72" r="3.5" fill="#00F0FF" filter="url(#circuitNodeGlow)" />
          <path d="M 72 72 L 72 48" stroke="url(#cyanCircuitGrad)" strokeWidth="1.5" />
          <circle cx="72" cy="48" r="2.5" fill="#38BDF8" />
        </g>
      </svg>
    </div>
  );
};

export default CircuitTechCircle;
