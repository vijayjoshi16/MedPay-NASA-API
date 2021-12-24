import { Grid, TextField } from '@material-ui/core';
import styled from 'styled-components';
import searchIcon from '../../img/search.png';

export const SearchContainer = styled.div`

`;

export const SearchHeading = styled.h1`
    margin: 80px 20px;
`;

export const SearchImage = styled.img.attrs({
    src: searchIcon
})`
    width: 80%;
    height: 80%;
    max-width: 240px;
    max-height: 240px;
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

export const SearchGrid = styled(Grid)`
    &&{
        text-align: left;
        padding: 10px;
    }
`;

export const SearchInput = styled(TextField)`
    &&{
        margin: 10px 0px 10px;
        background-color: hsla(0,0%,87%,.589);;
        border-radius: 5px;
        height: 56px;
    }
`;