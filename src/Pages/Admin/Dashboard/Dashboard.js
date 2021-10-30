import React from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const {user} = useAuth()
    return (
        <>
            <Container>
                <Row >
                    <div className="col-md-2 py-5 back">
                    <Nav defaultActiveKey="/dashboard" className="flex-column py-5">
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="/dashboard">Dashboard</HashLink>
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="/myzones">My Zones</HashLink>
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="/addnewzones">Add New TourZone</HashLink>
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="/manageallzones">Manage All TourZone</HashLink>
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="">Logout</HashLink>
                        </Nav>
                    </div>
                    <div className="col-md-10">
                        <Row>
                        <div className="col-md-9">
                                <h3>View Load Products</h3>
                        
                        </div>
                        <div className="col-md-3">
                        {user?.uid &&
                            <div>
                            <img className="img-fluid" src={user.photoURL} width="150px" height="150px" alt="" style={{borderRadius: '80px'}} />
                            <h3>Username: {user?.displayName}</h3>
                            <h4>Email: {user?.email}</h4>
                            {user?.uid && 
                                <p>{user.phoneNumber}</p>
                            }
                            <p>Last Sign In: {user.metadata.lastSignInTime}</p>
                            </div>
                        }
                        </div>
                       </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;