import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../Firebase/Hooks/useAuth";

const Purchase = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [house, setHouse] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {

    const postData = {...formData, name:user.displayName, email: user.email};
    fetch(`http://localhost:5000/purchase/${id}`, {
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body: JSON.stringify(postData)
    })
    .then(res=>res.json())
    .then(data => console.log(data))
   
  }

  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHouse(data);
      });
  }, []);
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
        <form
          className="w-50 d-flex flex-column gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input 
            className="form-control"
            defaultValue={user.displayName}
            {...register("name")}
            disabled

          />
          <input
            className="form-control"
            defaultValue={user.email}
            {...register("email")}
            disabled
          />

          <input
            className="form-control"
            placeholder=" Your address"
            {...register("address", { required: true })}
          />
          <input
            className="form-control"
            placeholder=" Your phone"
            {...register("phone", { required: true })}
          />
          <button type="submit" className="btn btn-primary">
            Complete Purchase
          </button>
          {errors.exampleRequired && <span>This field is required</span>}
        </form>
      </div>
    </div>
  );
};

export default Purchase;
