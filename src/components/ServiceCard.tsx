import React from "react";
import { motion } from "framer-motion";

// FIX: Lucide icon type
type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  popular = false,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border rounded-2xl p-6 h-full ${
        popular
          ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
          : "border-gray-700/50 hover:border-purple-500/30"
      } transition-all duration-300`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex items-center space-x-3 mb-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            popular
              ? "bg-gradient-to-r from-purple-600 to-pink-600"
              : "bg-purple-500/10 border border-purple-500/20"
          }`}
        >
          <Icon className={`w-6 h-6 ${popular ? "text-white" : "text-purple-400"}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-purple-400 font-semibold">{price}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-300">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
          popular
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
            : "border border-purple-500 text-purple-400 hover:bg-purple-500/10"
        }`}
      >
        Get Quote
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
