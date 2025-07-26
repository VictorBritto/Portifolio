import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

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
    <div className=" py-10 px-4">
      <h1 className="text-2xl font-bold text-white text-center mb-10">TECNOLOGIAS</h1>
      
    <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        }}
        speed={1900}
        slidesPerView={window.innerWidth < 640 ? 2 : 3}
        modules={[ Autoplay ]}
        className="max-w-5xl mx-auto"
      >

        {techs.map((tech, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={tech.img} alt={tech.alt} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
