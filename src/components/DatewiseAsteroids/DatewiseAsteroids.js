import { Grid } from "@material-ui/core";
import { useState } from "react";
import AsteroidCard from "../AsteroidCard/AsteroidCard";
import { AsteroidList } from "../Asteroids/Asteroids.styles";
import { errorToast } from "../toast";
import { DatewiseContainer, DatewiseHeading, DateInput, Button } from "./DatewiseAsteroids.styles";
import loadingGIF from '../../img/loading.gif';

const DatewiseAsteroids = ()=>{
    const [startDate, setStartDate] = useState("2021-12-24");
    const [endDate, setEndDate] = useState("2021-12-24");

    const [searchResults, setSearchResults] = useState([]);
    const [limit, setLimit] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = ()=>{
        const dateBeginning = new Date(startDate);
        const dateEnd = new Date(endDate);
        const dayDifference = parseInt((dateEnd - dateBeginning) / (1000 * 60 * 60 * 24), 10); 
        if(dayDifference<0){
            errorToast("Please enter valid interval!");
            return;
        }
        
        if(dayDifference>7){
            errorToast("Please enter interval length <= 7 days!");
            return;
        }

        setSearchResults([]);
        setLimit(0);
        setLoading(true);
        fetch(
            'https://api.nasa.gov/neo/rest/v1/feed?start_date='+startDate+'&end_date='+endDate+'&api_key='+process.env.REACT_APP_API_KEY,
            {
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            }
        ).then(res=>res.json())
        .then(res=>{
            let results = [];
            for(const date in res.near_earth_objects){
                results = [...results, ...res.near_earth_objects[date]];
            }
            setLimit(Math.min(12,results.length));
            setSearchResults(results);
        })
        .catch(err=>{
            errorToast("Something went wrong while fetching data!");
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    return(
        <DatewiseContainer>
            <DatewiseHeading>DATEWISE ASTEROIDS</DatewiseHeading>
            <p>Search for asteroids on the basis of start date and end date</p>
            <AsteroidList>
                <DateInput 
                    type="date"
                    defaultValue="2021-12-24"
                    onChange={(e)=>{setStartDate(e.target.value)}}
                    helperText="Enter Start Date"
                />
                <DateInput 
                    type="date"
                    defaultValue="2021-12-24"
                    onChange={(e)=>{setEndDate(e.target.value)}}
                    helperText="Enter End Date"
                />
                <br></br>
                <Button
                onClick={handleSubmit}>SUBMIT</Button>
                <br></br>
                {
                    loading
                    &&
                    <img src={loadingGIF} />
                }
                <Grid container>
                    {
                        searchResults.slice(0,limit).map(data=>{
                            return(
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                <AsteroidCard data={data} showLastObserved={false}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {
                    limit!=searchResults.length
                    && searchResults!==[]
                    &&
                    <Button
                    onClick={()=>{setLimit(Math.min(limit+12,searchResults.length))}}>
                    MORE
                    </Button>
                }
                
            </AsteroidList>
        </DatewiseContainer>
    )
};

export default DatewiseAsteroids;