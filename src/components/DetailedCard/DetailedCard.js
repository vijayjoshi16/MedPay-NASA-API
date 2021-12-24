import { Dialog, DialogContent } from "@material-ui/core";
import { useState } from "react";

const DetailedCard = (props)=>{
    const [open, setOpen] = useState(true);

    const asteroidData = props.data;
    const orbitalData = asteroidData.orbital_data;

    const closeDialog = ()=>{
        setOpen(false);
        props.closeFunction();
    }

    return(
        <Dialog
        open={open}
        onBackdropClick={closeDialog}>
            <DialogContent>
                <h2>ASTEROID DETAILS</h2>
                <p>Name: {asteroidData.name}</p>
                {
                    asteroidData.designation!==undefined
                    &&
                    <p>Designation: {asteroidData.designation}</p>
                }
                
                <p>Absolute magnitude: {asteroidData.absolute_magnitude_h}</p>
                <p>{asteroidData.is_potentially_hazardous_asteroid?"Potentially Hazardous":"Not Potentially Hazardous"}</p>
                <p>{asteroidData.is_sentry_object?"Sentry Object":"Not A Sentry Object"}</p>
                <p>{asteroidData.close_approach_data.length} close approaches available</p>
                <p>NEO Reference ID: {asteroidData.neo_reference_id}</p>
                <p>Estimated Diameter:
                 {Math.round(asteroidData.estimated_diameter.meters.estimated_diameter_min)} 
                 -
                 {Math.round(asteroidData.estimated_diameter.meters.estimated_diameter_max)}
                 {" "}
                 meters
                </p>
                {
                    orbitalData!==undefined
                    &&
                    <div>
                        <p>Orbit type: {orbitalData.orbit_class.orbit_class_type}</p>
                        <p>First Observation: {orbitalData.first_observation_date}</p>
                        <p>Last Observation: {orbitalData.last_observation_date}</p>
                        <p>Orbit ID: {orbitalData.orbit_id}</p>
                        <p>Orbital Period: {Math.round(orbitalData.orbital_period)} days</p>
                        <p>Data Arc: {Math.round(orbitalData.data_arc_in_days)} days</p>
                    </div>
                }
            </DialogContent>
        </Dialog>
    )
};

export default DetailedCard;