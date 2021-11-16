import { DeleteOutline } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import useAuth from "../../Firebase/Hooks/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  const handleDelete = (id) => {
    const deleteCertain = window.confirm("Do you want to delete?");

    if (deleteCertain) {
      const remaining = orders?.filter((order) => order._id !== id);
      setOrders(remaining);
      fetch(`http://localhost:5000/myOrder/${id}`, {
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
    <div>
      <h2> All Orders:{orders.length}</h2>
      {orders.map((order) => (
        <Card sx={{ maxWidth: 345, margin: 2 }} key={order._id}>
          <CardHeader
            title={order.house.name}
            subheader={order.email}
            action={
              <IconButton onClick = {() => {handleDelete(order._id)}} sx={{color: pink[300]}}>
                <DeleteOutline></DeleteOutline>
              </IconButton>
            }
          />
          <CardMedia
            component="img"
            height="194"
            image={order.house.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {order.house.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default ManageOrders;
