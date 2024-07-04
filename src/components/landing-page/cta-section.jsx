import React from "react";
import { Link } from "react-router-dom";

const CtaSection =()=>{
    return(
        <>
            <div className="relative -my-14">
                <img alt="img" className="absolute top-0 left-12" src="images/landing-page/Union.png" />
                <img alt="img" className="absolute bottom-0 right-0 z-[1]" src="images/landing-page/Union-1.png" />
                <div className="block mx-auto relative max-w-[745px]">
                    <img alt="img" src="images/landing-page/circle-grad.png" className="absolute top-0 left-0 transform -translate-x-[50px] opacity-50" />
                    <img alt="img" src="images/landing-page/circle-pattern.png" />
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full left-0 right-0 max-w-[690px] mx-auto text-center">
                    <h3 className="text-white text-center text-6xl leading-[72px] font-semibold">Be part of the future of <br />
                        <span className="highlight_text relative text-7xl">PATR</span>
                    </h3>
                    <p className="text-xl leading-8 mt-10 text-[#757185]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <Link to={'/get-started'} className="primary-btn primary-btn-white mt-10">Get started</Link>
                </div>
            </div>
        </>
    )
}
export default CtaSection;