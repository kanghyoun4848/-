import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Building2 } from 'lucide-react';
import { NAV_ITEMS, COLORS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleConsultationClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Premium Design */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="bg-[#1A365D] p-2 rounded mr-3 group-hover:bg-[#C5A065] transition-colors duration-300">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-wide text-[#1A365D] leading-none">
                장호원 글로벌 부동산
              </span>
              <span className="text-[10px] md:text-xs text-[#C5A065] tracking-[0.25em] font-medium mt-1 uppercase">
                Global Real Estate Group
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isActive ? 'text-[#C5A065]' : 'text-gray-600 hover:text-[#1A365D]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={handleConsultationClick}
              className="inline-flex items-center px-6 py-2.5 border border-[#1A365D] text-sm font-bold rounded-none text-[#1A365D] hover:bg-[#1A365D] hover:text-white transition-all duration-300 uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 mr-2" />
              상담 문의
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1A365D] focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-50 text-[#C5A065]'
                      : 'text-gray-600 hover:text-[#1A365D] hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={handleConsultationClick}
              className="w-full mt-4 flex items-center justify-center px-4 py-3 bg-[#1A365D] text-white font-bold rounded-lg hover:bg-[#152c4e] transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              상담 문의하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;