import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: { name: string; color: string; }[];
    link: string;
    previewLink?: string; // Optional field specifically for live preview
    image: string;
  };
}

export const Project = ({ project }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { damping: 25, stiffness: 120 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { damping: 25, stiffness: 120 });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
    ref.current.style.setProperty('--mouse-x', `${(e.clientX - rect.left) / rect.width * 100}%`);
    ref.current.style.setProperty('--mouse-y', `${(e.clientY - rect.top) / rect.height * 100}%`);
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPreviewOpen]);

  return (
    <>
      <motion.div
        ref={ref}
        className="block relative group w-full"
        style={{ perspective: 1000 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className={`relative rounded-2xl overflow-hidden liquid-glass transition-all duration-500 border border-white/5 ${
            isHovered ? 'shadow-[0_0_40px_rgba(34,211,238,0.15)] border-cyan-500/30' : 'shadow-xl'
          }`}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Glare effect */}
          <div className="glare-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row">
            {/* Image Area */}
            <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden relative border-b sm:border-b-0 sm:border-r border-white/5 bg-[#030a15]">
              <img
                src={project.image}
                alt={`Preview de ${project.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#030a15] via-[#030a15]/20 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2">
                  {/* Live Preview Button */}
                  {project.previewLink && (
                    <button
                      onClick={() => setIsPreviewOpen(true)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/30 hover:border-cyan-400 text-cyan-400 text-xs font-mono font-semibold transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      LIVE PREVIEW
                    </button>
                  )}
                  {/* External Link Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                    title="Abrir projeto em nova aba"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech.name}
                    className="text-[11px] font-mono font-medium px-3 py-1 rounded-lg bg-[#030a15] text-cyan-100/60 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all duration-300"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ─── Interactive Live Preview Modal ─── */}
      <AnimatePresence>
        {isPreviewOpen && project.previewLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#030a15]/90 backdrop-blur-md"
              onClick={() => setIsPreviewOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl h-[85vh] liquid-glass rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.15)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#030a15]/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-gray-400">
                    Preview: {project.title}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.previewLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    Abrir em nova aba ↗
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Iframe Container */}
              <div className="flex-1 w-full bg-white relative">
                {/* Loading Indicator (shows while iframe loads) */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#030a15]">
                  <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                </div>
                
                <iframe
                  src={project.previewLink}
                  title={`Live preview of ${project.title}`}
                  className="absolute inset-0 w-full h-full border-none z-10"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};