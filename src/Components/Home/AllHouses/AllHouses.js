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
import { pink } from "@mui/material/colors";
import { DeleteOutline } from "@mui/icons-material";

const AllHouses = () => {
  const history = useHistory();
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetch("https://morning-shore-44498.herokuapp.com/houses")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  const handleBuyNow = (id) => {
    history.push(`/purchase/${id}`);
  };
  return (
    <Box>
      <h2>Explore All Houses {houses.length}</h2>

      <Grid container>
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

export default AllHouses;
