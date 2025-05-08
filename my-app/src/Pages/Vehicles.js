import React, { useState, useEffect } from "react";
import "./Vehicles.css";

export default function Vehicles() {
  function addCard(id, name, price, imgSrc, km, year) {
    setCardHolder((prev) => [
      ...prev,
      { id: id, name: name, price: price, imgSrc: imgSrc, km: km, year: year },
    ]);
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/getUsers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => {
        console.log("Error loading users:", err);
      });
  }, []);

  const [cardHolder, setCardHolder] = useState([]);

  //   updateCardHolder((prev) =>
  //     prev.map((car) =>
  //       car.name === "BMW M3" ? { ...car, price: "$75,000" } : car
  //     )
  //   ); //update

  if (users === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-container">
      <div className="left-right-space"></div>
      <div className="center-panel">
        {users.length === 0 ? (
          <p>No users were found.</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="user-card">
              <h4>{user.username}</h4>
              <p>ID: {user._id}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        )}
      </div>
      <div className="left-right-space"></div>
    </div>
  );
}
