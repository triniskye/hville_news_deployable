import React, { useState } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import {useSelector} from "react-redux";


function NavBar(){ 
    const cartQuantity = useSelector((state)=> state.cart.totalQuantity)
    return (
        <div>
            <Navbar style={{backgroundColor: "rgb(248, 242, 232)"}} expand="lg">
                <Container style={{width: "90vw"}}>
                    <Navbar.Brand style={{ cursor: "default", color: "rgb(102, 7, 47)", fontSize: "1.5vw"}}>Open 7 Days</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home |</Nav.Link>
                            <Nav.Link href="/menu">Menu |</Nav.Link>
                            <Nav.Link href="/contact">Contact Us |</Nav.Link>
                            <Nav.Link href="/about">About |</Nav.Link>
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/account" style={{fontSize: "1.25vw"}}>Overview</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
                <Nav.Link href="/cart" style={{fontSize:"2vw"}}>🛒{cartQuantity}</Nav.Link>
            </Navbar>
        </div>


    );
}

export default NavBar;