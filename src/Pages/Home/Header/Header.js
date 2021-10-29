import useAuth from '../../../Hooks/useAuth';
import React from 'react';
import { Container,Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import './Header.css'

const Header = () => {

    const { user, userLogOut} = useAuth();

    
    return (
        <div>
           <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Travels Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link id="menu" href="#action1">Home</Nav.Link>
                        <Nav.Link id="menu" href="#action1">Combo</Nav.Link>
                        <Nav.Link id="menu" href="#action1">Services</Nav.Link>
                        <NavDropdown title="Package" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id="menu" href="#action1">Location</Nav.Link>
                        <Nav.Link id="menu" href="#action1">Blog</Nav.Link>
                           {user?.uid && user.displayName}
                            {user?.uid ?
                                <Nav.Link onClick={userLogOut} id="menu" > Logout </Nav.Link>
                                :
                                <Nav.Link id="menu" > Register </Nav.Link>
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