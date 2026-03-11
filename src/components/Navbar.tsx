"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex justify-between items-center py-6 absolute top-4 left-1/2 -translate-x-1/2 w-[95%] z-[1000] max-w-[1200px] transition-all duration-400 ease-in-out px-8 mx-auto container ${scrolled ? 'fixed !top-0 !max-w-full !w-full bg-[rgba(255,255,255,0.85)] backdrop-blur-[15px] !py-3 shadow-[0_5px_30px_rgba(0,0,0,0.05)] !rounded-none' : 'rounded-[20px]'}`}>
        <div className="text-[1.6rem] font-cormorant font-bold text-[var(--primary)] flex items-center gap-3">
            <div className="w-[38px] h-[38px] bg-[var(--primary)] rounded-full relative flex items-center justify-center text-white text-base">
                <i className="fas fa-leaf font-black"></i>
            </div>
            <span>The Blissful Station</span>
        </div>
        <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#services" className="text-decoration-none text-[var(--text-dark)] font-medium transition-all duration-400 hover:text-[var(--primary)]">Services</a></li>
            <li><a href="#about" className="text-decoration-none text-[var(--text-dark)] font-medium transition-all duration-400 hover:text-[var(--primary)]">About</a></li>
            <li><a href="#testimonials" className="text-decoration-none text-[var(--text-dark)] font-medium transition-all duration-400 hover:text-[var(--primary)]">Testimonials</a></li>
            <li><a href="#contact" className="text-decoration-none text-[var(--text-dark)] font-medium transition-all duration-400 hover:text-[var(--primary)]">Contact</a></li>
        </ul>
        <a href="#contact" className="inline-block bg-[var(--primary)] text-white font-semibold py-3 px-7 rounded-full transition-all duration-400 hover:bg-[var(--primary-light)] hover:-translate-y-1 shadow-[0_4px_15px_rgba(33,77,62,0.2)] hover:shadow-[0_6px_20px_rgba(33,77,62,0.3)]">Book Consultation</a>
    </nav>
  );
}
