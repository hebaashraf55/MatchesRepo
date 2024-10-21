import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './TopPlayers.css'; // Import the CSS file
import player from '../assets/Top-Player-Photo.png'

const TopPlayers: React.FC = () => {
    const players = [
        { name: 'Player 1', points: 150, wins: 5, photo: player },
        { name: 'Player 2', points: 120, wins: 3, photo: player },
        { name: 'Player 3', points: 90, wins: 2, photo: player},
    ];

    return (
        <section className="top-players-section">
            <div className="section-header">
                <h1 className="section-title">Top Players</h1>
                <Button variant="" className="see-all-btn">
                    See All Players
                </Button>
            </div>
        <Row className="justify-content-center">
            {players.map((player, index) => (
                <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                    <Card className="player-card">
                        <div className="player-photo">
                            <img src={player.photo} alt={player.name} />
                        </div>
                        
                    </Card>
                </Col>
            ))}
        </Row>
    </section>
    );
};

export default TopPlayers;
