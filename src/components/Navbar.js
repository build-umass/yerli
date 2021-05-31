import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../App.css'

export default function NavbarComponent() {
    return (
        <Navbar expand="md" id="navbar">
            <Navbar.Brand href="https://www.theyerli.com/">
                <div className="Logo">
                    <p>the Yerli.</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link target='_blank' rel="noopener noreferrer" href='https://airtable.com/shrF1mYf40GTKswiv'>
                        <div className="Nav-Text">
                            Feedback
                        </div>
                    </Nav.Link>
                    <Nav.Link target='_blank' rel="noopener noreferrer" href='https://share.hsforms.com/1yVWUTuaYTaScvCLCzXWF_g5c7qf'>
                        <div className="Nav-Text">
                            Suggest a Business
                        </div>
                    </Nav.Link>
                    <Nav.Link target='_blank' rel="noopener noreferrer" href='https://www.theyerli.com/download'>
                        <div className="Nav-Text">
                            Download the app
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}