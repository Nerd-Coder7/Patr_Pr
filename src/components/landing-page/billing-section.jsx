import { Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const BillingSection =()=>{
    return(
        <div className="px-10 xl:px-120px pt-16 billing_section">
            <img alt="img" className="w-full max-w-full block" src="images/landing-page/billing-top-img.png"  />
            <VStack color={'#fff'} gap={'16px'} className="pt-24 mb-20">
                <p className="subheading">Get started with PATR</p>
                <h3 className="text-5xl leading-[60px] font-normal">Pay once, use forever</h3>
            </VStack>
            <div className="grid grid-cols-3 items-center gap-6">
                <div className="w-full bg-[#0E0C15] rounded-[32px] border border-solid border-white/10 p-8 text-white">
                    <Stack gap={'16px'}>
                        <h3 className="text-[32px] leading-[48px]">Basic</h3>
                        <p className="font-light text-white/50 text-base leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </Stack>
                    <p className="text-[88px] font-semibold leading-[88px] flex items-center mt-6"><small className="text-4xl leading-[60px] font-normal">$</small> 20</p>
                    <Link to={''} className="primary-btn primary-btn-white !flex my-8">get started</Link>
                    
                    <ul className="mt-3 billing_list">
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                    </ul>
                </div>
                <div className="w-full bg-[#0E0C15] rounded-[32px] border border-solid border-white/10 p-8 py-12 text-white">
                    <Stack gap={'16px'}>
                        <h3 className="text-[32px] leading-[48px]">Premium</h3>
                        <p className="font-light text-white/50 text-base leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </Stack>
                    <p className="text-[88px] font-semibold leading-[88px] flex items-center mt-6"><small className="text-4xl leading-[60px] font-normal">$</small> 90</p>
                    <Link to={''} className="primary-btn primary-btn-white !flex my-8">get started</Link>
                    
                    <ul className="mt-3 billing_list">
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                    </ul>
                </div>
                <div className="w-full bg-[#0E0C15] rounded-[32px] border border-solid border-white/10 p-8 text-white">
                    <Stack gap={'16px'}>
                        <h3 className="text-[32px] leading-[48px]">Enterprise</h3>
                        <p className="font-light text-white/50 text-base leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </Stack>
                    <p className="text-[88px] font-semibold leading-[88px] flex items-center mt-6 opacity-0 invisible"><small className="text-4xl leading-[60px] font-normal">$</small> 20</p>
                    <Link to={''} className="primary-btn my-8 !flex">contact us</Link>
                    
                    <ul className="mt-3 billing_list">
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                        <li className="flex items-start text-normal gap-4 font-light">
                            <span className="flex items-center justify-center text-2xl text-[#AC6AFF]"><PiCheckCircleFill /></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-20">
                <Link className="text-white font-source uppercase font-bold text-xs tracking-[0.42px] underline" to={''}>see the full details</Link>
            </div>
        </div>
    )
}
export default BillingSection;