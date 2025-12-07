import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { FaFlag } from 'react-icons/fa';
const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        darkMode
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-green-900/30'
          : 'bg-white/90 backdrop-blur-md border-b border-green-200/50'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Rwandan inspiration */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-yellow-500 flex items-center justify-center">
                <span className="font-bold text-white text-xl">NB</span>
              </div>
              <FaFlag className="absolute -top-1 -right-1 text-green-700 text-sm" />
            </div>
            <div className="hidden md:block">
              <span
                className={`font-bold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ndahimana Bonheur
              </span>
              <div className="text-xs text-green-600">Software Developer</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`font-medium hover:text-green-600 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                darkMode
                  ? 'bg-green-900/30 text-yellow-300 hover:bg-green-800/40'
                  : 'bg-green-100 text-gray-700 hover:bg-green-200'
              }`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'text-yellow-300' : 'text-gray-700'
              }`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden mt-4 pb-4 ${
              darkMode
                ? 'border-t border-green-900/30'
                : 'border-t border-green-200/50'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`block py-3 px-4 font-medium hover:text-green-600 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
