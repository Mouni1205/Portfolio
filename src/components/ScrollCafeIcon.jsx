import React, { useState, useEffect } from 'react';

const ScrollCafeIcon = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (!section) return;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY - sectionTop + window.innerHeight / 2;
      const progress = Math.max(0, Math.min(100, (scrollPosition / sectionHeight) * 100));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="absolute transition-all duration-100 ease-out z-10 pointer-events-none hidden md:block"
      style={{
        left: '-3.5rem',
        top: `${scrollProgress}%`,
        transform: 'translate(-4px, -24px)',
      }}
      aria-hidden
    >
      <div className="w-11 h-11 rounded-full bg-cafe-roast text-cafe-cream flex items-center justify-center shadow-lg border-2 border-white text-xl">
        📚
      </div>
    </div>
  );
};

export default ScrollCafeIcon;
