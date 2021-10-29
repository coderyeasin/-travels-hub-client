import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';

const Upcoming = () => {
    const [story, setStory] = useState([])
    
       //Using GET API From DB
       useEffect(() => {
        fetch('http://localhost:5000/tourism')
            .then(res => res.json())
        .then(data => setStory(data))
    },[])
    return (
        <div className="bg-success mx-3">
  
        <Carousel>
                <Carousel.Item>
                <Card>
                <Card.Img variant="top" className="img-fluid w-25" src="https://i.ibb.co/4d4Lv5V/12.jpg" />
                <Card.Body>
                    <Card.Title>hello</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Carousel.Item>

                <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.ibb.co/4d4Lv5V/12.jpg" />
                    <Card.Body>
                        <Card.Title>hello</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.ibb.co/4d4Lv5V/12.jpg" />
                    <Card.Body>
                        <Card.Title>hello</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Upcoming;

/* 
<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>hello</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
*/