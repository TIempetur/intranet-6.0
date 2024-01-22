"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BurgerMenu({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='lg:hidden justify-between sm:justify-between sm:gap-2'>
      <button onClick={toggleMenu} className='text-slate-50 text-3xl mr-4 focus:outline-none hover:text-dark'>
        ☰
      </button>
      {isMenuOpen && (
        <nav className='text-slate-50  hover:text-dark  flex flex-col text-xl '>
          {links.map((link) => (
            <Link
              key={link.href}
              className='hover:underline hover:decoration-white'
              href={link.href}
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
