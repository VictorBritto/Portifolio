import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Icon from '../assets/icon/transparent.png';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/contact', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-2xl liquid-glass ${
        scrolled ? 'w-[92%] max-w-3xl shadow-2xl shadow-black/40' : 'w-[85%] max-w-2xl'
      }`}
    >
      <nav className="px-5 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={Icon}
              alt="Victor Gabriel"
              className="w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1 relative">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300 ${
                  activeTab === item.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeTab === item.path && (
                  <motion.div
                    className="absolute inset-0 rounded-xl -z-10 bg-white/10"
                    layoutId="navBubble"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Status Indicator — like a green "online" dot */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs text-gray-500 font-mono hidden sm:inline">Disponível</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
