import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import './LargePack.css';

const LargePack = ({ camp }) => {
    const {title, image, description, destination, dress} = camp
    return (
        <div >
          <Card>
            <Card.Img variant="top" className="img-fluid" src={image} />
            <Card.Body>
                    <Card.Title> <h3 >{title}</h3></Card.Title>
                    <Card.Text>                
                            <p><span>{destination}</span><br />
                           <small> {dress}</small> <br />
                            {description.slice(0,220)}</p>
                </Card.Text>
                <Button variant="primary" className="bg-info border-0 mb-3">Tour Plan</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default LargePack;