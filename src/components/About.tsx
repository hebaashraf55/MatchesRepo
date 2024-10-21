import React from 'react';
import './About.css'; // Import the CSS file

// Import about images
import aboutImage1 from '../assets/AboutCircle.png';
import aboutImage2 from '../assets/BilliardsTable.png';

const About: React.FC = () => {
    return (
        <div className="about-section container mt-5">
            {/* Left Div with Title, Text, and Button */}
            <div className="about-text">
                <h1 className="about-title">ABOUT</h1>
                <p className="about-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis 
                    euismod malesuada. Morbi tincidunt dui vel tortor scelerisque, 
                    nec maximus lorem pretium.
                    Morbi tincidunt dui vel tortor scelerisque, 
                    nec maximus lorem pretium.
                    Morbi tincidunt dui vel tortor scelerisque, 
                    nec maximus lorem pretium.
                    Morbi tincidunt dui vel tortor scelerisque, 
                    nec maximus lorem pretium.
                </p>
                <button className="read-more-btn">Read More</button>
            </div>

            {/* Right Div with Two Overlapping Images */}
            <div className="about-images">
                <img src={aboutImage1} className="about-img img1" alt="About 1" />
                <img src={aboutImage2} className="about-img img2" alt="About 2" />
            </div>
        </div>
    );
};

export default About;
