import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import { AiFillPhone, AiOutlineGlobal, AiOutlineClockCircle } from 'react-icons/ai';
import { BiFoodMenu } from 'react-icons/bi';
import { BsGeoAlt } from 'react-icons/bs';

export default function BusinessCard({ businessTitle, backgroundPicture, data }) {
  const titleStyles = {
    fontSize: "1.5rem",
  }
  const [showModal, setModal] = useState(false);
  return (
    <div>
      <div onClick={() => setModal(true)}>
        <Card className="main-card" bg={'dark'} style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('${backgroundPicture}')` }}>
          <Card.Body>
            <Card.Title style={titleStyles} className="business-title">{businessTitle}</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <Modal size='lg' show={showModal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6} className="text-left">
                <h3 className="text-dark modal-text">{data.name}</h3>
              </Col>
            </Row>
            <Row>
              <Col className="text-left">
                <h5 className="text-dark modal-text">About {data.name} • $$$</h5>
              </Col>
              {/* {data.flags.length > 0 ? <Col className="text-left">
                <h5 className="text-dark modal-text">{data.flags[0]}</h5>
              </Col> : <></>} */}
            </Row>
            <Row>
              <Col md={6} className="text-left">
                <div className="text-dark modal-text">{data.business_bio}</div>
              </Col>
              <Col md={6} className="text-left">
                <div className="text-dark modal-text">
                  <AiFillPhone size={20} color='black' />
                  {'(' + data.phone_num.substring(0,3) + ') ' + data.phone_num.substring(3,6) + '-' + data.phone_num.substring(6,10)}
                </div>
                <div className="text-dark modal-text">
                  <AiOutlineGlobal size={20} color='black' />
                  <a href={data.website} target='_blank'>{data.website}</a>
                </div>
                <div className="text-dark modal-text">
                  <AiOutlineClockCircle size={20} color='black' />
                  {/* {data.hours_of_oper} */'Mon-Thurs: 8-4pm'}
                </div>
                <div className="text-dark modal-text">
                  <BsGeoAlt size={20} color='black' />
                  {data.address}
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
                <Image src={data.photos[2]} width={'100%'}></Image>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  )
}
