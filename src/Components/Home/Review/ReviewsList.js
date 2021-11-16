import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { React, useState, useEffect } from "react";
import { Rating, Stack } from "@mui/material";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://morning-shore-44498.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <Stack spacing={2}>
        {reviews.map((review) => (
          <Box>
            <Card sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  {review.name}
                </Typography>
                <Rating readOnly value={review.rating}></Rating>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {review.email}
                </Typography>
                <Typography variant="body2">{review.comment}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default ReviewsList;
