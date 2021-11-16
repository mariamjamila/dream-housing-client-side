import React from 'react';
import pic from "../../../Images/banner.jpg"
const Banner = () => {
    return (
        <div style={{maxHeight:'600px', overflow:'hidden'}}>
         <img className="w-100 p-3" src={pic} alt="" /> 
        </div>
    );
};

export default Banner;