import { VStack } from "@chakra-ui/react";
import React from "react";
import TestimonialCard from "./testimonial-card";

const TestimonialSection =()=>{
    return(
        <>
            <div className="px-10 xl:px-120px relative z-[1]">
                <VStack color={'#fff'} gap={'16px'} className="pt-32 mb-20">
                    <p className="subheading">Ready to get started</p>
                    <h3 className="text-5xl leading-[60px] font-normal">What the community is saying</h3>
                </VStack>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </>
    )
}
export default TestimonialSection;