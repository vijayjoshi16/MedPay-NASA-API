import { CardContainer, AsteroidName, DetailContainer, DetailText } from "./AsteroidCard.styles";
import asteroid from '../../img/asteroid.png';
import unsafe from '../../img/unsafe.png';
import safe from '../../img/safe.png';
import calendar from '../../img/calendar.png';
import measure from '../../img/measure.png';

const AsteroidCard = (props)=>{
    return(
        <CardContainer>
            <AsteroidName>{props.data.name}</AsteroidName>
            <DetailContainer>
                <img src={asteroid} />
                <DetailText>{props.data.close_approach_data.length} close approaches available</DetailText>
            </DetailContainer>
            <DetailContainer>
                <img src={props.data.is_potentially_hazardous_asteroid?unsafe:safe} />
                <DetailText>{props.data.is_potentially_hazardous_asteroid?"Potentially Hazardous":"Not Potentially Hazardous"}</DetailText>
            </DetailContainer>
            {
                props.showLastObserved && <DetailContainer>
                <img src={calendar} />
                    <DetailText>
                        Last observered at: {props.data.orbital_data!=null?props.data.orbital_data.last_observation_date:"Not available"}
                    </DetailText>
                </DetailContainer>
            }
            
            <DetailContainer>
                <img src={measure} />
                <DetailText>
                    Absolute Magnitude: {props.data.absolute_magnitude_h}
                </DetailText>
            </DetailContainer>
            
        </CardContainer>
    )
};

export default AsteroidCard;