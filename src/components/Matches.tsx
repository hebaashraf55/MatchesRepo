import React from 'react';
import './Matches.css';

// Import images for live and upcoming matches
import liveMatch1 from '../assets/FullLiveMatch.png';
import liveMatch2 from '../assets/FullLiveMatch.png';
import upcomingMatch1 from '../assets/FullUpcomingMatch.png';
import upcomingMatch2 from '../assets/FullUpcomingMatch.png';

import SkillAndSpeedSection from './SkillAndSpeedSection';

const Matches: React.FC = () => {
    return (
        
        <section className="matches-section">
            <SkillAndSpeedSection />
            <h1 className="section-title">Matches</h1>

            <div className="matches-group">
                <h3 className="group-title">Live</h3>
                <div className="match-images">
                    <img src={liveMatch1} alt="Live Match 1" />
                    <img src={liveMatch2} alt="Live Match 2" />
                </div>
            </div>

            <div className="matches-group">
                <h3 className="group-title">Upcoming</h3>
                <div className="match-images">
                    <img src={upcomingMatch1} alt="Upcoming Match 1" />
                    <img src={upcomingMatch2} alt="Upcoming Match 2" />
                </div>
            </div>
        </section>  
    );
};

export default Matches;
