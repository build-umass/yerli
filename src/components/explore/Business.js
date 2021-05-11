import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { AiFillPhone, AiOutlineGlobal, AiOutlineClockCircle } from 'react-icons/ai';
import { BsGeoAlt } from 'react-icons/bs';

import {transformPhoneNumber, transformHoursOfOper} from '../ModalHelper'
import { Redirect } from 'react-router';

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null
        }
    }

    componentDidMount() {
        const ListItems = `
        query {
            getLocalVersionProd(id:${this.props.id}) {
                id
                name
                business_bio
                owner_bio
                hours_of_oper
                phone_num
                website
                photos
                email
                address
                topProducts
            }
        }
        `;

        API.graphql(graphqlOperation(ListItems))
            .then(res => {
                const data = (res.data.getLocalVersionProd);
                this.setState({ isLoaded: true, data })
            },
                error => {
                    this.setState({ isLoaded: true, error })
                })
    }
    populateTopProducts(products){
        let key = 0;
        return products.map(product => (
            <div className='text-dark' key={key++}>
                {product}
            </div>
        ))
    }
    render() {
        const { isLoaded } = this.state;
        const data = this.state.data;
        if(isLoaded && data === null){
            return(
                <Redirect to='/explore/'/>
            );
        }
        return (
            <div>
                <div className="body">
                    {isLoaded ?
                        <Card className='modalCard'>
                            <Container>
                                <Row>
                                  <div>
                                      <a href='/explore'>
                                        <Image className='backButton' src={require("../../images/vector/arrowleft.svg")} />
                                      </a> 
                                    <h3 className="text-dark backText">Go back</h3>
                                  </div>  
                                </Row>
                                <Row>
                                    <Col>
                                        <Image className="topImage" src={data.photos[2]} ></Image>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="text-center">
                                        <h3 className="text-dark modal-title">{data.name}</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-left">
                                        <h5 className="text-dark modal-title">About</h5>
                                    </Col>
                                </Row>
                                <Row className="modalMainBody">
                                    <Col md={6} className="text-left">
                                        <div className="text-dark modal-text">{data.business_bio}</div>
                                        {data.topProducts.length > 0 ? 
                                        <div>
                                        <h5 className='text-dark modal-title'>
                                            Best Sellers:
                                        </h5>
                                        {this.populateTopProducts(data.topProducts)}
                                        </div> : null}
                                    </Col>
                                    <Col md={6} className="text-left">
                                        <div className="text-dark modal-text">
                                            <AiFillPhone size={20} color='black' style={{ marginRight: '5px' }} />
                                            <a href={'tel:' + data.phone_num} style={{ color: 'black' }}>{transformPhoneNumber(data.phone_num)}</a>
                                        </div>
                                        <div className="text-dark modal-text">
                                            <AiOutlineGlobal size={20} color='black' style={{ marginRight: '6px' }} />
                                            <a href={data.website} target='_blank' rel="noopener noreferrer" style={{ color: 'black' }}>{data.website}</a>
                                        </div>
                                        <div className="text-dark modal-text">
                                            <AiOutlineClockCircle size={20} color='black' style={{ marginRight: '1px' }} />
                                            {transformHoursOfOper(data.hours_of_oper)}
                                        </div>
                                        <div className="text-dark modal-text">
                                            <BsGeoAlt size={20} color='black' style={{ marginRight: '5px' }} />
                                            {data.address}
                                        </div>
                                        <h5 className='text-dark modal-title'>
                                            A word from the owner:
                                        </h5>
                                        <div className='text-dark'>{data.owner_bio}</div>
                                    </Col>
                                </Row>
                            </Container>
                        </Card> : null}
                </div>
            </div >
        )
    }
}