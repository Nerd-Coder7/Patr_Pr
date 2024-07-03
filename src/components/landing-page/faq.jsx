import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const FaqSection =()=>{
    return(
        <div className="px-10 xl:px-120px py-40">
            <Flex justifyContent={'space-between'} alignItems={'flex-start'} gap={'50px'}>
                <div className="w-1/2 text-white">
                    <h3 className="text-5xl leading-[60px]">Frequently asked questions</h3>
                    <p className="leading-7 font-extralight mt-5">Haven't found what you're looking for? <Link className="font-normal">Contact us</Link></p>
                </div>
                <div className="w-1/2">
                    <Accordion allowToggle color={'#fff'}>
                        
                        <AccordionItem border={'0'}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton px="0" py="20px"> 
                                    <Box as='span' flex='1' textAlign='left' className="text-lg font-light">
                                    Lorem ipsum dolor sit amet
                                    </Box>
                                    {isExpanded ? (
                                    <MinusIcon fontSize='15px' />
                                    ) : (
                                    <AddIcon fontSize='15px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel px="0" pb="20px" className="text-colorText font-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                </AccordionPanel>
                                </>
                                )}
                        </AccordionItem>
                        <AccordionItem borderColor={'rgb(255 255 255 / 0.1)'}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton px="0" py="20px" > 
                                    <Box as='span' flex='1' textAlign='left' className="text-lg font-light">
                                    Lorem ipsum dolor sit amet
                                    </Box>
                                    {isExpanded ? (
                                    <MinusIcon fontSize='15px' />
                                    ) : (
                                    <AddIcon fontSize='15px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel px="0" pb="20px" className="text-colorText font-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                </AccordionPanel>
                                </>
                                )}
                        </AccordionItem>
                        <AccordionItem borderColor={'rgb(255 255 255 / 0.1)'}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton px="0" py="20px" > 
                                    <Box as='span' flex='1' textAlign='left' className="text-lg font-light">
                                    Lorem ipsum dolor sit amet
                                    </Box>
                                    {isExpanded ? (
                                    <MinusIcon fontSize='15px' />
                                    ) : (
                                    <AddIcon fontSize='15px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel px="0" pb="20px" className="text-colorText font-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                </AccordionPanel>
                                </>
                                )}
                        </AccordionItem>
                        <AccordionItem borderColor={'rgb(255 255 255 / 0.1)'}>
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton px="0" py="20px" > 
                                    <Box as='span' flex='1' textAlign='left' className="text-lg font-light">
                                    Lorem ipsum dolor sit amet
                                    </Box>
                                    {isExpanded ? (
                                    <MinusIcon fontSize='15px' />
                                    ) : (
                                    <AddIcon fontSize='15px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel px="0" pb="20px" className="text-colorText font-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                </AccordionPanel>
                                </>
                                )}
                        </AccordionItem>
                        
                    </Accordion>
                </div>
            </Flex>
        </div>
    )
}
export default FaqSection;