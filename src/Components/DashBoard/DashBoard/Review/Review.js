import { Rating, TextField } from "@mui/material";
import { Box } from "@mui/system";
import {Button,Stack } from '@mui/material';
import React, { useEffect, useState } from "react";
import useAuth from "../../../Firebase/Hooks/useAuth";

const Review = () => {
    const [review, setReview] = useState({});
    const {user} = useAuth();
    const handleBlur=e=>{
        const field =e.target.name;
        const value= e.target.value;
        const newReview ={...review}

        const username = user.displayName;
        const useremail = user.email;
        
        newReview.name = username;
        newReview.email = useremail;

       newReview[field] =value;
       setReview(newReview)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:5000/addReview',{
            method:"POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(review)
        }).then(res => res.json)
        .then(data => console.log(data))
    }

  return (
    <div>
      <h2>Leave a Review!</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            name="comment"
            label="Write your review"
            rows={2}
            multiline
            onBlur={handleBlur}
          />
          <Rating name="rating" onBlur={handleBlur}></Rating>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Stack>
       
      </form>
    </div>
  );
};

export default Review;
