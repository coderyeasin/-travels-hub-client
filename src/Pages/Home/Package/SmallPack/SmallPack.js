import React from 'react';
import { Button, ButtonGroup, Card, Container, Row } from 'react-bootstrap';

const SmallPack = ({ tours }) => {
    const{title, image, destination, dress, cost, description} = tours
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
                            <p>{destination}</p>
                            <p>{dress}</p>
                            <p>{description.slice(0,220)}</p>

                            <Button className="bg-info border-0 mb-3">Tour Plan</Button>
                        </div>

                    </div>
         
                </Row>
            </Container>
        </>
    );
};

export default SmallPack;