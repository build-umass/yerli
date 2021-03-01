import React from 'react';
import '../App.css';
import './explore/explore.css';
import mapboxgl from 'mapbox-gl';
import { API, graphqlOperation } from 'aws-amplify';
import { transformPhoneNumber, transformHoursOfOper } from './ModalHelper.js'
import Modal from 'react-bootstrap/Modal';
import { AiFillPhone, AiOutlineGlobal, AiOutlineClockCircle } from 'react-icons/ai';
import { BiFoodMenu } from 'react-icons/bi';
import { BsGeoAlt } from 'react-icons/bs';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import queryString from 'query-string';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 42.3732,
      lng: -72.5199,
      zoom: 13,
      items: [],
      modalOpen: false,
      paramSet: false,
      currentMarker: null
    };
  }
  componentDidMount() {
    const ListItems = `
        query {
            listLocalVersionProds {
            items {
                id
                name
                hours_of_oper
                photos
                lat
                lon
                flags
                business_bio
                owner_bio
                phone_num
                website
                photo
                email
                address
                topProducts
            }
          }
        }
        `;

    API.graphql(graphqlOperation(ListItems))
      .then(res => {
        const items = (res.data.listLocalVersionProds.items);
        this.setState({ isLoaded: true, items })
      },
        error => {
          console.log(error)
          this.setState({ isLoaded: true, error })
        })
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    this.setState({ map })
    
  }
  render() {
    if(this.state.isLoaded){
      this.state.items.forEach(marker => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(' + marker.photos[1] + ')';
        el.style.backgroundSize = 'cover'
        el.style.width = '35px';
        el.style.height = '50px';

        const routeId = this.props.match.params.id
        const id = routeId !== undefined ? routeId : queryString.parse(this.props.location.search).id;
        if(!this.state.paramSet && id !== undefined && id === marker.id){
          this.setState({ paramSet: true, modalOpen: true, currentMarker: marker})
        }    

        el.addEventListener('click', () => {
          this.setState({
            modalOpen: true,
            currentMarker: marker
          })
        })
  
        new mapboxgl.Marker(el)
          .setLngLat([marker.lon, marker.lat])
          .addTo(this.state.map);
      });
    }
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
        {this.state.modalOpen ? <Modal size='lg' show={this.state.modalOpen} onHide={() => this.setState({modalOpen: false})}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6} className="text-left">
                <h3 className="text-dark modal-text">{this.state.currentMarker.name}</h3>
              </Col>
            </Row>
            <Row>
              <Col className="text-left">
                <h5 className="text-dark modal-text">About {this.state.currentMarker.name} • $$$</h5>
              </Col>
              {this.state.currentMarker.flags !== null ? <Col className="text-left">
                <h5 className="text-dark modal-text">{this.state.currentMarker.flags}</h5>
              </Col> : <></>}
            </Row>
            <Row className="modalMainBody">
              <Col md={6} className="text-left">
                <div className="text-dark modal-text">{this.state.currentMarker.business_bio}</div>
              </Col>
              <Col md={6} className="text-left">
                <div className="text-dark modal-text">
                  <AiFillPhone size={20} color='black' />
                  <a href={'tel:' + this.state.currentMarker.phone_num}>{transformPhoneNumber(this.state.currentMarker.phone_num)}</a>
                </div>
                <div className="text-dark modal-text">
                  <AiOutlineGlobal size={20} color='black' />
                  <a href={this.state.currentMarker.website} target='_blank'>{this.state.currentMarker.website}</a>
                </div>
                <div className="text-dark modal-text">
                  <AiOutlineClockCircle size={20} color='black' />
                  {transformHoursOfOper(this.state.currentMarker.hours_of_oper)}
                </div>
                <div className="text-dark modal-text">
                  <BsGeoAlt size={20} color='black' />
                  {this.state.currentMarker.address}
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
                  {this.state.currentMarker.topProducts[0]}
                </div>
                <div className='text-dark'>
                  {this.state.currentMarker.topProducts[1]}
                </div>
                <div className='text-dark'>
                  {this.state.currentMarker.topProducts[2]}
                </div>
              </Col>
              <Col className="text-left">
                <h5 className='text-dark'>
                  A word from the owner:
                                  </h5>
                <div className='text-dark'>{this.state.currentMarker.owner_bio}</div>
              </Col>
            </Row>
            <Row className="bottomImages">
              <Col>
                <Image src={this.state.currentMarker.photos[2]} width={'100%'}></Image>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal> : null}
        
      </div>
    );
  }
}