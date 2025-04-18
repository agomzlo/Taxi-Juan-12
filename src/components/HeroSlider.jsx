import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const images = [
    '/aeropuerto-malaga.webp',
    '/velez-malaga.webp',
    '/torre-del-mar.webp',
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
          <img
            src={image}
            alt="Aeropuerto de Málaga"
            className="size-full object-cover object-bottom"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
