import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import { AiFillPhone, AiOutlineGlobal, AiOutlineClockCircle } from 'react-icons/ai';
import { BiFoodMenu } from 'react-icons/bi';
import { BsGeoAlt } from 'react-icons/bs';
import { API, graphqlOperation } from 'aws-amplify';

export default function BusinessModal({ id }) {
    const ListItems = `
    query {
        listLocalBetaVersions {
        items {
            id
            name
            flags
            workers
            typeOfBusiness
            photo
            email
            city
            lon
            lat
            typeOfCuisine
        }
        }
    }
    `;

    API.graphql(graphqlOperation(ListItems))
    .then(res => {
        console.log(res)
    },
    err => {
        console.log(err)
    })
    

    return (
        <Card className="modal-card">
            <Card.Body>
                <Row>
                    <Col md={6} className="text-left">
                        <h3 className="text-dark modal-text">Subway</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left">
                        <h5 className="text-dark modal-text">About Subway • $$$</h5>
                    </Col>
                    <Col className="text-left">
                        <h5 className="text-dark modal-text">Minority Owned</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left">
                        <div className="text-dark modal-text">We Create delicious and custom submarine should create delicious and custom submarine sandwiches</div>
                    </Col>
                    <Col className="text-left">
                        <div className="text-dark modal-text">
                            <AiFillPhone size={20} color='black' />
                                        413-256-1919
                                    </div>
                        <div className="text-dark modal-text">
                            <AiOutlineGlobal size={20} color='black' />
                            <a href='https://www.subway.com/en-us'>https://www.subway.com/en-us</a>
                        </div>
                        <div className="text-dark modal-text">
                            <AiOutlineClockCircle size={20} color='black' />
                                        11am-9pm
                                    </div>
                        <div className="text-dark modal-text">
                            <BsGeoAlt size={20} color='black' />
                                        4 Main st Amherst Ma 01002
                                    </div>
                        <div className="text-dark modal-text">
                            <BiFoodMenu size={20} color='black' />
                            <a href='#'>Menu pdf/link</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left">
                        <h5 className='text-dark'>
                            Best Sellers:
                                    </h5>
                        <div className='text-dark'>
                            Italian BMI
                                    </div>
                        <div className='text-dark'>
                            Steak and Cheese
                                    </div>
                        <div className='text-dark'>
                            Chicken Bacon Ranch
                                    </div>
                    </Col>
                    <Col className="text-left">
                        <h5 className='text-dark'>
                            A word from the owner:
                                    </h5>
                        <div className='text-dark'>
                            Hello! My name is Jason Paulo. I started working at a local Subway restaurant at the age of 15. I became very proud and loyal to the brand and the idea of being a franchisee. The thought of becoming my own boss  fascinated  me . I bought became a franchisee and bought my first store at the age of 19! Now 31 years old, I have been here Amherst for about 4 years. I love this town!
                                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src='https://theyerli.com/p/0/profile0.jpeg' width={'100%'}></Image>
                    </Col>
                    <Col>
                        <Image src='https://theyerliphotos.s3.amazonaws.com/icons/fork.png' width={'100%'}></Image>
                    </Col>
                    <Col>
                        <Image src='https://theyerli.com/p/0/profile2.jpeg' width={'100%'}></Image>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
