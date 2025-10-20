import React, { useState, useEffect } from 'react';

const ScrollF1Car = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const sectionTop = experienceSection.offsetTop;
        const sectionHeight = experienceSection.offsetHeight;
        const scrollPosition = window.scrollY - sectionTop + window.innerHeight / 2;

        const progress = Math.max(0, Math.min(100, (scrollPosition / sectionHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Papaya color (McLaren)
  const papaya = '#F97316';
  const darkPapaya = '#CC5C10';
  const accentBlue = '#3B82F6';

  return (
    <div
      className="f1-car-scroll"
      style={{
        position: 'absolute',
        left: '-4.2rem',
        top: `${scrollProgress}%`,
        transition: 'top 0.1s ease-out',
        filter: 'drop-shadow(0 6px 10px rgba(249, 115, 22, 0.45))',
        zIndex: 10,
        transform: 'translate(-6px, -24px)',
        width: 48,
        height: 96,
        pointerEvents: 'none',
      }}
      aria-hidden
    >
      {/* Simple top-view F1 car SVG */}
      <svg width="48" height="96" viewBox="0 0 48 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow undercarriage */}
        <rect x="20" y="6" width="8" height="84" rx="3" fill="#111827" opacity="0.25"/>

        {/* Nose cone */}
        <path d="M24 2 L28 10 L20 10 Z" fill={papaya} stroke={darkPapaya} strokeWidth="1"/>

        {/* Front wing */}
        <rect x="10" y="10" width="28" height="4" rx="2" fill={accentBlue} />
        <rect x="6" y="12" width="36" height="2" rx="1" fill={accentBlue} opacity="0.65" />

        {/* Chassis */}
        <rect x="18" y="12" width="12" height="56" rx="6" fill={papaya} stroke={darkPapaya} strokeWidth="1"/>

        {/* Halo */}
        <rect x="19" y="24" width="10" height="6" rx="3" fill="#111827" opacity="0.7"/>

        {/* Driver cockpit */}
        <rect x="20.5" y="26" width="7" height="12" rx="3" fill="#1F2937" />

        {/* Side pods accents */}
        <rect x="16" y="28" width="4" height="18" rx="2" fill={accentBlue} opacity="0.85"/>
        <rect x="28" y="28" width="4" height="18" rx="2" fill={accentBlue} opacity="0.85"/>

        {/* Rear engine cover */}
        <rect x="19" y="48" width="10" height="18" rx="3" fill={papaya} stroke={darkPapaya} strokeWidth="1"/>

        {/* Rear wing */}
        <rect x="12" y="66" width="24" height="4" rx="2" fill={accentBlue} />
        <rect x="10" y="70" width="28" height="3" rx="1.5" fill={accentBlue} opacity="0.8" />

        {/* Wheels (top view hints) */}
        <rect x="6" y="14" width="6" height="10" rx="3" fill="#111827"/>
        <rect x="36" y="14" width="6" height="10" rx="3" fill="#111827"/>
        <rect x="6" y="60" width="6" height="10" rx="3" fill="#111827"/>
        <rect x="36" y="60" width="6" height="10" rx="3" fill="#111827"/>
      </svg>
    </div>
  );
};

export default ScrollF1Car;


