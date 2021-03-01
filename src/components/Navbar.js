import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { BsSearch, BsGrid, BsMap } from 'react-icons/bs'

export default function NavbarComponent() {
    return (
        <Navbar style={{backgroundColor: '#30C692', height: 80}} fluid='true' expand="lg">
            <Navbar.Brand href="/">
                <div className="Logo">
                    <p>the Yerli.</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* <Form inline className="Search">
                    <div className="Search-Bar">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </div>
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                <Nav className="ml-auto">
                    <div>
                        <Nav.Link>
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
                        <Nav.Link target='_blank' rel="noopener noreferrer" href='https://apps.apple.com/us/app/the-yerli/id1532573222'>
                            <div className="Nav-Text">
                                <p>Download the app</p>
                            </div>
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href="/feed">
                            <div className="Nav-Button">
                                <BsGrid size="35" color="#1c8d66" />
                                <p>Feed</p>
                            </div>
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href="/explore">
                            <div className="Nav-Button">
                                <BsSearch size="35" color="#1c8d66" />
                                <p>Explore</p>
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