// src/components/Gallery.tsx
import React from "react";
import "../assets/Galery.png"; // Optional: Import CSS for styling

const Gallery: React.FC = () => {
  return (
    <div className="gallery-section">
        <h1 className="gallery-title">GALLERY</h1>
        <div className="gallery-image"></div>
    </div>
);
};

export default Gallery;
