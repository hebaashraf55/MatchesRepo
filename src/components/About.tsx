import React from 'react';
import './About.css'; // Import the CSS file

// Import about images
import aboutImage1 from '../assets/AboutCircle.png';
import aboutImage2 from '../assets/BilliardsTable.png';

const About: React.FC = () => {
    return (
        <section className="section-about about-section container mt-5">
            {/* Left Div with Title, Text, and Button */}
            <div className="about-text">
                <h1 className="text-white about-title">ABOUT</h1>
                <p className="text-white about-description">
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
                <button className="read-more-btn success">Read More</button>
            </div>

            {/* Right Div with Two Overlapping Images */}
            <div className="about-images d-flex justify-content-center">
                <img src={aboutImage1} className="about-img img1" alt="About 1" />
                <img src={aboutImage2} className="about-img img2 " alt="About 2" />
            </div>
        </section>
    );
};

export default About;
