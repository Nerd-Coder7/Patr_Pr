import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Suggestions2 =()=>{
    return(
        <>
            <div className="px-10 xl:px-120px py-40 relative z-[1]">
                <Flex justifyContent={'space-between'} gap={'30px'} alignItems={'flex-end'}>
                    <div className="max-w-xl">
                        <VStack gap={'24px'} alignItems={'flex-start'} color={'#fff'}>
                            <h3 className="text-[40px] font-normal leading-[60px] max-w-[470px]">PATR for seamless assestment</h3>
                            <ul className="grid gap-6 mt-3 max-w-96">
                                <li className="">
                                    <div className="flex items-start text-normal gap-5">
                                    <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                                    Evaluate huge number of candidates
                                    </div>
                                    <p className="my-3 text-base leading-6 font-light text-[#757185]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </li>
                                <li className="flex items-start text-normal gap-5">
                                    <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                                    Customize by role !
                                </li>
                                <li className="flex items-start text-normal gap-5">
                                    <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                                    Find the most skilled !
                                </li>
                            </ul>
                            <Link to={'/try-now'} className="primary-btn">try it now</Link>
                        </VStack>
                    </div>
                    <div className="absolute right-0 bottom-12 max-w-[calc(100%-340px)] z-[-1]">
                        <img alt="img" src="images/landing-page/suggestion2.png" className="max-w-full" />
                    </div>
                </Flex>
            </div>
        </>
    )
}
export default Suggestions2;