import React, { useEffect, useState } from "react";
import useAuth from "../../Firebase/Hooks/useAuth";

const MyOrders = () => {
  const [houses, setHouses] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/myOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  const handleDelete = (id) => {
    const deleteCertain = window.confirm("Do you want to delete?");

    if (deleteCertain) {
      fetch(`http://localhost:5000/myOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
          }
          const remaining = houses?.filter((house) => house._id !== id);
          setHouses(remaining);
        });
    } else {
      console.log("User cancelled delete");
    }
  };

  return (
    <div>
      <h2> My Orders:{houses.length}</h2>
      {console.log(houses)}
      {houses.map((house) => (
        <div key={house._id}>
          <img src={`${house?.image}`}></img>
          <h6>Name:{house?.name}</h6>
          <h4>
            Cost:<small>{house?.price}</small>
          </h4>
          <small>Email:{user.email}</small>
          <button
            onClick={() => handleDelete(house._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default MyOrders;
