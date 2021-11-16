import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [addProduct, setAddProduct] = useState({});

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h2>Add a product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
        <TextField
            label="Image URL"
          placeholder="Image URL"
          {...register("image")}
        />
        <TextField
            label="Product Name"
          placeholder="Product name"
          {...register("name")}
        />

        <TextField
            label="Product Price"
          placeholder="product price"
          {...register("price")}
        />

        <TextField
            label="Description"
          placeholder="Add a description..."
          cols="30"
          {...register("description")}
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <Button variant="contained" type="submit" >Submit</Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddProduct;
