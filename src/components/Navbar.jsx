import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaHome, FaUserFriends, FaBook, FaImage, FaAddressBook, FaSearch, FaGamepad, FaRegNewspaper, FaBullseye, FaPuzzlePiece } from 'react-icons/fa';
import logo from '../assets/firststeplogo.png';

const navLinks = [
  { name: 'Home', path: '/', icon: FaHome, color: 'text-[#D9A05B]' },
  { name: 'About Us', path: '/about-us', icon: FaUserFriends, color: 'text-[#F26252]' },
  { name: 'Academics', path: '/academics', icon: FaBook, color: 'text-[#4CA1E0]' },
  { name: 'Activities', path: '/activities', icon: FaPuzzlePiece, color: 'text-[#FFD600]' },
  { name: 'Gallery', path: '/gallery', icon: FaImage, color: 'text-[#9A5CE5]' },
  { name: 'News & Events', path: '/news-events', icon: FaRegNewspaper, color: 'text-[#5A0B73]' },
  { name: 'Contact Us', path: '/contact-us', icon: FaAddressBook, color: 'text-[#ED875E]' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-white text-gray-800 text-xs py-2 px-4 md:px-8 hidden lg:flex justify-between items-center border-b border-gray-100 font-semibold tracking-wide">
        <div className="flex">
          Our goal is to have all our students realize their potential.
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <FaBullseye className="text-[#F56082] text-lg" />
            <span>Our Motto: "Every Child Yearns to Learn"</span>
          </div>
          <div className="flex gap-3 items-center ml-4">
            <a href="#" className="w-6 h-6 rounded-full bg-[#3b5998] flex items-center justify-center text-white text-[12px] hover:scale-110 transition-transform"><FaFacebookF /></a>
            <a href="#" className="w-6 h-6 rounded-full bg-[#4CA1E0] flex items-center justify-center text-white text-[12px] hover:scale-110 transition-transform"><FaPhoneAlt /></a>
            <a href="#" className="w-6 h-6 rounded-full bg-[#F56082] flex items-center justify-center text-white text-[12px] hover:scale-110 transition-transform"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <nav className="bg-white py-3 md:py-4">
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="My First Step Logo" className="h-16 md:h-20 w-auto object-contain mix-blend-multiply" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-6 2xl:gap-8 font-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex flex-col items-center gap-1 transition-transform hover:-translate-y-1 ${link.color}`}
                >
                  <link.icon className="text-2xl" />
                  <span className="text-[13px] uppercase tracking-wide">{link.name}</span>
                </Link>
              ))}
              
              <button className="text-[#9A5CE5] text-xl ml-2 hover:scale-110 transition-transform">
                <FaSearch />
              </button>
              
              <Link to="/admission" className="bg-[#32C5FF] hover:bg-[#20b2e8] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md ml-4 text-sm uppercase tracking-wide">
                Admission Open
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-4">
              <Link to="/admission" className="bg-[#32C5FF] hover:bg-[#20b2e8] text-white px-4 py-2 rounded-full font-bold transition-all shadow-md text-xs uppercase">
                Admission
              </Link>
              <button
                className="text-3xl text-[#5A0B73]"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="xl:hidden bg-white border-t border-gray-100 overflow-hidden"
              >
                <div className="flex flex-col px-4 py-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold ${
                        location.pathname === link.path
                          ? `bg-slate-50 ${link.color}`
                          : 'text-gray-700 hover:bg-slate-50'
                      }`}
                    >
                      <link.icon className={`text-xl ${location.pathname !== link.path && link.color}`} />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        
        {/* Wavy Bottom Border */}
        <div 
          className="w-full h-[10px]" 
          style={{ 
            background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'%3E%3Cpath fill='%237a6b8a' d='M 0 0 A 8 8 0 0 1 16 0 Z'/%3E%3C/svg%3E\") repeat-x", 
            backgroundSize: "20px 10px" 
          }}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
