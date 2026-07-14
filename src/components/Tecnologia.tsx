import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import react from "../assets/images/react.png";
import flutter from "../assets/images/flutter.webp";
import js from "../assets/images/js.png";
import php from "../assets/images/php.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import bootstrap from "../assets/images/bootstrap.png";
import figma from "../assets/images/figma.png";

const techs = [
  { img: react, alt: "React" },
  { img: flutter, alt: "Flutter" },
  { img: js, alt: "JavaScript" },
  { img: php, alt: "PHP" },
  { img: html, alt: "HTML" },
  { img: css, alt: "CSS" },
  { img: bootstrap, alt: "Bootstrap" },
  { img: figma, alt: "Figma" },
];

export function Tecnologia() {
  return (
    <div className="py-16 px-4">
      <p className="font-mono text-xs text-violet-400 tracking-wider uppercase text-center mb-2">
        {'// stack'}
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white tracking-tight">
        Tecnologias<span className="text-violet-400">.</span>
      </h2>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={2500}
        slidesPerView={window.innerWidth < 640 ? 3 : 5}
        modules={[Autoplay]}
        className="max-w-4xl mx-auto"
      >
        {techs.map((tech, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center py-4">
            <div className="group flex flex-col items-center gap-3 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl liquid-glass p-3 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tech.img}
                  alt={tech.alt}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                />
              </div>
              <span className="text-xs text-gray-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.alt}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
