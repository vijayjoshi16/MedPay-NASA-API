import styled from "styled-components";

export const NavbarContainer = styled.div`
    text-align: right;
`;

export const NavbarHeading = styled.h2`
    margin: 10px;
    text-align: left;
`;

export const NavbarOption = styled.span`
    display: inline-block;
    margin-right: 100px;
    margin-top: 12.5px;
    cursor: pointer;
`;

export const MenuButton = styled.button`
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: white;
    border: 1.5px solid #2e0e65;
    outline: none;
    padding: 10px;
    padding-top: 8px;
    border-radius: 50%;
    cursor: pointer;
`;

export const MenuDash = styled.div`
    height: 4px;
    width: 25px;
    background-color: #2e0e65;
    margin-top:3px;
`;

export const DrawerContent = styled.div`
    background-color: #2e0e65;
    color: white;
    padding: 40px;
    font-size: 1.5rem;
    height: 100vh;
`;