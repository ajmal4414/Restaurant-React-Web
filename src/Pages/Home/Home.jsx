import React from 'react';
import Welcome from '../../Pages/Welcome/Welcome';
import Partner from '../../Pages/Partner/Partner';
import Booking from '../../Pages/Booking/Booking';
import Dishes from '../../Pages/Dishes/Dishes';
import Ambience from '../../Pages/Ambience/Ambience';
import Delivery from '../../Pages/Delivery/Delivery';
function Home(){
    return(
        <>
            <Welcome/>
            <Partner/> 
            <Booking/>
            <Dishes/>
            <Ambience/>
            <Delivery/>
        </>
    )
}


export default Home