import React from 'react';
import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';

const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-4 px-3 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10">
              <FiUser className={`text-green-600`} />
              <span className={`ml-2 font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                About Me
              </span>
            </div>

            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm Ndahimana — a pragmatic problem solver
            </h2>

            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              I'm a Software Developer with a focus on building scalable, maintainable web applications and infrastructure. I combine strong foundations in front-end and back-end engineering with practical DevOps and cloud experience to deliver end-to-end solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  What I do
                </h3>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} list-disc list-inside space-y-2`}>
                  <li>Build responsive, accessible web apps with React and TypeScript</li>
                  <li>Design and maintain backend APIs and services</li>
                  <li>Deploy and operate services on cloud platforms (AWS)</li>
                </ul>
              </div>

              <div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  Highlights
                </h3>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} list-disc list-inside space-y-2`}>
                  <li>3+ years building full-stack applications</li>
                  <li>Experience with containerization and orchestration</li>
                  <li>Collaborative, test-driven development and CI/CD</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a href="#projects" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
                See Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
