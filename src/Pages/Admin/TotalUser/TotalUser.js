import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'


const TotalUser = () => {
    // const { user } = useAuth()
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    const trueUser = user.filter(pd => pd?.email && pd?.name && pd?.password )
    return (
        <div>
            <Container>
                <Row className="my-5">
                    <h3 className="text-center mb-3">Total Users |{trueUser.length}| You can mange from here</h3>
                    {trueUser?.map(users => <Table  responsive striped bordered hover key={users?._id}>
                    <thead>
                        <tr>
                        <th>#ID</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{users._id}</td>
                        <td>{users.date}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.phone}</td>
                        <td>{users.image}</td>
                        <td><button className="text-warning border-warning">OK</button></td>
                        <td><button className="text-danger border-danger">X</button></td>
                        </tr>
                    </tbody>
                    </Table>
                    )}                                
                </Row>
            </Container>
        </div>
    );
};

export default TotalUser;