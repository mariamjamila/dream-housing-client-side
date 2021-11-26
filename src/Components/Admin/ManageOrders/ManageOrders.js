import { DeleteOutline } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import useAuth from "../../Firebase/Hooks/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    fetch("https://morning-shore-44498.herokuapp.com/allOrders")
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
      fetch(`https://morning-shore-44498.herokuapp.com/myOrder/${id}`, {
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

  const handleApproval = (id) => {
    fetch(`https://morning-shore-44498.herokuapp.com/purchase/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          const approved = orders.map((order) => {
            if (order._id === id) {
              order.approved = true;
            }
            return order;
          });
          setOrders(approved);
        }
        console.log(data);
      });
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
              <IconButton
                onClick={() => {
                  handleDelete(order._id);
                }}
                sx={{ color: pink[300] }}
              >
                <DeleteOutline></DeleteOutline>
              </IconButton>
            }
          />
          <CardMedia component="img" height="194" image={order.house.image} />
          <CardContent>
            {order.approved ? (
              <Chip label="Approved" color="success" variant="outlined"></Chip>
            ) : (
              <Chip label="Pending" color="warning" variant="outlined"></Chip>
            )}
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {order.house.description}
            </Typography>
          </CardContent>
          <CardActions>
            {!order.approved && (
              <Button onClick={() => handleApproval(order._id)} color="success">
                Approve
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
export default ManageOrders;
