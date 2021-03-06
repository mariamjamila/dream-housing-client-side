import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://morning-shore-44498.herokuapp.com/addProduct", {
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

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddProduct;
