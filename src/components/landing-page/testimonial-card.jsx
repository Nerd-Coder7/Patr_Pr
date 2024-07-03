import { Avatar, Flex, Stack } from "@chakra-ui/react";
import React from "react";

const TestimonialCard =()=>{
    return(
        <>
            <div className="testimonialCard text-white bg-[#0e0c15]">
                <p className="p-6 font-source font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                <Flex gap={'20px'} justifyContent={'space-between'} p="6" className="bg-[#15131d] items-center">
                    <Stack gap={'0'}>
                        <h4 className="text-sm">David Chen</h4>
                        <p className="text-xs font-extralight text-colorText tracking-[0.42px]">Engineer</p>
                    </Stack>
                    <Avatar borderRadius={'6px'} name='David Chen' src='https://bit.ly/dan-abramov' />
                </Flex>
            </div>  
        </>
    )
}
export default TestimonialCard;