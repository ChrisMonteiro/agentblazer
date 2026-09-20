import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'media' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-primary
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsTouchDevice(isTouch);
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check target element for custom data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorText(text);
        if (type === 'media' || type === 'play' || type === 'view') {
          setCursorVariant('media');
        } else if (type === 'link') {
          setCursorVariant('link');
        } else {
          setCursorVariant('default');
        }
      } else if (target.closest('button, a, input, [role="button"]')) {
        setCursorVariant('link');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-[#FFB000] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorVariant === 'media' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.1 }}
      />

      {/* Outer Follower Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full border border-[#FFB000]/50 transition-colors duration-150 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (cursorVariant === 'media' ? 36 : cursorVariant === 'link' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'media' ? 36 : cursorVariant === 'link' ? 24 : 16),
          width: cursorVariant === 'media' ? 72 : cursorVariant === 'link' ? 48 : 32,
          height: cursorVariant === 'media' ? 72 : cursorVariant === 'link' ? 48 : 32,
          backgroundColor: cursorVariant === 'media' ? 'rgba(255, 176, 0, 0.95)' : 'rgba(255, 176, 0, 0.06)',
          borderColor: cursorVariant === 'media' ? '#FFB000' : 'rgba(255, 176, 0, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
      >
        {cursorText && (
          <span className="font-mono text-[11px] font-bold text-[#0D0D0B] uppercase tracking-wider">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
