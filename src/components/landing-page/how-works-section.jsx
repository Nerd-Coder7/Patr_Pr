import { Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HowWorksSection =()=>{
    return(
        <div className="px-10 xl:px-120px py-40 featured_tabs">
            <Tabs>
                <TabPanels className="mb-20">
                    <TabPanel p='0'>
                        <div className="flex flex-wrap justify-between items-center"> 
                            <div className="w-1/2">
                                <img alt="img" src="images/landing-page/card-img-1.png" />
                            </div>
                            <div className="w-full max-w-[410px]">
                                <Stack gap={'24px'} alignItems={'flex-start'} color={'#fff'}>
                                    <p className="subheading">how it work: 01.</p>
                                    <h3 className="text-5xl leading-[60px] font-normal">Sign Up</h3>
                                    <p className="font-light text-base leading-6 text-colorText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <Link className="primary-btn mt-4">REGISTER NOW</Link>
                                </Stack>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel p='0'>
                        <div className="flex flex-wrap justify-between items-center"> 
                            <div className="w-1/2">
                                <img alt="img" src="images/landing-page/card-img-1.png" />
                            </div>
                            <div className="w-full max-w-[410px]">
                                <Stack gap={'24px'} alignItems={'flex-start'} color={'#fff'}>
                                    <p className="subheading">how it work: 02.</p>
                                    <h3 className="text-5xl leading-[60px] font-normal">Explore and Create Task</h3>
                                    <p className="font-light text-base leading-6 text-colorText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <Link className="primary-btn mt-4">REGISTER NOW</Link>
                                </Stack>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel p='0'>
                        <div className="flex flex-wrap justify-between items-center"> 
                            <div className="w-1/2">
                                <img alt="img" src="images/landing-page/card-img-1.png" />
                            </div>
                            <div className="w-full max-w-[410px]">
                                <Stack gap={'24px'} alignItems={'flex-start'} color={'#fff'}>
                                    <p className="subheading">how it work: 03.</p>
                                    <h3 className="text-5xl leading-[60px] font-normal">Get Results and Make an Assessment</h3>
                                    <p className="font-light text-base leading-6 text-colorText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <Link className="primary-btn mt-4">REGISTER NOW</Link>
                                </Stack>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel p='0'>
                        <div className="flex flex-wrap justify-between items-center"> 
                            <div className="w-1/2">
                                <img alt="img" src="images/landing-page/card-img-1.png" />
                            </div>
                            <div className="w-full max-w-[410px]">
                                <Stack gap={'24px'} alignItems={'flex-start'} color={'#fff'}>
                                    <p className="subheading">how it work: 04.</p>
                                    <h3 className="text-5xl leading-[60px] font-normal">Hire Your  Best Cybersecurity</h3>
                                    <p className="font-light text-base leading-6 text-colorText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <Link className="primary-btn mt-4">REGISTER NOW</Link>
                                </Stack>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
                <TabList color={'#fff'} gap={'24px'} border={'0'} alignItems={'flex-stretch'}>
                    <Tab p='0' className="flex-1" justifyContent={'flex-start'}>
                        <Stack justifyContent={'flex-start'} alignItems={'flex-start'} gap={'4px'} textAlign={'left'}>
                            <div>
                                <p className="font-source text-xs font-semibold leading-5 tracking-[0.42px] text-[#757185]">01.</p>
                                <p className="leading-8 text-2xl font-normal">Sign up</p>
                            </div>
                            <p className="mt-[6px] text-left tab_list_content text-colorText font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </Stack>
                    </Tab>
                    <Tab p='0' className="flex-1" justifyContent={'flex-start'}>
                        <Stack justifyContent={'flex-start'} alignItems={'flex-start'} gap={'4px'} textAlign={'left'}>
                            <div>
                                <p className="font-source text-xs font-semibold leading-5 tracking-[0.42px] text-[#757185]">02.</p>
                                <p className="leading-8 text-2xl font-normal">Explore and Create Evaluation</p>
                            </div>
                            <p className="mt-[6px] text-left tab_list_content text-colorText font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </Stack>
                    </Tab>
                    <Tab p='0' className="flex-1" justifyContent={'flex-start'}>
                        <Stack justifyContent={'flex-start'} alignItems={'flex-start'} gap={'4px'} textAlign={'left'}>
                            <div>
                                <p className="font-source text-xs font-semibold leading-5 tracking-[0.42px] text-[#757185]">03.</p>
                                <p className="leading-8 text-2xl font-normal">Get Results and Make an Assessment</p>
                            </div>
                            <p className="mt-[6px] text-left tab_list_content text-colorText font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </Stack>
                    </Tab>
                    <Tab p='0' className="flex-1" justifyContent={'flex-start'}>
                        <Stack justifyContent={'flex-start'} alignItems={'flex-start'} gap={'4px'} textAlign={'left'}>
                            <div>
                                <p className="font-source text-xs font-semibold leading-5 tracking-[0.42px] text-[#757185]">03.</p>
                                <p className="leading-8 text-2xl font-normal">Hire Your  Best Cybersecurity</p>
                            </div>
                            <p className="mt-[6px] text-left tab_list_content text-colorText font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </Stack>
                    </Tab>
                </TabList>
                
            </Tabs>
        </div>
    )
}
export default HowWorksSection;