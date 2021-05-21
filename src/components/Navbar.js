import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../App.css'

export default function NavbarComponent() {
    return (
        <Navbar style={{ backgroundColor: '#30C692' }} expand="sm">
            <div id="navbar">
                <Navbar.Brand href="/">
                    <div className="Logo">
                        <p>the Yerli.</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link target='_blank' rel="noopener noreferrer" href='https://airtable.com/shrF1mYf40GTKswiv'>
                            <div className="Nav-Text">
                                <p>Feedback</p>
                            </div>
                        </Nav.Link>
                        <Nav.Link target='_blank' rel="noopener noreferrer" href='https://share.hsforms.com/1yVWUTuaYTaScvCLCzXWF_g5c7qf'>
                            <div className="Nav-Text">
                                <p>Suggest a Business</p>
                            </div>
                        </Nav.Link>
                        <Nav.Link target='_blank' rel="noopener noreferrer" href='https://www.theyerli.com/download'>
                            <div className="Nav-Text">
                                <p>Download the app</p>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar >
    )
}