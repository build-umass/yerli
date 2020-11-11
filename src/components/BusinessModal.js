import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import { AiFillPhone, AiOutlineGlobal, AiOutlineClockCircle } from 'react-icons/ai';
import { BiFoodMenu } from 'react-icons/bi';
import { BsGeoAlt } from 'react-icons/bs';

export default function BusinessModal({ data }) {
    console.log(data)

    return (
        <Card className="modal-card">
            <Card.Body>
                <Row>
                    <Col md={6} className="text-left">
                        <h3 className="text-dark modal-text">{data.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left">
                        <h5 className="text-dark modal-text">About {data.name} • $$$</h5>
                    </Col>
                    {data.flags.length > 0 ? <Col className="text-left">
                        <h5 className="text-dark modal-text">{data.flags[0]}</h5>
                    </Col> : <></>}
                </Row>
                <Row>
                    <Col className="text-left">
                        <div className="text-dark modal-text">{data.business_bio}</div>
                    </Col>
                    <Col className="text-left">
                        <div className="text-dark modal-text">
                            <AiFillPhone size={20} color='black' />
                                        {data.phone_num}
                                    </div>
                        <div className="text-dark modal-text">
                            <AiOutlineGlobal size={20} color='black' />
                            <a href='https://www.subway.com/en-us'>{data.website}</a>
                        </div>
                        <div className="text-dark modal-text">
                            <AiOutlineClockCircle size={20} color='black' />
                                        {data.hours_of_oper}
                                    </div>
                        <div className="text-dark modal-text">
                            <BsGeoAlt size={20} color='black' />
                                        {data.streetAddress}
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
                            {data.topProducts[0]}
                                    </div>
                        <div className='text-dark'>
                        {data.topProducts[1]}
                                    </div>
                        <div className='text-dark'>
                        {data.topProducts[2]}
                                    </div>
                    </Col>
                    <Col className="text-left">
                        <h5 className='text-dark'>
                            A word from the owner:
                                    </h5>
                        <div className='text-dark'>{data.owner_bio}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={data.photos[0]} width={'100%'}></Image>
                    </Col>
                    <Col>
                        <Image src={data.photos[1]} width={'100%'}></Image>
                    </Col>
                    <Col>
                        <Image src={data.photos[2]} width={'100%'}></Image>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
