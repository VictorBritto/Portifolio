import { motion } from 'framer-motion';
import { photos } from '../data/photos';

interface PhotoGalleryProps {
  isMobile: boolean;
}

export const PhotoGallery = ({}: PhotoGalleryProps) => {
  const mainPhoto = photos[2];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="w-full py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-5"
        >
          <p className="font-mono text-xs text-cyan-400 tracking-wider uppercase">{'// sobre mim'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Quem é o Victor<span className="text-cyan-400">?</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Sou o Victor Gabriel, um desenvolvedor fascinado pelo universo da tecnologia 
            e focado em inovação contínua. Conciliando a reta final da minha formação 
            acadêmica com a prática intensiva, dedico-me a transformar ideias complexas 
            em soluções digitais robustas.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Minha missão é criar aplicações que não apenas funcionem perfeitamente, 
            mas que também entreguem uma excelente experiência e resolvam problemas 
            reais de forma inteligente.
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 group">
            {/* Glow behind photo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-pink-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden liquid-glass">
              <img
                src={mainPhoto.image}
                alt="Victor Gabriel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
              
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
