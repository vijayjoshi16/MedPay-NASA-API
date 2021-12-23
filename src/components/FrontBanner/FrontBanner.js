import { Hidden } from "@material-ui/core";
import { FrontBannerContainer, BannerHeading, BannerSubHeading, KnowMoreButton } from "./FrontBanner.styles";

const FrontBanner = ()=>{
    return(
        <div>
            <FrontBannerContainer>
                <BannerHeading>NASA API PROJECT</BannerHeading>
                <BannerSubHeading>A place to explore everything about near earth asteroids</BannerSubHeading>
                <KnowMoreButton>↓ Know More ↓</KnowMoreButton>
            </FrontBannerContainer>
        </div>
    )
};

export default FrontBanner;