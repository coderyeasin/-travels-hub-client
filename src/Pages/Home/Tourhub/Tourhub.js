import React from 'react';
import { Container, Row } from 'react-bootstrap';
import girl from '../../../images/03.jpg'
    
const Tourhub = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <div className="col-md-6 align-items-center">
                        <img className="img-fluid" src={girl} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center mb-3">Why Travels Hub</h2>
                        <Row>
                            <div className="col-md-4">
                                <h5>Facilities </h5>
                                <h5>Securities </h5>
                                <h5>Luxury Game </h5>
                                <h5>Enroll for Best</h5>
                                <h5>Great tour Ever </h5>
                                <h5>Facilities </h5>
                                <h5>Securities </h5>
                                <h5>Luxury Game </h5>
                                <h5>Enroll for Best</h5>
                                <h5>Great tour Ever </h5>
                            </div>
                            <div className="col-md-4">
                            <h5>Facilities </h5>
                                <h5>Securities </h5>
                                <h5>Luxury Game </h5>
                                <h5>Enroll for Best</h5>
                                <h5>Great tour Ever </h5>
                                <h5>Facilities </h5>
                                <h5>Securities </h5>
                                <h5>Luxury Game </h5>
                                <h5>Enroll for Best</h5>
                                <h5>Great tour Ever </h5>
                            </div>
                            <div className="col-md-4">
                            <h5>Facilities </h5>
                                <h5>Securities </h5>
                                <h5>Luxury Game </h5>
                                <h5>Enroll for Best</h5>
                                <h5>Great tour Ever </h5>
                                <h5>Facilities </h5>
                                <h5>Securities </h5>
                                <h5>Luxury Game </h5>
                                <h5>Enroll for Best</h5>
                                <h5>Great tour Ever </h5>
                            </div>
                            
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Tourhub;