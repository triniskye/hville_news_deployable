import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";



function NavBar(){ 

    return (
        <div>
            <Navbar style={{backgroundColor: "rgb(248, 242, 232)"}} expand="lg">
                <Container>
                    <Navbar.Brand style={{ cursor: "default", color: "rgb(102, 7, 47)"}}>Open 7 Days</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home |</Nav.Link>
                            <Nav.Link href="/menu">Menu |</Nav.Link>
                            <Nav.Link href="/contact">Contact Us |</Nav.Link>
                            <Nav.Link href="/about">About |</Nav.Link>
                            <Nav.Link href="/account">Vendor</Nav.Link>


                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </div>


    );
}

export default NavBar;