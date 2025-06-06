import React from "react";

const BusinessCard = ({ place }) => {
  const { name, rating, user_ratings_total, vicinity, geometry } = place;
  const handleDirections = () => {
    const { lat, lng } = geometry.location;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>⭐ {rating} ({user_ratings_total} reviews)</p>
      <p>{vicinity}</p>
      <button onClick={handleDirections}>Get Directions</button>
    </div>
  );
};

export default BusinessCard;
