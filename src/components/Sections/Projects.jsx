import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiServer } from 'react-icons/fi';
import { image } from 'framer-motion/client';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Kickside News',
      description:
        'The news website, i have implemented the articles management allowing the journalists to post news and editors to track the progresses and reject or accept some.',
      tags: ['React', 'TypeScript', 'Chart.js', 'MongoDB'],
      category: 'frontend',
      github: 'https://github.com/KTS-Kickside-Technical-School/kickside-rw-fn',
      live: 'https://www.kickside.rw/',
      color: 'from-green-500 to-teal-500',
      image: '/kickside-news.webp',
    },
    {
      id: 2,
      title: 'Kickside Store',
      description:
        'Full-featured online marketplace with real-time inventory, payment processing, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github:
        'https://github.com/KTS-Kickside-Technical-School/ks-e-commerce-fe',
      live: 'https://shop.kickside.rw/',
      color: 'from-purple-500 to-pink-500',
      image: '/kickside-store.webp',
    },
    {
      id: 3,
      title: 'ES Gishoma Website',
      description: 'Website designed for Ecole Secondaire Gishoma.',
      tags: ['React.js', 'Nodejs', 'PostgreSQL', 'Digital Ocean'],
      category: 'fullstack',
      github: '#',
      live: 'https://esgishoma.rw/',
      color: 'from-blue-500 to-cyan-500',
      image: '/gishoma.webp',
    },
    {
      id: 4,
      title: 'Fixo RW',
      description: 'A remote helper for making the technical support easier.',
      tags: ['React.js', 'Nodejs', 'PostgreSQL', 'Digital Ocean'],
      category: 'fullstack',
      github: '#',
      live: 'https://fxo.netlify.app/',
      color: 'from-blue-500 to-cyan-500',
      image: '/fixo.webp',
    },
    {
      id: 5,
      title: 'Simba Supermarket mmock design',
      description: 'I redesigned the website for Simba super market.',
      tags: ['React.js', 'PostgreSQL', 'AWS'],
      category: 'fullstack',
      github: '#',
      live: 'https://simbasupermarket.netlify.app/',
      color: 'from-blue-500 to-cyan-500',
      image: '/simba.webp',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <FiCode className="text-green-500" size={24} />
              <span
                className={`text-sm font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}
              >
                Portfolio
              </span>
            </div>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured <span className="text-green-600">Projects</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A selection of my recent work showcasing expertise across different
            technologies and domains.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden ${
                darkMode
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700'
                  : 'bg-white shadow-xl border border-gray-100'
              }`}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      darkMode
                        ? 'bg-black/30 text-white'
                        : 'bg-white/30 text-white'
                    }`}
                  >
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    className={`flex items-center space-x-2 font-medium ${
                      darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <FiGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
