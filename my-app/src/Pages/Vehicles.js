import React, { useState, useEffect } from "react";
import VehicleImage from "../Components/VehicleImage";
import ImagePopup from "../Components/ImagePopup";
import "./Vehicles.css";

export default function Vehicles() {
  function addCard(id, name, price, imgSrc, km, year) {
    setCardHolder((prev) => [
      ...prev,
      { id: id, name: name, price: price, imgSrc: imgSrc, km: km, year: year },
    ]);
  }

  const [users, setUsers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [popupImage, setPopupImage] = useState(null);

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

  useEffect(() => {
    fetch("/getVehicles")
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data.vehicles);
      })
      .catch((err) => {
        console.log("Error loading vehicles:", err);
      });
  }, []);

  const [cardHolder, setCardHolder] = useState([]);

  //   updateCardHolder((prev) =>
  //     prev.map((car) =>
  //       car.name === "BMW M3" ? { ...car, price: "$75,000" } : car
  //     )
  //   ); //update

  if (vehicles === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-container">
      <div className="left-right-space"></div>
      <div className="center-panel">
        {users.length === 0 ? (
          <p>No vehicles were found.</p>
        ) : (
          vehicles.map((vehicle) => (
            <div key={vehicle._id} className="user-card">
              <h4>
                {vehicle.name} {vehicle.year}
              </h4>
              <p>
                Description:{" "}
                <span className="regular-text">{vehicle.description}</span>
              </p>
              <p>Price: {vehicle.price}</p>
              <p>Km: {vehicle.km}</p>
              {Array.isArray(vehicle.img) && (
                <div className="img-row">
                  {vehicle.img.slice(0, 3).map((imgs, index) => (
                    <div key={index} className="img-cell">
                      <VehicleImage
                        src={imgs.url}
                        alt={imgs.alt}
                        onClick={() => setPopupImage(imgs.url)}
                      />
                    </div>
                  ))}
                </div>
              )}
              <button className="go-to-button">Go to</button>
            </div>
          ))
        )}
      </div>
      <div className="left-right-space"></div>
      {popupImage && (
        <ImagePopup src={popupImage} onClose={() => setPopupImage(null)} />
      )}
    </div>
  );
}
