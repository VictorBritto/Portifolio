import { motion, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PhotoGallery } from '../components/PhotoGallery';
import { HomeSection } from '../components/HomeSection';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import { TypeAnimation } from 'react-type-animation';
import { Tecnologia } from '../components/Tecnologia';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;

      cursorX.set(x);
      cursorY.set(y);
    }

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
    }
  }, []);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  usePageTitle('Home');

  return (
    <>
      <div style={{ cursor: 'none' }}>
        <FadeInSection>
          <section className="space-y-4">
            <motion.div
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'Olá! Eu sou o Victor Gabriel.',
                ]}
                wrapper="h1"
                cursor={true}
                repeat={0}
                speed={50}
                style={{ display: 'inline-block' }}
              />
            </motion.div>
            <motion.p
              className="text-justify sm:text-base leading-relaxed text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Sou um desenvolvedor movido por tecnologia, inovação e aprendizado contínuo.
              Com experiência em TypeScript, React e Dart, trabalho do código ao design para transformar ideias em soluções digitais completas.
              Tenho foco em funcionalidade, estética e experiência do usuário, garantindo produtos úteis e envolventes.
              Estou pronto para dar o próximo passo na carreira e contribuir com resultados criativos, eficientes e de alto impacto.
            </motion.p>
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
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `20px`,
          height: `20px`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          x: cursorX,
          y: cursorY,
          mixBlendMode: 'difference',
          backgroundColor: 'white',
        }}
      ></motion.div>
    </>
  );
};

export default Home; 