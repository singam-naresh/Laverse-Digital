import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'JobNext - Job Portal Platform',
      description: 'A comprehensive job portal connecting employers with job seekers, featuring advanced search, application tracking, and profile management.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      liveUrl: 'https://jobnext-in.vercel.app/',
      githubUrl: 'https://github.com/laversedigital/Jobnext.in',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      category: 'Website',
    },
    {
      title: 'Zomio - E-commerce Platform',
      description: 'Modern e-commerce solution with shopping cart, payment integration, order management, and customer dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      liveUrl: 'https://zomio-ecommerce.vercel.app/',
      githubUrl: 'https://github.com/laversedigital/ZomioEcommerce',
      techStack: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS', 'Redux'],
      category: 'E-commerce',
    },
    {
      title: 'Lavs Dairy - Delivery App',
      description: 'Dairy product delivery application with subscription management, route optimization, and customer tracking.',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&h=600&fit=crop',
      liveUrl: 'https://lavs-dairy.vercel.app/',
      githubUrl: 'https://github.com/laversedigital/LavsDairy.in',
      techStack: ['React', 'Firebase', 'Google Maps API', 'Material-UI'],
      category: 'App',
    },
    {
      title: 'Goride - Travel Booking',
      description: 'Travel booking platform with destination search, package management, booking system, and payment integration.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      liveUrl: 'https://goridetravelling.vercel.app/',
      githubUrl: 'https://github.com/laversedigital/GorideTravelling',
      techStack: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Bootstrap'],
      category: 'Website',
    },
    {
      title: 'Task Manager Pro',
      description: 'Advanced task management system with team collaboration, project tracking, and productivity analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: 'https://github.com/laversedigital/rareminds-task-manager',
      techStack: ['React', 'Express', 'MongoDB', 'Socket.io', 'Chart.js'],
      category: 'App',
    },
    {
      title: 'Expense Tracker',
      description: 'Personal finance management app with expense categorization, budget tracking, and financial insights.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: 'https://github.com/laversedigital/Expensive-Tracker',
      techStack: ['React Native', 'Firebase', 'Chart.js', 'AsyncStorage'],
      category: 'App',
    },
    {
      title: 'MovieEase - Entertainment Hub',
      description: 'Movie and TV show discovery platform with ratings, reviews, watchlists, and recommendation engine.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: 'https://github.com/laversedigital/MovieEase',
      techStack: ['React', 'TMDB API', 'Redux', 'Styled Components'],
      category: 'Website',
    },
    {
      title: 'Rose Milk E-commerce',
      description: 'Specialized e-commerce platform for dairy products with subscription services and delivery management.',
      image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: 'https://github.com/laversedigital/RoseMilkEcommerce',
      techStack: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Vercel'],
      category: 'E-commerce',
    },
  ];

  const categories = ['All', 'Website', 'App', 'E-commerce', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Showcasing our latest projects and successful implementations for clients worldwide. 
              Each project represents our commitment to quality and innovation.
            </p>
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3">
              <Filter className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">50+ Projects Delivered • 25+ Happy Clients</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-purple-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-xl">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Project Statistics
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '25+', label: 'Happy Clients' },
              { number: '15+', label: 'Countries Served' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="https://wa.me/919515855625"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;