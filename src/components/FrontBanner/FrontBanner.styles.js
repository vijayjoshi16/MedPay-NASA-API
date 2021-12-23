import styled from "styled-components";
import mainBackground from '../../img/main-bg.jpg';

export const FrontBannerContainer = styled.div`
    margin-top: 30px;
    background-image: url(${mainBackground});
    background-size: 110% 100%;
    background-repeat: no-repeat;
    height: 100vh;
`;

export const BannerHeading = styled.h1`
    padding-top: 100px;
`;

export const BannerSubHeading = styled.h2`
    margin-top: 30px;
    font-size: 1.25rem;
`;

export const KnowMoreButton = styled.button`
    height: 60px;
    width: 180px;
    background: none;
    color: white;
    font-size: 1rem;
    border: 1px solid white;
    border-radius: 15px;
    margin-top: 30px;
    cursor: pointer;
`;