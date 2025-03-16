import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-xl font-semibold">Rupvan Foundation</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `text-gray-700 hover:text-rose-600 ${isActive ? 'text-rose-600' : ''}`}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `text-gray-700 hover:text-rose-600 ${isActive ? 'text-rose-600' : ''}`}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/events" className={({ isActive }) => 
              `text-gray-700 hover:text-rose-600 ${isActive ? 'text-rose-600' : ''}`}>
              {t('nav.events')}
            </NavLink>
            <NavLink to="/volunteer" className={({ isActive }) => 
              `text-gray-700 hover:text-rose-600 ${isActive ? 'text-rose-600' : ''}`}>
              {t('nav.volunteer')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `text-gray-700 hover:text-rose-600 ${isActive ? 'text-rose-600' : ''}`}>
              {t('nav.contact')}
            </NavLink>
            <NavLink to="/donate" className={({ isActive }) => 
              `text-gray-700 hover:text-rose-600 ${isActive ? 'text-rose-600' : ''}`}>
              <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full font-medium">
                {t('nav.donate')}
              </span>
            </NavLink>
            <LanguageSelector />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
                }`}
              onClick={toggleMenu}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/about"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
                }`}
              onClick={toggleMenu}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/events"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
                }`}
              onClick={toggleMenu}>
              {t('nav.events')}
            </NavLink>
            <NavLink to="/volunteer"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
                }`}
              onClick={toggleMenu}>
              {t('nav.volunteer')}
            </NavLink>
            <NavLink to="/contact"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
                }`}
              onClick={toggleMenu}>
              {t('nav.contact')}
            </NavLink>
            <NavLink to="/donate"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-rose-600 bg-rose-50' : 'text-rose-700 bg-rose-50 hover:text-rose-600'
                }`}
              onClick={toggleMenu}>
              {t('nav.donate')}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;