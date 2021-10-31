import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import './ManageAllZones.css';


const ManageAllZones = () => {
    const [zones, setZones] = useState([])
    const [manage, setManage] = useState(false)
       //Using GET API From DB
       useEffect(() => {
        fetch('http://localhost:5000/tourism')
            .then(res => res.json())
        .then(data => setZones(data))
       }, [manage])
    
    // //Delete
    const handleDelUser = id => {
        console.log(id);
        const procced = window.confirm('Are you sure want to delete?')
       if (procced) {
        fetch(`http://localhost:5000/alllzones/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log('success');
                    setManage(!manage)
                }
                else {
                    setManage(false)
                }
            });
       }
    };
    return (
        <div>
            <Container>
                <Row className="my-5">
                    <h3 className="text-center mb-3">Manage All Zones || You can mange from here</h3>
                    {zones?.map(tours => <Table  responsive striped bordered hover key={tours._id}>
                    <thead>
                        <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Location</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{tours.id}</td>
                        <td>{tours.title}</td>
                        <td>{tours.cost}</td>
                        <td>{tours.destination}</td>
                        <td>{tours.image}</td>
                        <td>{tours.description.slice(0, 60)}...</td>
                        <td><button className="text-warning border-warning">OK</button></td>
                        <td><button onClick={()=> handleDelUser(tours._id)} className="text-danger border-danger">X</button></td>
                        </tr>
                    </tbody>
                    </Table>
                    )}                                
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllZones;