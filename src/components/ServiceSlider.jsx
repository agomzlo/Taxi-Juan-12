import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import {services, icons} from "../utils.js";

const ServiceSlider = () => {
  return (
    <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={2}
        >
            {services.map((service, index) => {
                    const IconComponent = icons[service.image];

                    return (
                        <SwiperSlide
                            key={index}
                            style={{ height: 'auto' }}
                        >
                            <span class="flex flex-row justify-between items-center p-4 gap-4 border border-gray-200 rounded-md">
                                <IconComponent class="size-20" />
                                <div class="flex-1 flex-col gap-2">
                                    <h2 class="uppercase font-semibold">{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </span>
                        </SwiperSlide>
                )})
            }
        </Swiper>
  );
};

export default ServiceSlider;
