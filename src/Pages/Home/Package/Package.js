import { filter } from 'dom-helpers';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const Package = () => {

    const [tourPack, setTourPack] = useState([])

    const tourism = tourPack.filter(packs => packs.cost < 5500)

    //Using GET API From DB
    useEffect(() => {
        fetch('http://localhost:5000/tourism')
            .then(res => res.json())
        .then(data => setTourPack(data))
    },[])
    return (
        <>
            <Container>
                <Row>
                    {tourism?.map(tours => <li key={tours._id} >{tours.title}</li>   )         }
                </Row>
            </Container>
        </>
    );
};

export default Package;