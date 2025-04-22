import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const images = [
    <img
      src='/aeropuerto-malaga.webp'
      alt="Aeropuerto de Málaga"
      className="size-full object-cover object-left-bottom md:object-center"/>,
      <img
      src='/velez-malaga.webp'
      alt="Vélez-Málaga"
      className="size-full object-cover object-center-bottom md:object-center"/>,
      <img
      src='/estacion-autobus-malaga.webp'
      alt="Estación de Autobuses de Málaga"
      className="size-full object-cover object-left-bottom md:object-center"/>,
      <img
      src='/torre-del-mar.webp'
      alt="Torre del Mar"
      className="size-full object-cover object-left-bottom md:object-center"/>,
      <img
      src='/maria-zambrano-malaga.webp'
      alt="Estación Maria Zambrano de Málaga"
      className="size-full object-cover object-left-bottom md:object-center"/>,
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1500}
      className='size-full'
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className='size-full'>
          {image}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
