import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../App.css'

export default function NavbarComponent() {
    return (
        <Navbar style={{backgroundColor: '#30C692', height: 80}} fluid='true' expand="lg">
            <div style={{width: 940, display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}>
            <Navbar.Brand href="/">
                <div className="Logo">
                    <p>the Yerli.</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <div>
                        <Nav.Link target='_blank' rel="noopener noreferrer" href='https://airtable.com/shrF1mYf40GTKswiv'>
                            <div className="Nav-Text">
                                <p>Feedback</p>
                            </div>
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link target='_blank' rel="noopener noreferrer" href='https://share.hsforms.com/1yVWUTuaYTaScvCLCzXWF_g5c7qf'>
                            <div className="Nav-Text">
                                <p>Suggest a Business</p>
                            </div>
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link target='_blank' rel="noopener noreferrer" href='https://www.theyerli.com/download'>
                            <div className="Nav-Text">
                                <p>Download the app</p>
                            </div>
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar >
    )
}