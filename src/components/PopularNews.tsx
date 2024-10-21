import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './PopularNews.css'; // Import the CSS file

// Import news images
import news1Photo from '../assets/NewsImageFull.png';
import news2Photo from '../assets/SideVideoCover2.png';
import news3Photo from '../assets/SideVideoCover2.png';

const PopularNews: React.FC = () => {
    const newsItems = [
        {
            title: 'Headline may be written here',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
            date: 'October 19, 2024',
            photo: news1Photo,
            isMain: true,
        },
        {
            title: 'Exciting News Title 2',
            description: 'Lorem ipsum dolor sit amet',
            date: 'October 18, 2024',
            photo: news2Photo,
            isMain: false,
        },
        {
            title: 'Exciting News Title 3',
            description: 'Lorem ipsum dolor sit amet',
            date: 'October 17, 2024',
            photo: news3Photo,
            isMain: false,
        },
    ];

    return (
        <div className="container mt-4">
            {/* Section Header */}
            <Row className="align-items-center mb-4 section-header">
                <Col xs={8} md={6} className='text-start'>
                    <h2 className="section-title">Popular News</h2>
                </Col>
                <Col xs={4} md={6} className="text-end">
                    <Button className="see-more-btn">See More</Button>
                </Col>
            </Row>

            {/* News Cards */}
            <Row>
                <Col md={7} className="mb-3">
                    <Card className="news-card large-card">
                        <Card.Img variant="top" src={newsItems[0].photo} />
                        <div className="p-2 mt-3">
                            <Card.Title as="h3">{newsItems[0].title}</Card.Title>
                            <Card.Text>{newsItems[0].description}</Card.Text>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <span>{newsItems[0].date}</span>
                                <Button variant="success">Read More</Button>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={5} className="d-flex flex-column justify-content-between mb-3">
                    {newsItems.slice(1).map((news, index) => (
                        <Card key={index} className="news-card small-card flex-row mb-4">
                            <div className="news-image">
                                <Card.Img src={news.photo} />
                            </div>
                            <div className="p-3 text-content">
                                <Card.Title as="h3">{news.title}</Card.Title>
                                <Card.Text>{news.description}</Card.Text>
                                <span>{news.date}</span>
                                <Button variant="success" className="read-more-btn">
                                    Read More
                                </Button>
                            </div>
                        </Card>
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default PopularNews;
