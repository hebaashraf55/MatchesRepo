import React from 'react';
import './ParticipantsSection.css'
import participantImage from '../assets/Ellipse2.png'; // Custom styles if needed

interface ParticipantProps {
  participants: { name: string} [];
}

const ParticipantsSection: React.FC<ParticipantProps> = ({ participants }) => {
  return (
    <>
    <div className="participant-container position-relative">
      <button className="arrow left-arrow">&lt;</button>

      <div className="row">
        {participants.map((participant, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 text-center mb-4">
            <img 
              src={participantImage} 
              className="img-fluid participant-image"
            />
            <h2 className="participant-name">{participant.name}</h2>
          </div>
        ))}
      </div>

      <button className="arrow right-arrow">&gt;</button>
    </div>
    </>
  );
};

export default ParticipantsSection;
