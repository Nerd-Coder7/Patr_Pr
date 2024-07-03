import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SuggestionCard from "./suggestion-cards";

const Suggestions =()=>{
    return(
        <div className="py-40 px-10 xl:px-120px relative suggestion_section">
            <img alt="img" className="suggestion_bg absolute w-full h-full object-contain object-center top-0 right-0" src="images/landing-page/solar-part.png" />
            <div className="suggestion_slider">
                <Swiper 
                    navigation={true} 
                    loop={true}
                    autoHeight={true}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <SuggestionCard ques={`Want to hire a Cybersecurity expert ?`} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SuggestionCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SuggestionCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default Suggestions;