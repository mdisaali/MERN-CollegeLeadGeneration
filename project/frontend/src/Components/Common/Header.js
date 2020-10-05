import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Collapse, Container, Nav, Navbar, NavbarToggler, NavItem, Row } from 'reactstrap';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Container>
            <Row>
                <Col>
                    <Navbar expand="md">

                        <NavLink to="/">
                            Logo
                        </NavLink>

                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="ml-2">
                                    <NavLink to="/">Home</NavLink>
                                </NavItem>
                                <NavItem className="ml-2">
                                    <NavLink to="/About">About</NavLink>
                                </NavItem>
                                <NavItem className="ml-2">
                                    <NavLink to="/Contact">Contact</NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>

    );
}

export default Header;