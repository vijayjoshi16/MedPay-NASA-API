import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const DatewiseContainer = styled.div`
    background: linear-gradient(to bottom, #c33764, #2e0e65);
    margin-top: -22px;
`;

export const DatewiseHeading = styled.h1`
    padding: 80px 10px 10px;
`;

export const DateInput =  styled(TextField)`
    &&{
        margin: 10px;
    }
`;

export const Button = styled.button`
    background-color: hsla(0,0%,87%,.589);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    height: 56px;
    width: 100px;
    margin: 10px;
    outline: none;
    transition: transform 0.5s;
    &:hover{
        transform: scale(1.05);
    }
`;