import { Flex, Image } from "@chakra-ui/react";
import React, { lazy } from "react";
import { Link } from "react-router-dom";
const PlusIcon = lazy(() => import("../landing-page/plus-icon"));

const Header =()=>{
    return(
        <header className="relative border-b  border-solid border-white/10 ">
            <div className="container w-11/12 py-18px !px-0">
                <PlusIcon yPosition={`-bottom-6px`} xPosition={'-left-5px'} />
                <Flex alignItems={'center'}>
                    <div className="w-1/5">
                        <Link to={'/'}>
                            <Image className="h-12 object-contain" src='images/landing-page/logo.png' alt='PATR' />
                        </Link>
                    </div>
                    <div className="w-4/5 site_nav">
                        <Flex alignItems={'center'}>
                            <div className="w-4/5">
                                <ul className="flex tracking-[0.42px] text-xs leading-5 font-semibold items-center gap-10 2xl:gap-20 justify-center text-white/50">
                                    <li>
                                        <Link to={'/about-us'}>ABOUT US</Link>
                                    </li>
                                    <li>
                                        <Link to={'/features'}>FEATURES</Link>
                                    </li>
                                    <li>
                                        <Link to={'/solutions'}>SOLUTIONS</Link>
                                    </li>
                                    <li>
                                        <Link to={'/pricing'}>PRICING</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/5 text-white text-right">
                                <Link className="primary-btn" to={'/login'}>
                                    Sign in
                                </Link>
                            </div>
                        </Flex>
                    </div>
                </Flex>
                <PlusIcon yPosition={'-bottom-6px'} xPosition={'-right-5px'} />
            </div>
            
        </header>
    )
}

export default Header;