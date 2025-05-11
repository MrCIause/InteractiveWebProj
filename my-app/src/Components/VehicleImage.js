import React, { useState } from "react";
import "./VehicleImage.css";

export default function VehicleImage({ src, alt, onClick }) {
  const [error, setError] = useState(false);

  return (
    <div className="vehicle-image-wrapper">
      {error ? (
        <div className="image-fallback">Image failed</div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="vehicle-image"
          onError={() => setError(true)}
          onClick={onClick}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}
