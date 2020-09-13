import React from "react";

export default function Slider({
  handleChange,
  min,
  max,
  propertyName,
  value,
}) {
  return (
    <div className="slider-container">
      <h2>{propertyName}</h2>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
