import { FrontBannerContainer, BannerHeading, BannerSubHeading, KnowMoreButton } from "./FrontBanner.styles";

const FrontBanner = ()=>{
    return(
        <FrontBannerContainer>
            <BannerHeading>NASA API PROJECT</BannerHeading>
            <BannerSubHeading>A place to explore everything about near earth asteroids</BannerSubHeading>
            <KnowMoreButton>↓ Know More ↓</KnowMoreButton>
        </FrontBannerContainer>
    )
};

export default FrontBanner;