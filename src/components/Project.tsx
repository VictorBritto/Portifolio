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
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovered) return;
    
    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
    
    setMouseOffset({
      x: moveX,
      y: moveY
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative overflow-visible py-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Título do Projeto */}
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group py-3 px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
          <motion.svg
            className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200 flex-shrink-0 ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </div>
      </motion.a>

      {/* Preview Flutuante Único */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -60 : -40,
          scale: isHovered ? 1 : 0,
          x: isHovered ? mouseOffset.x : 0,
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.34, 1.56, 0.64, 1],
          opacity: { duration: 0.2, delay: 0.1 },
          x: { duration: 0.5, ease: "easeOut" }
        }}
        className="absolute left-1/2 bottom-full mb-4 pointer-events-none"
        style={{
          transform: 'translateX(-50%)',
          zIndex: 50,
        }}
      >
        {/* Card Flutuante com Efeito 3D */}
        <motion.div
          animate={{
            y: isHovered ? [0, -12, 0] : 0,
            rotateX: isHovered ? (mouseOffset.y * 2) : 0,
            rotateY: isHovered ? (mouseOffset.x * 2) : 0,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 0.5, ease: "easeOut" },
            rotateY: { duration: 0.5, ease: "easeOut" },
          }}
          style={{
            perspective: 1200,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-56 h-64 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Imagem Background */}
          <motion.img
            src={project.image}
            alt={`Preview de ${project.title}`}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? 'brightness(0.7)' : 'brightness(0.5)',
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Overlay Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-black/35 via-black/10 dark:via-transparent to-transparent" />

          {/* Conteúdo Flutuante */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-between p-5 text-white"
            animate={{
              opacity: isHovered ? 1 : 0.3,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Título no Topo */}
            <div>
              <motion.h4
                className="text-lg font-bold leading-tight text-white" 
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4)' }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project.title}
              </motion.h4>
            </div>

            {/* Icone no Centro */}
            <motion.div
              className="flex justify-center items-center"
              animate={{
                scale: isHovered ? 1 : 0.5,
                opacity: isHovered ? 1 : 0.3,
                rotate: isHovered ? 0 : -90,
              }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l6-6m0 0h-6m6 0v6"
                />
              </svg>
            </motion.div>

            {/* Badge de Tecnologias na Base */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {project.tech.slice(0, 2).map((tech) => (
                <span
                  key={tech.name}
                  className="text-xs font-bold px-2.5 py-1.5 rounded-full bg-white/85 dark:bg-black/75 backdrop-blur-md border border-white/60 dark:border-white/20 text-gray-900 dark:text-white"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};