import { Avatar, AvatarGroup, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import LogoList from "./logo-list";
import PlusIcon from "./plus-icon";
const TopSection =()=>{
    return(
        <div className="top_section h-full relative">
            <div className="max-w-[1000px] mx-auto text-center pt-32 px-10">
                <h1 className="text-5xl 2xl:text-6xl leading-[72px] text-white font-semibold mb-7">
                    Honing Cybersecurity Excellence Starts With <span className="highlight_text relative text-7xl">PATR</span>
                </h1>
                <p className="text-xl leading-8 text-colorText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <Link to="/signup" className="primary-btn primary-btn-white mt-7"> REGISTER NOW</Link>
            </div> 
            <div className="typewriter-container pb-[72px] relative">
                <PlusIcon yPosition={`top-[47%]`} xPosition={'-left-6px'} addClass={'translate-y-[-47%]'} />
                <PlusIcon yPosition={`top-[47%]`} xPosition={'-right-6px'} addClass={'translate-y-[-47%]'} />
                <div className="typewriter-main_outer">
                    <div className="typewriter-main">
                        <div className="typewriter-icons-wrapper">
                            <span className="typewriter-icon">
                                <img  src="images/landing-page/home-smile.svg" alt="home" />
                            </span>
                            <span className="typewriter-icon">
                                <img  src="images/landing-page/file.svg" alt="file" />
                            </span>
                            <span className="typewriter-icon">
                                <img  src="images/landing-page/search-md.svg" alt="search-md" />
                            </span>
                            <span className="typewriter-icon">
                                <img src="images/landing-page/plus-square.svg" alt="plus-square" />
                            </span>
                        </div>
                        <div className="typewriter-quizCard inline-flex items-center gap-5 p-4 rounded-2xl">
                            <img className="aspect-square w-[52px]" src="images/landing-page/quiz-pic.png" alt="Start Quiz" />
                            <VStack gap="8px" alignItems={'flex-start'}>
                                <h2 className="font-inter font-semibold text-base leading-6 text-white">Start Quiz </h2>
                                <div className="flex gap-20 items-center">
                                <AvatarGroup size='xs' borderColor={'#2E2A41'} max={3}>
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                </AvatarGroup> 
                                <p className="text-xs font-inter text-[#6C7275] leading-5 font-medium">1m ago</p>
                                </div>
                            </VStack>
                        </div>
                        <div className="typewriter_input text-white">
                            <span className="circle flex w-5 h-5 items-center justify-center">
                                <img alt="img" src="images/landing-page/animated-circle.svg" />
                            </span>
                            <Typewriter
                                options={{
                                    strings: ['Start your journey', 'Place your text here'],
                                    autoStart: true,
                                    loop: true, 
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <LogoList />
        </div>
    )
}

export default TopSection;