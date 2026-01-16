import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: { name: string; color: string; }[];
    link: string;
    image: string;
  };
}

export const Project = ({ project }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-visible">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ overflow: 'visible' }}
      >
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group py-2"
          whileHover={{ scale: 1.05 }}
          style={{ transformOrigin: 'left' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <h3 className="font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              {project.tech.map((tech) => (
                <span
                  key={tech.name}
                  style={{ backgroundColor: tech.color }}
                  className={`text-xs px-2 py-1 rounded-full bg-${tech.color}-500 text-white`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      </div>
      {/* Preview Flutuante */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
          scale: isHovered ? 1 : 0.95
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden pointer-events-none max-h-64"
        style={{
          zIndex: 50,
          minWidth: '320px',
          maxWidth: '500px'
        }}
      >
        {/* Imagem de Preview */}
        <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
          <img
            src={project.image}
            alt={`Preview de ${project.title}`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Rodapé do Preview */}
        <div className="p-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Clique para abrir o projeto
            </p>
            <svg
              className="w-4 h-4 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      </motion.div>

    </div>
  );
};