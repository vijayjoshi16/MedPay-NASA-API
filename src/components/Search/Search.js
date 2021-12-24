import {useState} from 'react';
import { Grid } from "@material-ui/core";
import { SearchContainer, SearchHeading, SearchImage, SearchGrid, SearchInput } from "./Search.styles";
import { Button } from '../DatewiseAsteroids/DatewiseAsteroids.styles';
import { errorToast, successToast } from '../toast';
import DetailedCard from '../DetailedCard/DetailedCard';

const Search = ()=>{
    const [searchId, setSearchId] = useState("");
    const [asteroidData, setAsteroidData] = useState(undefined);

    const closeDialog = ()=>{setAsteroidData(undefined)};

    const searchAsteroid = ()=>{
        fetch(
            'https://api.nasa.gov/neo/rest/v1/neo/'+searchId+"?api_key="+process.env.REACT_APP_API_KEY,
            {
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            }
        ).then(res=>res.json())
        .then(res=>{
            console.log(res);
            successToast("Successfully found the asteroid");
            setAsteroidData(res);
        })
        .catch(()=>{
            errorToast("Could not find the desired asteroid!");
        })
    }

    return(
        <SearchContainer>
            <SearchHeading>
                SEARCH ON ID
            </SearchHeading>
            <Grid container>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <SearchImage />
                </Grid> 
                <SearchGrid item xs={12} sm={8} md={8} lg={8}>
                    <p>Wanna try this amazing new feature??</p> 
                    <p>Enter the id of the asteroid you want to explore and get a detailed information about it</p>
                    <SearchInput 
                        variant="outlined"
                        helperText="Enter id"
                        color="#fff"
                        onChange = {(e)=>{setSearchId(e.target.value)}}
                    />
                    <Button
                    onClick={searchAsteroid}>
                        SEARCH
                    </Button>
                </SearchGrid> 
            </Grid>
            {
                asteroidData!==undefined
                &&
                <DetailedCard 
                    data={asteroidData}
                    closeFuntion={closeDialog}
                />
            }
        </SearchContainer>
    )
};

export default Search;