import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { BsFlag } from 'react-icons/bs';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'ndahimana154@gmail.com',
      link: 'mailto:ndahimana154@gmail.com',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+250 722 893 974',
      link: 'tel:+250722893974',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Kigali, Rwanda',
      link: '#',
      extra: <BsFlag className="ml-2 text-green-600" />,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In <span className="text-green-600">Touch</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div
              className={`p-8 rounded-2xl ${
                darkMode
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700'
                  : 'bg-white shadow-xl border border-gray-100'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-start space-x-4 p-4 rounded-xl transition-all ${
                      darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-green-50'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        darkMode
                          ? 'bg-green-900/30 text-green-400'
                          : 'bg-green-100 text-green-600'
                      }`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div
                        className={`font-semibold ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {info.title}
                      </div>
                      <div className="flex items-center">
                        <span
                          className={
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }
                        >
                          {info.value}
                        </span>
                        {info.extra}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div
              className={`p-8 rounded-2xl ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-green-50 to-blue-50 border border-green-100'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span
                  className={`font-semibold ${
                    darkMode ? 'text-green-400' : 'text-green-700'
                  }`}
                >
                  Available for opportunities
                </span>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                I'm currently open to full-time roles, freelance projects, and
                interesting collaborations. Typically respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              darkMode
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700'
                : 'bg-white shadow-xl border border-gray-100'
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                    darkMode
                      ? 'bg-gray-900 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Ndahimana Bonheur"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                    darkMode
                      ? 'bg-gray-900 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                    darkMode
                      ? 'bg-gray-900 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
