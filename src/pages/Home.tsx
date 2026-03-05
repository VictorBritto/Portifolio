import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PhotoGallery } from '../components/PhotoGallery';
import { HomeSection } from '../components/HomeSection';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import { Tecnologia } from '../components/Tecnologia';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {

      setIsMobile(window.innerWidth < 640);

  }, []);


  usePageTitle('Home');

  return (
    <>
      <div>
        {/* Hero Section Melhorada */}
        <FadeInSection>
          <section className="min-h-screen flex flex-col items-center justify-start pt-20 space-y-4">
            {/* Nome com Gradiente */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Olá! Eu sou
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 120 }}
                  className="gradient-text-animated block mt-2"
                >
                  Victor Gabriel
                </motion.span>
              </h1>

              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-gray-400 font-medium">
                Desenvolvedor Front-End
              </p>

              {/* Descrição Compacta */}
              <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Desenvolvedor focado em TypeScript, React e Dart. Transformo ideias em soluções digitais completas, 
                unindo código eficiente e ótima experiência do usuário para gerar resultados de alto impacto.
              </p>
            </motion.div>

            {/* Botões de CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >         
            </motion.div>
            

            {/* Chevron para Scroll - animação de atenção */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: [0, 12, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.8 },
                y: { duration: 1.2, repeat: Infinity, repeatDelay: 0.8 },
                scale: { duration: 1.2, repeat: Infinity, repeatDelay: 0.8 },
              }}
              className="mt-16 cursor-pointer"
              aria-label="Rolar para baixo"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <svg className="w-8 h-8 text-gray-400 hover:text-purple-400 transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <PhotoGallery isMobile={isMobile} />
        </FadeInSection>

        <FadeInSection>
          <Tecnologia />
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <HomeSection />
        </FadeInSection>

      </div>
    </>
  );
};

export default Home; 