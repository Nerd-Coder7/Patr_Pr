import { Flex } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const LogoList =()=>{
    return(
        <>
            <div className="logoList_wrapper mt-24 px-10 lg:px-12">
                <h2 className="text-white text-xs uppercase leading-4 font-space text-center tracking-[1.8px] font-normal mb-6">Helping people FIND BEST CANDIDATE</h2>
                <div className="text-white pt-12">
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    freeMode= {true}
                    allowTouchMove={ true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed= {1000}
                    modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <Flex alignItems={'center'} gap={'18px'}>
                                <img alt="img" className="w-10 h-10 object-contain object-center" src="images/landing-page/featured-logo.png" />
                                <h3 className="font-sora text-2xl font-bold leading-7">yourlogo</h3>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Flex alignItems={'center'} gap={'18px'}>
                                <img alt="img" className="w-10 h-10 object-contain object-center" src="images/landing-page/featured-logo.png" />
                                <h3 className="font-sora text-2xl font-bold leading-7">techno</h3>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Flex alignItems={'center'} gap={'18px'}>
                                <img alt="img" className="w-10 h-10 object-contain object-center" src="images/landing-page/featured-logo.png" />
                                <h3 className="font-sora text-2xl font-bold leading-7">yourlogo</h3>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Flex alignItems={'center'} gap={'18px'}>
                                <img alt="img" className="w-10 h-10 object-contain object-center" src="images/landing-page/featured-logo.png" />
                                <h3 className="font-sora text-2xl font-bold leading-7">techno</h3>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Flex alignItems={'center'} gap={'18px'}>
                                <img alt="img" className="w-10 h-10 object-contain object-center" src="images/landing-page/featured-logo.png" />
                                <h3 className="font-sora text-2xl font-bold leading-7">yourlogo</h3>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Flex alignItems={'center'} gap={'18px'}>
                                <img alt="img" className="w-10 h-10 object-contain object-center" src="images/landing-page/featured-logo.png" />
                                <h3 className="font-sora text-2xl font-bold leading-7">techno</h3>
                            </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Flex alignItems={'center'} gap={'18px'}>
                                <img alt="img" className="w-10 h-10 object-contain object-center" src="images/landing-page/featured-logo.png" />
                                <h3 className="font-sora text-2xl font-bold leading-7">yourlogo</h3>
                            </Flex>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default LogoList;