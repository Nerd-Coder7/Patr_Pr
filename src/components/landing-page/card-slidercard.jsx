import React from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const CardSliderCard =()=>{
    return(
        <div className="card_slider_card--main relative">
            <div className="card_slider_card">
                <div className="card_slider_card-grd">
                    <img alt="img" src="images/landing-page/card-bg.png" className="card_slider_card--bg-img " /> 
                    <div className="card_slider_card-body">
                        <VStack alignItems={'flex-start'} justifyContent={'space-between'}>
                            <div className="mb-28">
                                <h3 className="text-2xl font-normal leading-9 mb-5">Improve everyday</h3>
                                <p className="text-base leading-6 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                            <Flex className="w-full" justifyContent={'space-between'} gap={'20px'}> 
                                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFC876]">
                                    <img alt="img" src="images/landing-page/card-logo-1.svg" />
                                </span>
                                <Link className="uppercase font-source font-bold text-xs leading-5 tracking-[0.42px] flex items-center gap-5" to={'/explore'}>
                                    explore more
                                    <span className="flex items-center justify-center">
                                    <FaChevronRight />
                                    </span>
                                </Link>
                            </Flex> 
                        </VStack>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardSliderCard;