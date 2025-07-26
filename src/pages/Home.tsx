import { motion } from 'framer-motion';
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

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  usePageTitle('Home');
  

  return (
    <div>
      <FadeInSection>
        <section className="space-y-4">
          <motion.div
            className="text-2xl sm:text-3xl font-bold"
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
            className="text-justify sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Sou um desenvolvedor apaixonado por tecnologia, inovação e aprendizado contínuo.
            Cursando Sistemas de Informação, estou pronto para iniciar minha carreira aplicando na prática os conhecimentos adquiridos, 
            com foco em soluções criativas e eficientes.
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
    
  );
};

export default Home; 