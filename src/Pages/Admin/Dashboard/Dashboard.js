import React from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import AddNewTours from '../AddNewTours/AddNewTours';
import ManageAllTours from '../ManageAllTours/ManageAllTours';
import './Dashboard.css';

const Dashboard = () => {
    const {user} = useAuth()
    return (
        <>
            <Container>
                <Row>
                    <div className="col-md-4 back">
                    <Nav defaultActiveKey="/dashboard" className="flex-column text-light">
                        <Nav.Link className="text-light" href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link className="text-light" eventKey="/addnew">Add New TourZone</Nav.Link>
                        <Nav.Link className="text-light" eventKey="/manageall">Manage All TourZone</Nav.Link>
                        <Nav.Link className="text-light" eventKey="">Logout</Nav.Link>
                        </Nav>
                    </div>
                    <div className="col-md-8">
                        <AddNewTours></AddNewTours>
                        <ManageAllTours></ManageAllTours>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;