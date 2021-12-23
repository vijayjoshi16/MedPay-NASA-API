import styled from "styled-components";
import comet from '../../img/comet.png';

export const AboutHeading = styled.h1`
    padding: 30px;
    margin: 0;
`;

export const CometImage = styled.img.attrs({
    src: comet
})`
    width: 80%;
    height: 80%;
    max-width: 240px;
    max-height: 240px;
    margin: 30px;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1.5s infinite  alternate;
    @-webkit-keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-30px); }
    }
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-30px); }
    }
`;

export const AboutContent = styled.p`
    text-align: left;
    margin: 20px;
`;