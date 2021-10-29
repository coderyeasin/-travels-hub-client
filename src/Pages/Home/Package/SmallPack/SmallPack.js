import React from 'react';
import { Button, ButtonGroup, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SmallPack = ({ tours }) => {
    const{id, title, image, destination, dress, cost, description} = tours
    return (
        <>
            <Container>
                <Row className="d-flex">
                    <div className="col-md-6">
                        <Row>
                            <div className="col-md-4"> </div>
                            <div className="col-md-8 mt-3">
                            <img className="img-fluid" src={image} alt="" /> 
                            </div>

                    </Row>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="mt-3">
                            <h3 >{title}</h3>
                            <p><span>{destination}</span><br />
                           <small> {dress}</small> <br />
                            {description.slice(0,220)}</p>

                            <Link to={`/booking/${id}`}>
                    <Button variant="primary" className="bg-info border-0 mb-3">Book Now</Button>
                    </Link>
                        </div>

                    </div>
         
                </Row>
            </Container>
        </>
    );
};

export default SmallPack;