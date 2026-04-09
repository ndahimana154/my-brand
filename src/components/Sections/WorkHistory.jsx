import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const WorkHistory = ({ darkMode }) => {
  const experiences = [
    {
      company: 'Orion Systems & Design',
      position: 'Developer',
      period: 'January 2026 - Present',
      description: 'Currently working as a Developer at Orion Systems & Design, focusing on building scalable web applications and infrastructure solutions.',
    },
    // Add more experiences here as needed
  ];

  return (
    <section id="work-history" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-4 px-3 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10">
              <FiBriefcase className="text-green-600" />
              <span className={`ml-2 font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                Work History
              </span>
            </div>

            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Professional Experience
            </h2>

            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-3 max-w-2xl mx-auto`}>
              My journey in software development and the roles I've taken on.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-8 p-6 rounded-lg border ${
                  darkMode
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.position}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.period}
                  </div>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHistory;