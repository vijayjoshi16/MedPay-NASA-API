import { FrontBannerContainer, BannerHeading, BannerSubHeading, KnowMoreButton } from "./FrontBanner.styles";

const FrontBanner = ()=>{
    return(
        <FrontBannerContainer>
            <BannerHeading>NASA API PROJECT</BannerHeading>
            <BannerSubHeading>A place to explore everything about near earth asteroids</BannerSubHeading>
            <a href="#about">
                <KnowMoreButton>↓ Know More ↓</KnowMoreButton>
            </a>
        </FrontBannerContainer>
    )
};

export default FrontBanner;