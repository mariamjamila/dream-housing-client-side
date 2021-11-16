import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [addProduct, setAddProduct]= useState({});

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:3000/dashboard/addProduct', {
            method:'POST',
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res =>res.json())
        .then(res=>console.log(res))
    }
    return (
        <div className="d-flex ">
         <h2>Add a product</h2>   
      
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <input
       className="p-2, m-2"
      placeholder="image URL"
      {...register("image")} />
      <input
       className="p-2, m-2"
      placeholder="product name"
      {...register("name")} />
     
      <input
       className="p-2, m-2"
      placeholder="product price"
      {...register("price")} />
     
      <input
       className="p-2, m-2"
      placeholder="Add a description..."
      cols="30"
      {...register("price")} />
     
      <input {...register("description", { required: true })} />
    
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;