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
                                <p>
                                Happy to say, that adventure has now been launched in Bangladesh! Day by day, kayaking has become quite popular. Many people are kayaking to experience the thrill of traveling on the river in a colorful boat. The word Kayak is not so common in our
                               </p>
                            </div>
                            <div className="col-md-4">
                            
                                <p>
                                We know Tropical Deciduous Forest covers half of the total forest in the world. In this article, we will know about Tropical Deciduous Forest, location in the world, trees, animals, economic importance, etc. If you do not read about Mangrove and top 10 mangrove areas in the world I suggest to check it also. 
                                </p>
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