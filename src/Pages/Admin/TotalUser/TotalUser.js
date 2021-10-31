import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';


const TotalUser = () => {
    const [user, setUser] = useState([])
    const [fullUser, setfullUser] = useState(false)

    useEffect(() => {
        fetch('https://rocky-wildwood-05535.herokuapp.com/users')
            .then(res => res.json())
        .then(data => setUser(data))
    }, [fullUser])
    const trueUser = user.filter(pd => pd?.email && pd?.name || pd?.password)
    

    // //Delete
    const handleDelUser = id => {
        console.log(id);
        const procced = window.confirm('Are you sure want to delete?')
       if (procced) {
        fetch(`http://localhost:5000/total/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log('success');
                      setfullUser(!fullUser)
                }
                else {
                    setfullUser(false)
                }
            });
       }
    };
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
                        <td>
                                    <Link to={`/updated/${users._id}`}>
                                    <button className="text-warning border-warning">OK</button>
                                    </Link>
                        </td>
                        <td><button  onClick={() => handleDelUser(users._id)} className="text-danger border-danger">X</button></td>
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