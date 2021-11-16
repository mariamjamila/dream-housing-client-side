import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
  CardActions,
} from "@mui/material";
const BestHouses = () => {
  const [houses, setHouses] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://morning-shore-44498.herokuapp.com/besthouses")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  const handleBuyNow = (id) => {
    history.push(`/purchase/${id}`);
  };
  return (
    <Box>
      <Grid container sx={{justifyContent:"center"}}>
        {houses.map((house) => (
          <Card sx={{ width: 345, margin: 2 }} key={house._id}>
            <CardHeader title={house.name} subheader={house.price} />
            <CardMedia component="img" height="194" image={house.image} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {house.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  handleBuyNow(house._id);
                }}
              >
                Buy Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default BestHouses;
