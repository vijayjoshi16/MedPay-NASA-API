import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    margin: 10px;
    border-radius: 15px;
    padding: 5px;
    text-align: left;
    cursor: pointer;
    transition: transform 0.5s;
    &:hover{
        transform: scale(1.05);
    }
`;

export const AsteroidName = styled.h3`
    text-align:center;
`;

export const DetailContainer = styled.div`
    margin: 10px 10px 0px;
`;

export const DetailText = styled.span`
    display: inline-block;
    position: relative;
    top: -8px;
    left: 10px;
`;