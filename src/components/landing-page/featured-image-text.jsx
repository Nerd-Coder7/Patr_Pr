import { Flex, VStack } from "@chakra-ui/react";
import React from "react";

const FeaturedImgText =()=>{
    return(
        <>
            <div className="px-10 xl:px-120px mt-32 pb-6">
                <div className="flex flex-wrap">
                    <div className="w-1/2">
                        <div className="pt-20">
                            <h2 className="text-6xl leading-[72px] mb-8 font-normal text-white">Future cybersecurity</h2>
                            <p className="text-xl leading-9 font-sora font-light text-colorText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
                            <VStack alignItems={'flex-start'} gap={'24px'} color={'#fff'} className="mt-20 pl-14 border-l-2 border-solid border-[#E87A95]">
                                <p className="text-[32px] leading-10 font-normal">“It’s not just that is fast, the scalability and ease of use is simply unparalleled, truly mindblowing”</p>
                                <Flex gap={'16px'} alignItems={'center'}>
                                    <img alt="img" className="w-16 h-16 rounded-full object-contain object-center" src="images/landing-page/author-avatar.png" />
                                    <VStack gap={'6px'} alignItems={'flex-start'}>
                                        <p className="font-extrabold text-base leading-none">Markus Freeman</p>
                                        <p className="text-[#5E6B7E] leading-none">Dev Ops - Company</p>
                                    </VStack>
                                </Flex >
                            </VStack>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="featured_img_right_col pl-10 2xl:pl-[120px]">
                            <VStack gap={'10px'} alignItems={'center'} className="featured_img_right_inner  py-14 px-12 bg-[#040404]/80 rounded-[32px]">
                                <Flex className="w-full" justifyContent={'space-between'}>
                                    <h3 className="text-[40px] font-extrabold leading-none text-[#5E6B7E]">PATR</h3>
                                    <img alt="img" src="images/landing-page/logo-icon.png"  className="w-8 h-8 object-contain object-center" />
                                </Flex>
                                <img alt="img" className="block mx-auto" src="images/landing-page/fetaured-img-1.png" />
                                <Flex gap={'20px'} alignItems={'center'} color={'#fff'}>
                                    <p className="text-2xl leading-7 font-normal">Align with</p>
                                    <img alt="img" className="block mx-auto" src="images/landing-page/featured-img-2.png" />
                                </Flex>
                                <Flex gap={'40px'} color={'#fff'} className="mt-8 flex-wrap xl:flex-nowrap" >
                                    <div className="w-full 2xl:w-1/2 ">
                                        <p className="leading-5">More than</p>
                                        <p className="text-[80px] leading-[88px]">40</p>
                                        <p className="text-xl leading-6">CYBERSECURITY EVALUATION</p>
                                    </div>
                                    <div className="w-full 2xl:w-1/2 ">
                                        <p className="leading-5">More than</p>
                                        <p className="text-[80px] leading-[88px]">651</p>
                                        <p className="text-xl leading-6">CYBERSECURITY QUESTIONS</p>
                                    </div>
                                </Flex>
                            </VStack>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FeaturedImgText;