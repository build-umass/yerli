import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { BsHouseDoor, BsMap } from 'react-icons/bs'

export default function NavbarComponent() {
    return (
        <Navbar fluid='true' bg="light" expand="lg">
            <Navbar.Brand href="/">
                <div className="Logo">
                    <p>the Yerli</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="Search">
                    {/* <BsSearch className="Search" /> */}
                    <div className="Search-Bar">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </div>
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <div>
                        <Nav.Link href="/explore">
                            <div className="Nav-Button">
                                <BsHouseDoor size="35" color="#1c8d66" />
                                <p>Feed</p>
                            </div>
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href="/map">
                            <div className="Nav-Button">
                                <BsMap size="35" color="#1c8d66" />
                                <p>Map</p>
                            </div>
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}