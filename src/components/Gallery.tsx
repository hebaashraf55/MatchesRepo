import React from 'react';
import './Gallery.css'; // Import CSS styles

// Import gallery images
import img1 from '../assets/Maskgroup.png';
import img2 from '../assets/Maskgroup.png';
import img3 from '../assets/Maskgroup3.png';
import img4 from '../assets/Maskgroup.png';

const Gallery: React.FC = () => {
  return (
    <section className="gallery-section d-flex text-start">
      <h1 className="gallery-header"> Gallery</h1>

      <div className="gallery-container">
        <div className="gallery-item triangle-bottom">
          <img src={img1} alt="Gallery Image 1" />
        </div>
        <div className="gallery-item triangle-right">
          <img src={img2} alt="Gallery Image 2" />
        </div>
        <div className="gallery-item triangle-left">
          <img src={img3} alt="Gallery Image 3" />
        </div>
        <div className="gallery-item triangle-top">
          <img src={img4} alt="Gallery Image 4" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
