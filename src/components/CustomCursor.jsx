import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Only enable custom cursor on fine pointer / desktop devices with mouse input
    const checkDesktop = () => {
      const isFinePointer = window.matchMedia('(pointer: fine)').matches;
      const largeScreen = window.innerWidth >= 1024;
      setIsMobile(!isFinePointer || !largeScreen);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const onMouseMove = (e) => {
      // Hide cursor if it hasn't actually entered valid coordinates
      if (e.clientX <= 0 || e.clientY <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        setIsVisible(false);
        return;
      }

      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setHoverText(target.getAttribute('data-cursor') || '');
      } else {
        const clickable = e.target.closest('a, button, input, textarea, [role="button"]');
        if (clickable) {
          setIsHovered(true);
          setHoverText('');
        } else {
          setIsHovered(false);
          setHoverText('');
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isMobile || !isVisible || position.x < 0 || position.y < 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.05s linear, width 0.15s ease, height 0.15s ease'
      }}
    >
      <div
        style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          width: isHovered ? (hoverText ? '52px' : '32px') : '8px',
          height: isHovered ? (hoverText ? '52px' : '32px') : '8px',
          borderRadius: '50%',
          backgroundColor: isHovered ? (hoverText ? 'rgba(250, 250, 250, 0.95)' : 'rgba(255, 255, 255, 0.2)') : 'rgba(250, 250, 250, 0.8)',
          color: isHovered && hoverText ? '#050505' : 'transparent',
          border: isHovered ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.05em',
          fontFamily: 'var(--code-font)',
          boxShadow: isHovered ? '0 0 15px rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.15s ease'
        }}
      >
        {isHovered && hoverText}
      </div>
    </div>
  );
}
