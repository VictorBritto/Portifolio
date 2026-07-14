import { motion } from 'framer-motion';
import { sections } from '../data/sections';

export const HomeSection = () => {
  return (
    <div className="space-y-16 py-8">
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Section header */}
          <div className="flex items-center gap-4">
            <p className="font-mono text-xs text-violet-400 tracking-wider uppercase whitespace-nowrap">
              {`// ${section.title.toLowerCase()}`}
            </p>
            <div className="glow-line flex-1" />
          </div>

          {/* Section content */}
          <div className="pl-0 sm:pl-4">
            {section.content}
          </div>
        </motion.section>
      ))}
    </div>
  );
};