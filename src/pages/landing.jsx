import React, { lazy } from "react";
import 'swiper/css';
import '../assets/css/landing-page.css';

const Header = lazy(() => import("../components/layout/header"));
const TopSection = lazy(() => import("../components/landing-page/top-section"));
const FeaturedImgText = lazy(() => import("../components/landing-page/featured-image-text"));
const CardSlider = lazy(() => import("../components/landing-page/card-slider"));
const Suggestions = lazy(() => import("../components/landing-page/suggestion-section"));
const SectionDivider = lazy(() => import("../components/landing-page/section-divider"));
const Suggestions2 = lazy(() => import("../components/landing-page/suggestions-section2"));
const FaqSection = lazy(() => import("../components/landing-page/faq"));
const BillingSection = lazy(() => import("../components/landing-page/billing-section"));
const TestimonialSection = lazy(() => import("../components/landing-page/testimonial-section"));
const Footer = lazy(() => import("../components/layout/footer"));
const CtaSection = lazy(() => import("../components/landing-page/cta-section"));
const ImgTextCardSection = lazy(() => import("../components/landing-page/imgtext-cardsection"));
const HowWorksSection = lazy(() => import("../components/landing-page/how-works-section"));

const LandingPage = () => {
    return (
        <div className='landingPage-body'>
                <Header />
                <div className="container w-11/12 min-h-[calc(100dvh-85px)] border-r border-l border-solid border-white/10 !px-0">
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
    );
}

export default LandingPage;
