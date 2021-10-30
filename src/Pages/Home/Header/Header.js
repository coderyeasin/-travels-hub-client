import useAuth from '../../../Hooks/useAuth';
import React from 'react';
import { Container,Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    const { user, userLogOut} = useAuth();

    
    return (
        <div id="home">
           <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Travels Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-3 my-lg-0 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <HashLink className="me-3 fs-6" to="/home#home" id="menu">Home</HashLink>
                        <HashLink className="me-3 fs-6" id="menu" to="/home#upcoming">Upcoming</HashLink>
                        <HashLink className="me-3 fs-6" id="menu" to="/home#zone">TouristsZone</HashLink>
                        <HashLink className="me-3 fs-6" id="menu" to="/home#location">Location</HashLink>
                        <HashLink className="me-3 fs-6" id="menu" to="/home#blog">Blog</HashLink>
                        {user?.email &&
                                <Link to="/dashboard" className="text-decoration-none">
                             <NavDropdown className="me-3 fs-6" title="Dashboard" id="navbarScrollingDropdown">
                             <NavHashLink to="/dashboard" id="menu" className="">My-Tours</NavHashLink> <br />
                             <NavHashLink to="/addnew" id="menu" className="">Add New TourZone</NavHashLink> <br />
                             <NavHashLink to="/manageall" id="menu" className="">Manage AllTourZone</NavHashLink>
                             <NavDropdown.Divider />
                             <NavDropdown.Item href="#action5">
                                 Get Start a Event
                             </NavDropdown.Item>
                            </NavDropdown>    
                            </Link>
                                
                        }
                           {user?.email && user.displayName}
                            {user?.email ?
                                <Nav.Link onClick={userLogOut} id="menu" > Logout </Nav.Link>
                                :
                                <HashLink className="me-3 fs-6" to="/register" id="menu">Register</HashLink>
                            }
                    </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;