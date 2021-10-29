import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Location.css';

const Location = () => {
    return (
        <div className="tour-location my-5">
            
                <Row className="py-5 mx-auto">
                    <div className="col-md-2"></div>
                <div className="col-md-7 py-3 locations">
                    <h3 className="text-center my-3">Tourist attractions in the world</h3>
                    <Row className="d-flex">
                    <div className="col-md-6 place">
                    <h3>Saka Hafong, Bandarban</h3>
                    <h3>Eifel Tower, France</h3>
                    <h3>Colosseum, Paris</h3>
                    <h3>Louvre Museum, Paris</h3>
                    <h3>Machu Picchu</h3>
                    <h3>Statue of Liberty, NY</h3>
                    <h3>Statue of Liberty, NY</h3>
                            <h3>Statue of Liberty, NY</h3>
                        </div>
                      
                    <div className="col-md-6">
                    <h3>Cental Park, NY</h3>
                    <h3>Sydney Opera, AS</h3>
                    <h3>Great Wall, China</h3>
                    <h3>Buckhingham Place, London</h3>
                    <h3>Taj Mahal, India</h3>
                    <h3>Forbidden City, China</h3>
                    <h3>Grand Canyon</h3>
                    <h3>Stonehenge</h3>
                    </div>
                   </Row>
                </div>
                    <div className="col-md-3"></div>
                </Row>
            
        </div>
    );
};

export default Location;