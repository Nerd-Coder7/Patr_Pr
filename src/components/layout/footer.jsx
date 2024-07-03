import React from "react";
import { Link } from "react-router-dom";
import { IoLogoDiscord } from "react-icons/io5";
import { FaTwitter,FaTelegramPlane,FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
const Footer =()=>{
    return(
        <>
            <div className="pt-28">
                <div className="flex justify-between items-center flex-wrap pb-5 border-b border-solid border-white/10">
                    <div className="md:w-1/3">
                        <Link to='/'>
                            <img alt="img" src="images/landing-page/logo.png" className="block h-12 object-contain" />
                        </Link>
                    </div>
                    <div className="md:w-2/3">
                        <ul className="footer_menu">
                            <li><Link to="">Features</Link></li>
                            <li><Link to="">Pricing</Link></li>
                            <li><Link to="">How to use</Link></li>
                            <li><Link to="">Roadmap</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-5 py-5">
                    <p className="text-colorText text-xs">© 2024 PATR</p>
                    <div className="flex items-center social_icons gap-5">
                        <Link to=""><IoLogoDiscord /></Link>
                        <Link to=""><FaTwitter /></Link>
                        <Link to=""><PiInstagramLogoFill /></Link>
                        <Link to=""><FaTelegramPlane /></Link>
                        <Link to=""><FaFacebookF /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;