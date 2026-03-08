import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const navLinks = [
  { href: '#highlights', label: 'Highlights' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#attendees', label: 'Attendees' },
  { href: '#next-steps', label: 'Next Steps' },
  { href: '#gallery', label: 'Gallery' },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-4 sm:top-6 left-0 right-0 z-50 flex items-center justify-center pointer-events-none px-4 sm:px-6 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
        <div className="pointer-events-auto w-full max-w-7xl mx-auto flex items-center justify-center relative">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-none bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-1.5 rounded-none text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden absolute right-0 p-2.5 text-zinc-600 bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-end px-4 pt-4">
              <button
                className="p-2.5 text-zinc-600 border border-zinc-200"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-start justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-3xl font-semibold text-zinc-900 tracking-tight py-3 hover:text-zinc-500 transition-colors w-full border-b border-zinc-100"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
