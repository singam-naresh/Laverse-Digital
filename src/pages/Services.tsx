import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Bot, 
  ShoppingCart, 
  Palette, 
  MapPin,
  Settings,
  BarChart3,
  Globe
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Website Development',
      description: 'Custom business websites, corporate sites, and landing pages built with modern technologies and responsive design.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading Speed',
        'Modern UI/UX',
        'Content Management',
        'Analytics Integration'
      ],
      price: 'From $299',
      popular: false,
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Complete online stores with payment integration, inventory management, and customer analytics.',
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Tracking',
        'Customer Dashboard',
        'Multi-currency Support',
        'Mobile Optimized'
      ],
      price: 'From $599',
      popular: true,
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      features: [
        'Cross-platform Development',
        'Native Performance',
        'Push Notifications',
        'Offline Functionality',
        'App Store Deployment',
        'Maintenance & Updates'
      ],
      price: 'From $799',
      popular: false,
    },
    {
      icon: Bot,
      title: 'AI Automation Tools',
      description: 'Intelligent chatbots, resume analyzers, and business automation solutions powered by AI.',
      features: [
        'Custom AI Chatbots',
        'Process Automation',
        'Data Analysis',
        'Machine Learning Models',
        'API Integration',
        'Scalable Solutions'
      ],
      price: 'From $499',
      popular: false,
    },
    {
      icon: Palette,
      title: 'Branding & Marketing',
      description: 'Complete brand identity design and digital marketing strategies to boost your online presence.',
      features: [
        'Logo & Brand Design',
        'Social Media Strategy',
        'Content Creation',
        'SEO Optimization',
        'Google Ads Management',
        'Analytics & Reporting'
      ],
      price: 'From $199',
      popular: false,
    },
    {
      icon: MapPin,
      title: 'Google Business Setup',
      description: 'Google Maps integration and Google Business listing optimization for local visibility.',
      features: [
        'Google Business Profile',
        'Maps Integration',
        'Local SEO',
        'Review Management',
        'Location Optimization',
        'Analytics Setup'
      ],
      price: 'From $99',
      popular: false,
    },
    {
      icon: Settings,
      title: 'SaaS Development',
      description: 'Scalable Software-as-a-Service applications with subscription management and user analytics.',
      features: [
        'Multi-tenant Architecture',
        'Subscription Management',
        'User Authentication',
        'API Development',
        'Cloud Deployment',
        'Monitoring & Support'
      ],
      price: 'From $1299',
      popular: false,
    },
    {
      icon: BarChart3,
      title: 'Website Maintenance',
      description: 'Monthly website maintenance, updates, security monitoring, and performance optimization.',
      features: [
        'Regular Updates',
        'Security Monitoring',
        'Performance Optimization',
        'Backup Management',
        'Bug Fixes',
        '24/7 Support'
      ],
      price: 'From $49/month',
      popular: false,
    },
    {
      icon: Globe,
      title: 'Portfolio & Company Sites',
      description: 'Professional portfolio websites and company profile sites to showcase your work and services.',
      features: [
        'Professional Design',
        'Portfolio Showcase',
        'Contact Forms',
        'Social Integration',
        'Mobile Responsive',
        'Fast Loading'
      ],
      price: 'From $199',
      popular: false,
    },
  ];

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
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions designed for global businesses. From web development to AI automation, 
              we deliver cutting-edge technology at affordable prices.
            </p>
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Global Remote Services • 24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                Why Choose Our Services?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine global expertise with local understanding to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'AI-Enhanced Development',
                description: 'Leveraging AI tools for faster, more efficient development processes',
              },
              {
                title: 'Global Pricing',
                description: 'Competitive rates designed for businesses worldwide',
              },
              {
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising on quality',
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock support for all your technical needs',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and custom quote for your project
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
              >
                Get Free Quote
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

export default Services;