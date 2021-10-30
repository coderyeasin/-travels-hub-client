import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const ManageAllZones = () => {
    const [zones, setZones] = useState([])
       //Using GET API From DB
       useEffect(() => {
        fetch('http://localhost:5000/tourism')
            .then(res => res.json())
        .then(data => setZones(data))
    },[])
    return (
        <div>
            <Container>
                <Row>
                    {zones?.map(tours => <div key={tours._id}>
                        <img src={tours.image} className="img-fluid" alt="" />
                        <h3>{tours.title}</h3>
                        <p>{tours.description}</p>
                        <button className="btn btn-outline-warning">Update</button>
                        <button className="btn btn-outline-danger">Delete</button>
                    </div>)}

                </Row>
            </Container>
        </div>
    );
};

export default ManageAllZones;