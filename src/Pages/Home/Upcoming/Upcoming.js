import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, CarouselItem, Row } from 'react-bootstrap';
import './Upcoming.css';

const Upcoming = () => {
    const [story, setStory] = useState([])
    
       //Using GET API From DB
       useEffect(() => {
        fetch('http://localhost:5000/tourism')
            .then(res => res.json())
        .then(data => setStory(data))
    },[])
    return (
        <div className="mx-3 booking fs-5" id="upcoming">
  
            
            <Row className="justify-content-center align-items-center">
                <div className="col-md-5">
                    <h3 className="text-center my-3">Eyes on here its always up-to-date</h3>
                    <p>Most people’s experience of the Norwegian fjords is from the deck of a cruise ship, but it’s more rewarding to set out on foot and explore. Of course, the geography dictates that the walks involve big ups and downs, starting and finishing at the fjord edge. It’s exhilarating and not for the fainthearted..</p>
                    <p>Take a tour of the megalithic sites
                        There are a dozen megalithic sites in and around the Alentejo region. The circuit starts with the Almendres Megalithic settlement, the largest and oldest monument that dates back to 4,000 years. Make a stop at the small village of Nossa Senhora de Guadalupe, and continue along the marked trail to discover Almendres Menhir, Anta Grande do Zambujeiro and more.</p>
                 
                </div>
                <div className="col-md-6 my-5">

            <Carousel className="upcoming w-50 mx-auto shadow-lg">         
                    {story.map(data => <CarouselItem>
                        <Card className="pb-3">
                    <Card.Img variant="top" className="img-fluid" src={data.image} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.description.slice(0,90)}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </CarouselItem>)}                
            </Carousel>
                </div>
        </Row>



















        {/* <Carousel className="w-50 mx-auto">
                <Carousel.Item>
                <Card>
                <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/4d4Lv5V/12.jpg" />
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
                </Carousel> */}
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