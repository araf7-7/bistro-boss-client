import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Swipper = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src="https://i.ibb.co/wJTKYxj/slide2.jpg" alt="" />
            <h1 className='uppercase text-4xl font-cinzel text-white -mt-12 text-center'>Pizzas</h1>
            </SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/QKK023c/slide3.jpg" alt="" />
            <h1 className='uppercase text-4xl font-cinzel  text-white -mt-12 text-center'>Soups</h1>
            </SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/DMWvhH5/slide4.jpg" alt="" />
            <h1 className='uppercase text-4xl font-cinzel  text-white -mt-12 text-center'>Pastries</h1>
            </SwiperSlide>
            <SwiperSlide><img className='lg:h-[405px]' src="https://i.ibb.co/zZx2cSV/Low-carb-vanilla-panna-cotta-with-strawberry-rhubarb-sauce-h.jpg" alt="" />
            <h1 className='uppercase text-4xl font-cinzel  text-white -mt-12 text-center'>Cakes</h1>
            </SwiperSlide>
            <SwiperSlide><img className='lg:h-[405px]' src="https://i.ibb.co/Rbvgm4f/DD-213.jpg" alt="" />
            <h1 className='uppercase text-4xl font-cinzel  text-white -mt-12 text-center'>Pizzas</h1>
            </SwiperSlide>
            <SwiperSlide><img className='lg:h-[405px]' src="https://i.ibb.co/9hByhWF/DD-128.jpg" alt="" />
            <h1 className='uppercase text-4xl font-cinzel   text-white -mt-12 text-center'>Pastas</h1>
            </SwiperSlide>

        </Swiper>
    );
};

export default Swipper;