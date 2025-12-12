import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Code, 
  Palette, 
  Smartphone,
  BarChart3,
  Send,
  Upload
} from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const applicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please select your experience level'),
  portfolio: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  linkedin: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
  github: z.string().url('Please enter a valid GitHub URL').optional().or(z.literal('')),
  expectedSalary: z.string().min(1, 'Please enter your expected salary'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

 const onSubmit = async (data: ApplicationForm) => {
  setIsSubmitting(true);

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/career`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      toast.success("Application submitted successfully! We'll get back to you soon.");
      reset();
    } else {
      toast.error(result.error || "Failed to submit application.");
    }

  } catch (error) {
    toast.error("Server error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};



  const positions = [
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      type: 'Remote',
      experience: '2-4 years',
      salary: '$30k - $50k',
      icon: Code,
      description: 'Build responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks.',
      requirements: [
        'Strong proficiency in React and TypeScript',
        'Experience with Tailwind CSS or similar frameworks',
        'Knowledge of modern build tools (Vite, Webpack)',
        'Understanding of responsive design principles',
        'Experience with version control (Git)',
      ],
      responsibilities: [
        'Develop and maintain frontend applications',
        'Collaborate with designers and backend developers',
        'Optimize applications for performance and accessibility',
        'Write clean, maintainable code',
        'Participate in code reviews',
      ],
    },
    {
      id: 'backend-developer',
      title: 'Backend Developer',
      type: 'Remote',
      experience: '2-5 years',
      salary: '$35k - $60k',
      icon: BarChart3,
      description: 'Design and implement scalable backend systems using Node.js, databases, and cloud services.',
      requirements: [
        'Strong experience with Node.js and Express',
        'Database design and optimization (MongoDB, PostgreSQL)',
        'RESTful API development',
        'Cloud services experience (AWS, Google Cloud)',
        'Understanding of microservices architecture',
      ],
      responsibilities: [
        'Design and develop backend APIs',
        'Database design and optimization',
        'Implement security best practices',
        'Deploy and maintain cloud infrastructure',
        'Monitor system performance',
      ],
    },
    {
      id: 'fullstack-developer',
      title: 'Full-Stack Developer',
      type: 'Remote',
      experience: '3-6 years',
      salary: '$40k - $70k',
      icon: Code,
      description: 'Work on both frontend and backend development, creating complete web applications from start to finish.',
      requirements: [
        'Proficiency in both frontend and backend technologies',
        'Experience with React, Node.js, and databases',
        'Understanding of DevOps practices',
        'Strong problem-solving skills',
        'Experience with project management',
      ],
      responsibilities: [
        'Develop complete web applications',
        'Architect system solutions',
        'Lead technical discussions',
        'Mentor junior developers',
        'Ensure code quality and best practices',
      ],
    },
    {
      id: 'flutter-developer',
      title: 'Flutter Developer',
      type: 'Remote',
      experience: '2-4 years',
      salary: '$32k - $55k',
      icon: Smartphone,
      description: 'Create cross-platform mobile applications using Flutter and Dart for iOS and Android platforms.',
      requirements: [
        'Strong experience with Flutter and Dart',
        'Knowledge of mobile app architecture',
        'Experience with state management (Bloc, Provider)',
        'Understanding of mobile UI/UX principles',
        'App store deployment experience',
      ],
      responsibilities: [
        'Develop cross-platform mobile applications',
        'Implement responsive mobile designs',
        'Integrate with backend APIs',
        'Optimize app performance',
        'Handle app store submissions',
      ],
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      type: 'Remote',
      experience: '2-4 years',
      salary: '$25k - $45k',
      icon: Palette,
      description: 'Design intuitive and beautiful user interfaces and experiences for web and mobile applications.',
      requirements: [
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong understanding of design principles',
        'Experience with user research and testing',
        'Knowledge of responsive design',
        'Portfolio showcasing design work',
      ],
      responsibilities: [
        'Create wireframes and prototypes',
        'Design user interfaces for web and mobile',
        'Conduct user research and testing',
        'Collaborate with development teams',
        'Maintain design systems',
      ],
    },
    {
      id: 'marketing-intern',
      title: 'Marketing Intern',
      type: 'Remote',
      experience: '0-1 years',
      salary: '$15k - $25k',
      icon: Users,
      description: 'Support marketing initiatives including content creation, social media management, and campaign execution.',
      requirements: [
        'Strong communication skills',
        'Basic understanding of digital marketing',
        'Social media management experience',
        'Content creation skills',
        'Eagerness to learn and grow',
      ],
      responsibilities: [
        'Create content for social media',
        'Assist with marketing campaigns',
        'Conduct market research',
        'Support SEO initiatives',
        'Analyze marketing metrics',
      ],
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
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of digital solutions with us. We're looking for passionate individuals who want to make a global impact 
              while working remotely with cutting-edge technologies.
            </p>
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">100% Remote • Global Team • Flexible Hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
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
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <position.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const form = document.getElementById('application-form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' });
                      // Pre-select the position
                      const positionSelect = document.getElementById('position') as HTMLSelectElement;
                      if (positionSelect) {
                        positionSelect.value = position.id;
                      }
                    }
                  }}
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Why Work With Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Remote-First Culture',
                description: 'Work from anywhere in the world with flexible hours that suit your lifestyle.',
              },
              {
                title: 'Cutting-Edge Projects',
                description: 'Work on innovative projects using the latest technologies and AI tools.',
              },
              {
                title: 'Global Impact',
                description: 'Your work will reach clients worldwide and make a real difference.',
              },
              {
                title: 'Learning & Growth',
                description: 'Continuous learning opportunities and skill development programs.',
              },
              {
                title: 'Competitive Compensation',
                description: 'Fair and competitive salaries with performance-based bonuses.',
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible schedules and unlimited PTO to maintain healthy work-life balance.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20">
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
                Apply Now
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to join our team? Fill out the application form below and we'll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                    Position *
                  </label>
                  <select
                    {...register('position')}
                    id="position"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Select a position</option>
                    {positions.map((pos) => (
                      <option key={pos.id} value={pos.id}>
                        {pos.title}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-400">{errors.position.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                  Experience Level *
                </label>
                <select
                  {...register('experience')}
                  id="experience"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years (Entry Level)</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-400">{errors.experience.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    {...register('portfolio')}
                    type="url"
                    id="portfolio"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="https://yourportfolio.com"
                  />
                  {errors.portfolio && (
                    <p className="mt-1 text-sm text-red-400">{errors.portfolio.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    {...register('linkedin')}
                    type="url"
                    id="linkedin"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  {errors.linkedin && (
                    <p className="mt-1 text-sm text-red-400">{errors.linkedin.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-gray-300 mb-2">
                    GitHub Profile
                  </label>
                  <input
                    {...register('github')}
                    type="url"
                    id="github"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="https://github.com/yourusername"
                  />
                  {errors.github && (
                    <p className="mt-1 text-sm text-red-400">{errors.github.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-300 mb-2">
                  Expected Salary *
                </label>
                <input
                  {...register('expectedSalary')}
                  type="text"
                  id="expectedSalary"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="e.g., $50,000 - $60,000 per year"
                />
                {errors.expectedSalary && (
                  <p className="mt-1 text-sm text-red-400">{errors.expectedSalary.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Cover Letter / Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;