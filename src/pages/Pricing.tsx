import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, DollarSign, IndianRupee } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      priceUSD: 299,
      priceINR: 24999,
      popular: false,
      features: [
        'Responsive Website Design',
        'Up to 5 Pages',
        'Contact Form Integration',
        'Basic SEO Setup',
        'Mobile Optimization',
        '30 Days Support',
        'SSL Certificate',
        'Google Analytics Setup'
      ],
      cta: 'Get Started',
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses with advanced needs',
      priceUSD: 599,
      priceINR: 49999,
      popular: true,
      features: [
        'Everything in Starter',
        'Up to 10 Pages',
        'CMS Integration',
        'Advanced SEO',
        'Social Media Integration',
        'Blog Setup',
        '60 Days Support',
        'Performance Optimization',
        'Custom Animations',
        'Email Marketing Setup'
      ],
      cta: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'For large businesses and e-commerce solutions',
      priceUSD: 1299,
      priceINR: 99999,
      popular: false,
      features: [
        'Everything in Business',
        'Unlimited Pages',
        'E-commerce Integration',
        'Payment Gateway Setup',
        'User Authentication',
        'Admin Dashboard',
        '90 Days Support',
        'AI Integration',
        'Custom Features',
        'Priority Support',
        'Monthly Maintenance'
      ],
      cta: 'Contact Us',
    },
  ];

  const addOns = [
    {
      name: 'AI Chatbot Integration',
      priceUSD: 199,
      priceINR: 15999,
      description: 'Custom AI chatbot for customer support'
    },
    {
      name: 'Mobile App Development',
      priceUSD: 799,
      priceINR: 64999,
      description: 'Cross-platform mobile application'
    },
    {
      name: 'Advanced Analytics',
      priceUSD: 99,
      priceINR: 7999,
      description: 'Detailed analytics and reporting dashboard'
    },
    {
      name: 'Monthly Maintenance',
      priceUSD: 49,
      priceINR: 3999,
      description: 'Ongoing updates and maintenance (per month)'
    },
  ];

  const formatPrice = (usdPrice: number, inrPrice: number) => {
    return currency === 'USD' ? `$${usdPrice}` : `₹${inrPrice.toLocaleString()}`;
  };

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
                Global Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transparent, affordable pricing designed for businesses worldwide. 
              Choose the plan that fits your needs and budget.
            </p>
            
            {/* Currency Toggle */}
            <div className="inline-flex items-center bg-gray-800 rounded-xl p-1 mb-8">
              <button
                onClick={() => setCurrency('USD')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currency === 'USD'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>USD</span>
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currency === 'INR'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <IndianRupee className="w-4 h-4" />
                <span>INR</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border rounded-2xl p-8 h-full ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20 scale-105' 
                    : 'border-gray-700/50 hover:border-purple-500/30'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {formatPrice(plan.priceUSD, plan.priceINR)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">One-time payment</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
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
                Add-on Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your project with additional features and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 rounded-xl p-6 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {formatPrice(addon.priceUSD, addon.priceINR)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, bank transfers, and local payment methods including UPI for Indian clients.'
              },
              {
                question: 'How long does it take to complete a project?',
                answer: 'Project timelines vary based on complexity. Starter projects typically take 1-2 weeks, Business projects 2-4 weeks, and Enterprise projects 4-8 weeks.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, all plans include support periods. We also offer monthly maintenance packages for ongoing updates and support.'
              },
              {
                question: 'Can I customize a plan for my specific needs?',
                answer: 'Absolutely! Contact us for a custom quote tailored to your specific requirements and budget.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
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
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default Pricing;