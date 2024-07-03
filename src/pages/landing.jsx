import React from "react";
import 'swiper/css';
import '../assets/css/landing-page.css'
import Header from "../components/layout/header";
import TopSection from "../components/landing-page/top-section";
import FeaturedImgText from "../components/landing-page/featured-image-text";
import CardSlider from "../components/landing-page/card-slider";
import Suggestions from "../components/landing-page/suggestion-section";
import SectionDivider from "../components/landing-page/section-divider";
import Suggestions2 from "../components/landing-page/suggestions-section2";
import FaqSection from "../components/landing-page/faq";
import BillingSection from "../components/landing-page/billing-section";
import TestimonialSection from "../components/landing-page/testimonial-section";
import Footer from "../components/layout/footer";
import CtaSection from "../components/landing-page/cta-section";
import ImgTextCardSection from "../components/landing-page/imgtext-cardsection";
import HowWorksSection from "../components/landing-page/how-works-section";
const LandingPage =()=>{
    return(
        <>
            <div className='landingPage-body'>
                <Header />
                <div className="container w-11/12 min-h-[calc(100dvh-85px)] border-r border-l border-solid  border-white/10 !px-0">
                    <TopSection />
                    <FeaturedImgText />
                    <CardSlider />
                    <Suggestions />
                    <SectionDivider />
                    <Suggestions2 />
                    <SectionDivider classStyle={'mt-20'} />
                    <HowWorksSection />
                    <ImgTextCardSection />
                    <BillingSection />
                    <TestimonialSection />
                    <FaqSection />
                    <SectionDivider />
                    <CtaSection />
                    <SectionDivider />
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default LandingPage;