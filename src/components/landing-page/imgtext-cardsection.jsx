import { Stack } from "@chakra-ui/react";
import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";

const ImgTextCardSection =()=>{
    return(
        <div className="ImgTextCardSection px-10 xl:px-120px">
            <Stack className="text-center text-white" gap={'16px'}> 
                <h3 className="text-5xl leading-[60px] font-normal">PATR made for all cybersecurity.</h3>
                <p className="text-colorText font-light text-base leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            </Stack>
            <div className="grid grid-cols-2 gap-5 mt-20">
                <div className="card_1 w-full flex items-center justify-between col-span-2 py-20 px-10 2xl:px-20 rounded-3xl border border-solid border-white/10">
                    <div className="w-full flex justify-center pr-10">
                        <img  src="images/landing-page/service-hand.png" alt="service-hand" />
                    </div>
                    <div className="max-w-[277px] text-white">
                        <Stack gap={'16px'}>
                            <p className="text-3xl leading-10 font-normal">Easy to connect</p>
                            <p className="text-base text-colorText font-light leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </Stack>
                        <ul className="billing_list mt-12">
                            <li className="flex items-center text-normal gap-4 font-light">
                                <span className="flex items-center justify-center text-3xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center text-normal gap-4 font-light">
                                <span className="flex items-center justify-center text-3xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center text-normal gap-4 font-light">
                                <span className="flex items-center justify-center text-3xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card__2 rounded-3xl overflow-hidden relative border border-solid border-white/10">
                    <div className="chatbubble">Lorem ipsum dolor sit amet</div>
                    <img  className="w-full h-full object-cover" src="images/landing-page/cardface.png" alt="" />
                    <Stack className="absolute bottom-0 left-0 p-14" gap={'16px'}>
                        <h3 className="text-3xl text-white leading-10 font-normal">Best Place for <br /> Cybersecurity</h3>
                        <p className="text-colorText text-base leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </Stack>
                </div>
                <div className="card__2 rounded-3xl overflow-hidden relative pt-16 bg-[#15131D] grid content-between">
                    <div className="px-12">
                        <Stack className="" gap={'16px'}>
                            <h3 className="text-3xl text-white leading-10 font-normal">Find and Hire</h3>
                            <p className="text-colorText text-base leading-6 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  </p>
                        </Stack>
                        <div className="flex flex-wrap justify-between card__icons">
                            <span><img alt="img" src="images/landing-page/recording-03.svg" /></span>
                            <span><img alt="img" src="images/landing-page/recording-01.svg" /></span>
                            <span><img alt="img" src="images/landing-page/disc-02.svg" /></span>
                            <span><img alt="img" src="images/landing-page/Solid.svg" /></span>
                            <span><img alt="img" src="images/landing-page/Solid-1.svg" /></span>

                        </div>
                    </div>
                    <div className="p-3">
                        <div className="rounded-2xl bg-[#0E0C15] overflow-hidden">
                            <img alt="img" src="images/landing-page/handcode.png" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImgTextCardSection;