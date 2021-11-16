import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { DeleteOutline } from "@mui/icons-material";

const ManageProducts = () => {
  const history = useHistory();
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetch("https://morning-shore-44498.herokuapp.com/houses")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  const handleDelete = (id) => {
    const deleteCertain = window.confirm("Do you want to delete?");

    if (deleteCertain) {
      const remaining = houses?.filter((order) => order._id !== id);
      setHouses(remaining);
      fetch(`https://morning-shore-44498.herokuapp.com/manageProducts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
          }
        });
    } else {
      console.log("User cancelled delete");
    }
  };

  return (
    <Box>
      <h2>Explore All Houses {houses.length}</h2>

      <Grid container>
        {houses.map((house) => (
          <Card sx={{ width: 345, margin: 2 }} key={house._id}>
            <CardHeader
              title={house.name}
              subheader={house.price}
              action={
                <IconButton
                  onClick={() => {
                    handleDelete(house._id);
                  }}
                  sx={{ color: pink[300] }}
                >
                  <DeleteOutline></DeleteOutline>
                </IconButton>
              }
            />
            <CardMedia component="img" height="194" image={house.image} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {house.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageProducts;
