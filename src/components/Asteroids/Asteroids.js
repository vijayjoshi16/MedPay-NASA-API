import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { AsteroidContainer, AsteroidHeader, AsteroidList } from "./Asteroids.styles";
import loading from '../../img/loading.gif';
import AsteroidCard from "../AsteroidCard/AsteroidCard";
import {errorToast} from '../toast.js';

const Asteroids = ()=>{
    const [asteroidData, setAsteroidData] = useState([]);
    
    useEffect(()=>{
        fetch(
            'https://www.neowsapp.com/rest/v1/neo/browse?page=0&size=10&api_key='+process.env.REACT_APP_API_KEY,
            {
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            }
        ).then(res=>res.json())
        .then(res=>{
            console.log(res);
            setAsteroidData(res.near_earth_objects);
        })
        .catch(err=>{
            errorToast("Something went wrong while fetching data!");
        })
    },[]);

    return(
        <AsteroidContainer>
            <AsteroidHeader>ASTEROID FEED</AsteroidHeader>
            <p>Click on an asteroid to know more</p>
            <AsteroidList>
                {
                    asteroidData.length!==0
                    ?
                    <Grid container>
                        {
                            asteroidData.map(data=>{
                                return(
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <AsteroidCard data={data} showLastObserved={true}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    :
                    <>
                        <img src={loading} />
                        <p>Fetching asteroids for you...</p>
                    </>
                    
                }
            </AsteroidList>
        </AsteroidContainer>
    )
};

export default Asteroids;