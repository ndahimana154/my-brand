import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiCode, FiCpu } from 'react-icons/fi';
import { GiMountainRoad } from 'react-icons/gi';

const Hero = ({ darkMode }) => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = [
    'Software Developer',
    'Problem Solver',
    'Full Stack Engineer',
    'Tech Innovator',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animated background elements
  const BackgroundShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            darkMode ? 'bg-green-900/10' : 'bg-green-200/30'
          }`}
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <BackgroundShapes />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20">
              <GiMountainRoad className="text-green-600" />
              <span
                className={`text-sm font-medium ${
                  darkMode ? 'text-green-400' : 'text-green-700'
                }`}
              >
                Building from Rwanda 🇷🇼
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl font-bold mb-4 leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className="block">Ndahimana</span>
              <span className="block text-green-600">Bonheur</span>
            </h1>

            <div className="h-16 mb-6">
              <motion.div
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-green-400' : 'text-green-700'
                }`}
              >
                {roles[textIndex]}
              </motion.div>
            </div>

            <p
              className={`text-lg mb-8 max-w-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Crafting exceptional digital experiences with {''}
              <span className="font-semibold text-green-600">3 years</span> of
              professional expertise. Specializing in modern web technologies
              and scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 font-semibold rounded-full border-2 ${
                  darkMode
                    ? 'border-green-600 text-green-400 hover:bg-green-900/30'
                    : 'border-green-500 text-green-700 hover:bg-green-50'
                } transition-colors`}
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                'React',
                'Node.js',
                'Python',
                'TypeScript',
                'MongoDB',
                'AWS',
              ].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-sm rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 border border-green-900/50'
                      : 'bg-green-100 text-green-800 border border-green-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className={`relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-3xl overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                  : 'bg-gradient-to-br from-white to-gray-100'
              } shadow-2xl border-8 border-white dark:border-gray-800`}
            >
              {/* Code Editor Simulation */}
              <div
                className={`absolute inset-4 rounded-lg overflow-hidden ${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                }`}
              >
                <div
                  className={`h-8 flex items-center px-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}
                >
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <FiCode className="text-green-500" />
                    <span
                      className={darkMode ? 'text-green-400' : 'text-green-600'}
                    >
                      // 3 years of code
                    </span>
                  </div>
                  <div
                    className={`mb-2 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    <span className="text-purple-500">function</span>{' '}
                    <span className="text-yellow-400">buildSolution</span>(){' '}
                    {'{'}
                  </div>
                  <div className="ml-4">
                    <span
                      className={darkMode ? 'text-gray-400' : 'text-gray-600'}
                    >
                      return {'"'}Innovation from
                    </span>{' '}
                    <span className="text-green-500">Rwanda</span>{' '}
                    <span
                      className={darkMode ? 'text-gray-400' : 'text-gray-600'}
                    >
                      {'"'};
                    </span>
                  </div>
                  <div className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                    {'}'}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow-lg"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FiCpu className="text-white m-auto mt-4" size={24} />
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full ${
                darkMode ? 'bg-green-900/20' : 'bg-green-200/50'
              }`}
            ></div>
            <div
              className={`absolute -top-6 -left-6 w-24 h-24 rounded-full ${
                darkMode ? 'bg-blue-900/20' : 'bg-blue-200/50'
              }`}
            ></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about">
            <FiArrowDown
              className={`text-2xl ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
