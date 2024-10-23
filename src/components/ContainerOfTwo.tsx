import React from 'react';
import './MainContainer.css'; // Add styles for the container
import PopularNews from './PopularNews'; // Import your Popular News component
import Participant from './ParticipantsSection'; // Import your Participant component

const MainContainer: React.FC = () => {
  return (
    <div className="main-container">
      <PopularNews />
      <Participant 
        participants={[
          { name: 'Player 1', image: '/assets/player1.jpg' },
          { name: 'Player 2', image: '/assets/player2.jpg' },
          { name: 'Player 3', image: '/assets/player3.jpg' },
          { name: 'Player 4', image: '/assets/player4.jpg' },
        ]}
      />
    </div>
  );
};

export default MainContainer;
