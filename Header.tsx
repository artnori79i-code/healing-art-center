// Path: components/Header.tsx
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onApplyClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROGRAM', href: '#program' },
    { name: 'REVIEW', href: '#review' },
    { name: 'INSIGHT', href: '#insight' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <span className="text-xl font-gothic font-extrabold tracking-tight text-neutral-800 group-hover:text-blue-600 transition-colors">
            힐링예술터
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest text-neutral-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onApplyClick}
            className="bg-blue-600 text-white px-5 py-1.5 rounded-full font-bold text-xs hover:bg-neutral-900 transition-all transform hover:scale-105 shadow-lg"
          >
            APPLY
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;