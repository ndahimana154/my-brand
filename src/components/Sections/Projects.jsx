import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiServer,
  FiShoppingCart,
  FiMessageSquare,
} from 'react-icons/fi';
import { TbBuildingStore, TbNews, TbSchool } from 'react-icons/tb';
import { HiOutlineChip, HiOutlineShoppingBag } from 'react-icons/hi';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Hanjji E-Commerce Platform',
      description:
        'A comprehensive B2C e-commerce solution with real-time inventory management, multi-role user system, and advanced analytics dashboard. Built to handle high-volume transactions with seamless user experience.',
      features: [
        'Role-based access control (Admin/Manager/Customer)',
        'Real-time inventory tracking & notifications',
        'Advanced analytics dashboard with Chart.js',
        'Secure payment gateway integration',
        'Order management system with status tracking',
        'Product categorization & search optimization',
      ],
      techStack: {
        frontend: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
        backend: ['Node.js', 'Express.js', 'JWT Authentication'],
        database: ['MongoDB', 'Mongoose ODM'],
        services: ['Chart.js', 'Cloudinary', 'RESTful APIs'],
      },
      category: 'fullstack',
      github: 'https://github.com/ndahimana154/my-brand',
      live: 'https://www.hanjji.com/',
      color: 'from-emerald-500 to-teal-600',
      accentColor: 'text-emerald-400',
      icon: HiOutlineShoppingBag,
      image: '/hanjji.PNG',
      status: 'Production',
      metrics: '10k+ monthly users',
    },
    {
      id: 2,
      title: 'Kickside Store - Enterprise Marketplace',
      description:
        'Scalable e-commerce platform featuring real-time inventory synchronization, multi-vendor support, and integrated payment processing with comprehensive admin controls.',
      features: [
        'Stripe payment gateway integration',
        'Real-time inventory management',
        'Multi-vendor dashboard system',
        'Order tracking & analytics',
        'Customer review & rating system',
        'Automated email notifications',
      ],
      techStack: {
        frontend: ['React', 'Context API', 'SCSS', 'Axios'],
        backend: ['Node.js', 'Express', 'Socket.io'],
        database: ['MongoDB Atlas', 'Redis Cache'],
        services: ['Stripe API', 'SendGrid', 'AWS S3'],
      },
      category: 'fullstack',
      github:
        'https://github.com/KTS-Kickside-Technical-School/ks-e-commerce-fe',
      live: 'https://shop.kickside.rw/',
      color: 'from-violet-600 to-purple-700',
      accentColor: 'text-violet-400',
      icon: TbBuildingStore,
      image: '/kickside-store.webp',
      status: 'Suspended',
      metrics: '5k+ products listed',
    },
    {
      id: 3,
      title: 'ES Gishoma - Educational Institution Platform',
      description:
        'A complete digital transformation platform for secondary schools featuring program showcase, activity updates, and parent-teacher communication systems.',
      features: [
        'School programs and activities showcase',
        'Teacher-student communication portal',
        'Event calendar & notifications',
        'Photo & video gallery management',
        'Responsive design for all devices',
        'SEO optimization for better visibility',
      ],
      techStack: {
        frontend: ['React.js', 'React Router', 'Tailwind CSS'],
        backend: ['Node.js', 'Express', 'MongoDB'],
        infrastructure: ['Digital Ocean', 'Nginx', 'PM2'],
        services: ['Email API', 'File upload system'],
      },
      category: 'fullstack',
      github: '#',
      live: 'https://esgishoma.netlify.app/',
      color: 'from-blue-600 to-cyan-600',
      accentColor: 'text-blue-400',
      icon: TbSchool,
      image: '/gishoma.webp',
      status: 'Live',
      metrics: '500+ active users',
    },
    {
      id: 4,
      title: 'Fixo RW - Remote Technical Support & Digital Hub Platform',
      description:
        'An innovative platform connecting users with technical experts for real-time remote assistance, troubleshooting, and device optimization services.',
      features: [
        'Real-time screen sharing & remote control',
        'Expert matching algorithm',
        'Secure payment escrow system',
        'Session recording & history',
        'Rating & review system',
        'Multi-language support',
      ],
      techStack: {
        frontend: ['React.js', 'WebRTC', 'Socket.io Client'],
        backend: ['Node.js', 'WebSocket', 'PostgreSQL'],
        infrastructure: ['Digital Ocean', 'Docker'],
        services: ['PeerJS', 'Payment gateway', 'Video streaming'],
      },
      category: 'fullstack',
      github: '#',
      live: 'https://fxo.netlify.app/',
      color: 'from-amber-500 to-orange-600',
      accentColor: 'text-amber-400',
      icon: HiOutlineChip,
      image: '/fixo.webp',
      status: 'Beta',
      metrics: '200+ support sessions',
    },
    {
      id: 5,
      title: 'Simba Supermarket - UI/UX Redesign',
      description:
        'Complete website redesign with modern UI/UX principles, focusing on improved customer journey, responsive design, and enhanced product discovery.',
      features: [
        'Responsive mobile-first design',
        'Advanced product filtering & search',
        'Shopping cart with real-time updates',
        'User account management',
        'Promotional banner system',
        'Performance optimization',
      ],
      techStack: {
        frontend: ['React.js', 'Framer Motion', 'Tailwind CSS'],
        backend: ['Node.js API integration'],
        database: ['PostgreSQL'],
        cloud: ['AWS S3', 'CloudFront'],
      },
      category: 'frontend',
      github: '#',
      live: 'https://simbasupermarket.netlify.app/',
      color: 'from-rose-500 to-pink-600',
      accentColor: 'text-rose-400',
      icon: FiShoppingCart,
      image: '/simba.webp',
      status: 'Concept',
      metrics: '70% performance improvement',
    },
    {
      id: 6,
      title: 'Kickside News - Content Management Platform',
      description:
        'Modern news portal with advanced content management system for journalists and editors, featuring real-time collaboration and publication workflow.',
      features: [
        'Role-based article management (Journalist/Editor)',
        'Real-time collaboration tools',
        'Draft version control',
        'Scheduled publishing',
        'Analytics dashboard',
        'Social media integration',
      ],
      techStack: {
        frontend: ['React', 'TypeScript', 'Context API'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB'],
        services: ['Chart.js', 'Cloudinary', 'SEO optimization'],
      },
      category: 'frontend',
      github: 'https://github.com/KTS-Kickside-Technical-School/kickside-rw-fn',
      live: 'https://www.kickside.rw/',
      color: 'from-indigo-500 to-blue-600',
      accentColor: 'text-indigo-400',
      icon: TbNews,
      image: '/kickside-news.webp',
      status: 'Suspended',
      metrics: '1k+ articles published',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20">
            <FiCode className="text-green-400" size={20} />
            <span
              className={`text-sm font-semibold uppercase tracking-wider ${
                darkMode ? 'text-green-300' : 'text-green-600'
              }`}
            >
              Professional Portfolio
            </span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Showcased
            </span>{' '}
            <span className={darkMode ? 'text-gray-100' : 'text-gray-800'}>
              Projects
            </span>
          </h2>

          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A curated collection of professional projects demonstrating
            expertise in full-stack development, scalable architecture, and
            user-centric design solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const ProjectIcon = project.icon;
            const showLiveDemo =
              project.live !== '#' &&
              project.live !== '' &&
              project.status !== 'Suspended';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50'
                    : 'bg-white shadow-xl border border-gray-100'
                } ${
                  hoveredProject === project.id
                    ? 'ring-2 ring-offset-2 ring-green-500/50'
                    : ''
                }`}
              >
                {/* Project Header */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  </div>

                  {/* Image Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      />
                    </div>
                  </div>

                  {/* Project Icon & Status */}
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <div
                      className={`p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20`}
                    >
                      <ProjectIcon
                        className={`${project.accentColor} text-xl`}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          darkMode
                            ? 'bg-black/40 text-white'
                            : 'bg-white/40 text-gray-800'
                        }`}
                      >
                        {project.status}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode
                            ? project.status === 'Suspended'
                              ? 'bg-red-900/40 text-red-300'
                              : 'bg-green-900/40 text-green-300'
                            : project.status === 'Suspended'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full ${
                        darkMode
                          ? 'bg-black/40 text-white'
                          : 'bg-white/40 text-gray-800'
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
                    className={`mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4
                      className={`text-sm font-semibold uppercase tracking-wider mb-3 ${project.accentColor}`}
                    >
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-2 ${
                              darkMode ? 'bg-green-400' : 'bg-green-500'
                            }`}
                          ></div>
                          <span
                            className={`text-sm ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4
                      className={`text-sm font-semibold uppercase tracking-wider mb-3 ${project.accentColor}`}
                    >
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.values(project.techStack)
                        .flat()
                        .slice(0, 6)
                        .map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1.5 text-xs rounded-lg ${
                              darkMode
                                ? 'bg-gray-800 text-gray-300'
                                : 'bg-gray-100 text-gray-700'
                            } border ${
                              darkMode ? 'border-gray-700' : 'border-gray-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-gray-700/30">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 font-medium transition-colors ${
                        darkMode
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      } ${
                        project.github === '#'
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                      onClick={(e) =>
                        project.github === '#' && e.preventDefault()
                      }
                    >
                      <FiGithub className="text-lg" />
                      <span>Repository</span>
                    </a>

                    {showLiveDemo ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                          darkMode
                            ? project.status === 'Suspended'
                              ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700'
                              : 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                            : project.status === 'Suspended'
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
                            : 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600'
                        } text-white shadow-lg hover:shadow-xl ${
                          project.status === 'Suspended'
                            ? 'hover:shadow-amber-500/25'
                            : 'hover:shadow-green-500/25'
                        }`}
                      >
                        <span>
                          {project.status !== 'Suspended' && 'Live Demo'}
                        </span>
                        <FiExternalLink className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="px-5 py-2.5 rounded-full font-medium bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        Demo Unavailable
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-green-500/30 transition-all duration-500 pointer-events-none`}
                ></div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700/30"
        >
          <p
            className={`text-lg mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Interested in seeing more projects or discussing potential
            collaborations?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25"
          >
            <FiMessageSquare />
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
