import { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check system preference or saved preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved
        ? JSON.parse(saved)
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <footer
        className={`py-8 mt-20 ${
          darkMode
            ? 'bg-gray-800/50 border-t border-gray-700'
            : 'bg-white border-t border-gray-200'
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span
                className={`font-bold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ndahimana Bonheur
              </span>
              <div className="text-sm mt-1">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Software Developer • Kigali, Rwanda
                </span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/ndahimana154"
                className={`transition-colors ${
                  darkMode
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ndahimana-bonheur"
                className={`transition-colors ${
                  darkMode
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                className={`transition-colors ${
                  darkMode
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </a>
            </div>
          </div>
          <div
            className={`mt-8 pt-6 border-t ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <p className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
              © {new Date().getFullYear()} Ndahimana Bonheur. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
