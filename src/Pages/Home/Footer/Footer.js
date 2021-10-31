import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-cover">
            <Container className="footer">
                <Row>
                    <div className="col-md-3">
                        <h3 className="mb-e">Follow us</h3>
                        <Link to="" className="text-decoration-none text-light mb-3">Facebook</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">Twitter</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">YourTube</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">LinkedIn</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">Instaram</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">Reddit</Link> <br />
                    </div>
                    <div className="col-md-3">
                        <h3 className="mb-e">Popular Links</h3>
                           <Link to="" className="text-decoration-none text-light mb-3">Best tour location</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">Adventure List</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">Cheapest Tour</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">Shah Manjil</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">Kayaking Zabo</Link> <br />
                           <Link to="" className="text-decoration-none text-light mb-3">Pahare Rat Katabo</Link> <br />
                    </div>
                    <div className="col-md-3">
                        <h3 className="mb-e">Our Recent Posts</h3>
                            <strong>Visit Thailand, Bali And China</strong>
                            <small>September 7, 2016</small><br />
                            <strong>The Sound Of Our Jungle</strong><br />
                            <small>September 7, 2016</small><br />
                            <strong>
                            New Year, New Resolutions!</strong><br />
                            <small>September 7, 2016</small></div>
                    <div className="col-md-3">
                        <h3 className="mb-e">Address</h3>
                            <strong>Aci, kutubtali, Noakhali</strong><br />
                            <small>Maijdee court</small><br />
                            <strong>Phone: 0134254234</strong><br />
                            <small>Always Open</small><br />
                            <strong>
                            Let us know</strong><br />
                            <small>send a mail</small>
                    </div>
                </Row>
        </Container>
        </div>
    );
};

export default Footer;