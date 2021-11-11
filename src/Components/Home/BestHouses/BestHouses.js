import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const BestHouses = () => {
    const[houses, setHouses] = useState([])
    const history= useHistory()

    useEffect(()=>{
        fetch('http://localhost:5000/besthouses')
        .then(res=>res.json())
        .then(data =>setHouses(data))
    }, [])
    const handleBuyNow=(id)=>{
            history.push(`/purchase/${id}`)
    }
    return (
        <div className="row g-4">
            {
                houses.map(house=>
                <div className=" col-lg-4 col-md-4 col-sm-6" key= {house._id} >
                    <div className="card p-2">
                        <h4>{house.name}</h4> 
                        <img width="100%"  src={`${house.image}`} alt="" />
                        <small>{house.price}</small>
                        <small>{house.description.substring(0,100)}</small>
                        <button type="button" onClick={()=>handleBuyNow(house._id)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>)
            } 
        </div>
    );
};

export default BestHouses;