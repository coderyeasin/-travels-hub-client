import React, { useEffect } from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import AddNewZones from '../AddNewZones/AddNewZones';
import ManageAllZones from '../ManageAllZones/ManageAllZones';
import MyTour from '../MyTour/MyTour';
import TotalUser from '../TotalUser/TotalUser';
import './Dashboard.css';

const Dashboard = () => {
    const { user, userLogOut } = useAuth()
    return (
        <>
            <Container>
                <Row >
                    <div className="col-md-2 py-5 back">
                    <Nav defaultActiveKey="/dashboard" className="flex-column py-5">
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="/dashboard">Dashboard</HashLink>
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="/mytour">My Zones</HashLink>
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="/addnewzones">Add New TourZone</HashLink>
                        <HashLink className="text-light text-decoration-none fs-5 mb-3" to="/manageallzones">Manage All TourZone</HashLink>
                        <HashLink onClick={userLogOut} className="text-light text-decoration-none fs-5 mb-3" to="">Logout</HashLink>
                        </Nav>
                    </div>
                    <div className="col-md-10 py-3">
                        <Row>
                        <div className="col-md-10 mx-auto">
                                <h3 className="text-center">Selected Zones</h3>
                               {user.code ||  <MyTour></MyTour>}
                               {user.image &&  <AddNewZones></AddNewZones>}
                               {user.location && <ManageAllZones></ManageAllZones>} 
                                {user.name && <TotalUser></TotalUser>}
                        </div>
                        <div className="col-md-2">
                        {user?.uid &&
                            <div className="mx-auto">
                            <img className="img-fluid mx-auto" src={user.photoURL} width="50px" height="50px" alt="" style={{borderRadius: '80px'}} />
                            <h5>{user?.displayName}</h5>
                            <p>Email: {user?.email}</p>
                            {user?.uid && 
                                <p>{user.phoneNumber}</p>
                            }
                            <p>Last Sign In: {user.metadata.lastSignInTime}</p>
                            </div>
                                }
                              <div className="shadow px-2 py-3">
                              <h5 className="text-center text-danger">Camp in Pahar</h5>
                                <p className="text-center text-success">wanna join with us?</p>
                                <button className="mx-3 btn btn-outline-info">Book Now!</button>
                                </div>
                        </div>
                       </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;