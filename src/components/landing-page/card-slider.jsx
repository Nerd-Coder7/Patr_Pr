import React from "react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardSliderCard from "./card-slidercard";

const CardSlider =()=>{
    // const swiperRef = useRef(null);
    // useEffect(() => {
    //     if (swiperRef.current) {
    //       const swiperWrapper = swiperRef.current.querySelector('.swiper-wrapper');
    //       if (swiperWrapper) {
    //         swiperWrapper.style.transform = 'translateX( 25% )';
    //         swiperWrapper.style.transition = 'transform 0.3s ease';
    //       }
    //     }
    //   }, []);
    return(
        <>
        <div className="pt-40 text-white 0">
        <h2 className="text-5xl mb-20 text-center">The best place for you </h2>
            <div className="card_slider_container">
                
                <div className="card_slider">
                    <Swiper 
                        // ref={swiperRef}
                        spaceBetween={24}
                        centeredSlides={false}
                        grabCursor={false}
                        loop={true}
                        slidesPerView={5}
                        navigation={true}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                              centeredSlides:false
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                            1400: {
                              slidesPerView: 3,
                              spaceBetween: 24,
                              centeredSlides:false
                            },
                          }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination,Navigation]}
                    >
                        <SwiperSlide>
                            <CardSliderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSliderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSliderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSliderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSliderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSliderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSliderCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardSlider;