
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { React, useState, useEffect } from "react";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
        <Typography variant="h4">
            Reviews
        </Typography>
      {reviews.map((review) => (
        <Box>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {review.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {review.email}
              </Typography>
              <Typography variant="body2">{review.comment}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default ReviewsList;
