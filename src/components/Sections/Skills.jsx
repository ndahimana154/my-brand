import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes, SiGithub, SiGithubactions, SiTerraform } from 'react-icons/si';
import { FiTool } from 'react-icons/fi';

const Skills = ({ darkMode }) => {
  const categories = [
    {
      title: 'Languages & Frameworks',
      items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python'],
    },
    {
      title: 'DevOps & Cloud',
      items: [
        'Docker (containerization)',
        'AWS EC2 & Load Balancing',
        'Kubernetes (orchestration)',
        'Resource Optimization & Monitoring',
        'CI/CD (GitHub Actions, GitLab CI)',
      ],
      icons: [<FaDocker key="dock" />, <FaAws key="aws" />, <SiKubernetes key="k8s" />],
    },
    {
      title: 'Tools & Databases',
      items: ['Git', 'PostgreSQL', 'MongoDB', 'Terraform', 'Prometheus/Grafana'],
    },
    {
      title: 'Other Skills',
      items: ['System Design', 'Testing (Jest, RTL)', 'Agile', 'Mentoring & Collaboration'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-4 px-3 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10">
              <FiTool className="text-green-600" />
              <span className={`ml-2 font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                Skills
              </span>
            </div>

            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Technologies & Capabilities
            </h2>

            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-3 max-w-2xl mx-auto`}>
              I focus on pragmatic engineering: shipping reliable features fast, automating infrastructure, and monitoring production systems for stability and cost efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className={`p-6 rounded-xl shadow-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-100'}`}>
                <h4 className={`font-semibold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{cat.title}</h4>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2 text-sm`}>
                  {cat.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>
                {cat.icons && <div className="mt-4 text-xl flex gap-3">{cat.icons}</div>}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
