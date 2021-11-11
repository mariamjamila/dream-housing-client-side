import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {id} = useParams();
    const [house, setHouse] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/purchase/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setHouse(data)
        })
    },[]);
    return (
        <div className="row">
            <div className="col-6"> 
                <div className="d-flex g-5 flex-column">
                    <img src={house.image} alt="text description" />
                    <div className="text-left">
                        <h2>{house.name}</h2>
                        <p>{house.description}</p>
                        <p>{house.price}</p>
                        
                    </div>  
                </div>
            </div>

            <div className="col-6">

            <form onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue="name" {...register("name")} />
      
    
      <input {...register("exampleRequired", { required: true })} />
    
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
            <button type="button" className="btn btn-primary">Complete Purchase</button>
            </div>
           
  
           

           
        </div>
    );
};

export default Purchase;