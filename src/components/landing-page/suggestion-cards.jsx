import { VStack } from "@chakra-ui/react";
import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const SuggestionCard =({ques})=>{
    return(
        <div className="max-w-xl">
            <VStack gap={'24px'} alignItems={'flex-start'} color={'#fff'}>
                <h3 className="text-[40px] font-normal leading-[60px] max-w-[470px]">{ques}</h3>
                <p className="text-[40px] font-extralight leading-9 text-colorText">Try PATR!</p>
                <ul className="grid gap-6 mt-3">
                    <li className="flex items-start text-normal gap-5">
                        <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                        Evaluate huge number of candidates
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
                <Link to={'/how-it-works'} className="primary-btn">see how it work</Link>
            </VStack>
        </div>
    )
}
export default SuggestionCard;