import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  techStack: string[];
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  techStack,
  category,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 rounded-2xl overflow-hidden transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-3">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </motion.a>
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;