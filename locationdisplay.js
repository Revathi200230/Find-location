import React from 'react';
import northPic from './img1.jpg'
import southPic from './img2.jpg'
import './location.css'

const localConfig = {
    North: {
        text: ' Hi, you are currently in North region. ',
        picture: northPic
    },
    South: {
        text: ' Hi, you are currently in South region. ',
        picture: southPic
    }
}

const LocationDisplay = ({latitude}) =>{
    
    var region = (latitude > 0) ? 'North' : 'South';
    const {text,picture} = localConfig[region]

    return(
        <div className={region}> Hi, you are currently in {region} region 
        <img src = {picture} alt = 'location picture' />
        </div>
    )
}

export default LocationDisplay;