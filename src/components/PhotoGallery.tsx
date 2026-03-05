import { motion } from 'framer-motion';
import { photos } from '../data/photos';

interface PhotoGalleryProps {
  isMobile: boolean;
}

export const PhotoGallery = ({ }: PhotoGalleryProps) => {
  const mainPhoto = photos[2]; 

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full my-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
        {/* Texto à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Sobre Mim
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Sou o Victor Gabriel, um desenvolvedor fascinado pelo universo da tecnologia e focado em inovação contínua. 
            Conciliando a reta final da minha formação acadêmica com a prática intensiva, dedico-me a transformar ideias 
            complexas em soluções digitais robustas. Minha missão é criar aplicações que não apenas funcionem perfeitamente, 
            mas que também entreguem uma excelente experiência e resolvam problemas reais de forma inteligente.
          </p>
        </motion.div>

        {/* Foto à direita */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
            {/* Fundo Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400" />
            
            {/* Foto */}
            <img
              src={mainPhoto.image}
              alt="Victor Gabriel"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-900 dark:text-white backdrop-blur-md">
              💻 Dev
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
