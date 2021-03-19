import React from 'react';
import Slider from './Slider'
import { API, graphqlOperation } from 'aws-amplify';
import queryString from 'query-string';
import mapboxgl from 'mapbox-gl';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { BsSearch } from 'react-icons/bs'
import { BsGeoAlt } from 'react-icons/bs'
import { GiHouse } from 'react-icons/gi'
import Nav from 'react-bootstrap/Nav'

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 42.3732,
            lng: -72.5199,
            zoom: 13,
            error: null,
            isLoaded: false,
            currentMarker: null,
            items: [],
            markers: [],
            searchVal: null
        }
    }

    componentDidMount() {
        const ListItems = `
        query {
            listLocalVersionProds {
            items {
                id
                name
                flags
                lon
                lat
                business_bio
                owner_bio
                hours_of_oper
                phone_num
                website
                photo
                photos
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
        let searchSlider;
        if(this.state.searchVal){
            searchSlider = {
                title: "Businesses matching '" + this.state.searchVal + "'",
                places: this.state.items.filter(business => business.name.toLowerCase().search(this.state.searchVal.toLowerCase()) !== -1)
            }
        }
        let sliders = [
            {
                title: "Nearby",
                subtitle: "Businesses near you",
                places: this.state.items.filter(business => business.flags === null || business.flags === "")
            },
            {
                title: "Support Your Community",
                subtitle: "Businesses owned by females, veterans, and racial minorities",
                places: this.state.items.filter(business => business.flags !== null && business.flags !== "")
            }
        ];
        const { isLoaded, searchVal } = this.state;
        const routeId = this.props.match.params.id
        const id = routeId !== undefined ? routeId : queryString.parse(this.props.location.search).id;
        const feedColor = window.location.href.includes('feed') ? '#30C692' : 'black';
        const exploreColor = window.location.href.includes('explore') ? '#30C692' : 'black';
        const feedBorder = window.location.href.includes('feed') ? '3px solid #30C692' : 'none';
        const exploreBorder = window.location.href.includes('explore') ? '3px solid #30C692' : 'none';
        let key = 0;
        if (isLoaded) {
            let mapItems = this.state.items;
            if(this.state.searchVal){
                for(const marker of this.state.markers){
                    marker.remove();
                }
                mapItems = this.state.items.filter(business => business.name.toLowerCase().search(this.state.searchVal.toLowerCase()) !== -1);
            }
            mapItems.forEach(marker => { //Create map markers
                const el = document.createElement('div');
                el.className = 'marker';
                el.style.backgroundImage = 'url(' + marker.photos[1] + ')';
                el.style.backgroundSize = 'cover'
                el.style.width = '35px';
                el.style.height = '50px';

                el.addEventListener('click', () => {
                    this.setState({
                        modalOpen: true,
                        currentMarker: marker
                    })
                })

                this.state.markers.push(new mapboxgl.Marker(el)
                    .setLngLat([marker.lon, marker.lat])
                    .addTo(this.state.map));
            });
        }
        return (
            <div>
                <div className='leftNav'>
                    <div>
                        <Nav.Link href="/feed">
                            <div className="Nav-Button" style={{color: feedColor}}>
                                <div style={{borderBottom: feedBorder}}>
                                    <GiHouse size="25" color={feedColor} />
                                    Feed
                                </div>     
                            </div>
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href="/explore" style={{color: exploreColor}}>
                            <div className="Nav-Button">
                                <div style={{borderBottom: exploreBorder}}>
                                    <BsGeoAlt size="25" color={exploreColor}/>
                                    Explore
                                </div>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
                <div className="body">
                    <Card className='searchCard'>
                        <Form inline>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text style={{backgroundColor: 'white', paddingRight: 0, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}>
                                        <BsSearch size="15" color="#888" />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl onChange={event => this.setState({searchVal: event.target.value})} type="text" placeholder="Search for a business near you" className="mr-sm-2" style={{borderLeft: 'none', width: 845, borderTopRightRadius: 20, borderBottomRightRadius: 20}} />
                            </InputGroup>
                        </Form>
                    </Card>
                    {searchVal ? 
                    <Card className='searchResultCard'>
                        <Slider
                            businessArr={searchSlider.places}
                            businessCategory={searchSlider.title}
                            businessDescrip={'test'}
                            currId={id}
                        />
                    </Card> : null}
                    <Card className='filterCard'>
                        <Container>
                            <Row>
                                <Col>
                                    <Image src={require('../../images/vector/Food.png')} width={40} height ={40}/>
                                    <div className='iconSubText'>
                                        Food/Restaurants
                                    </div>
                                </Col>
                                <Col>
                                    <Image src={require('../../images/vector/Yoga.png')} width={40} height ={40}/>
                                    <div className='iconSubText'>
                                        Health/Beauty/Fitness
                                    </div>
                                </Col>
                                <Col>
                                    <Image src={require('../../images/vector/Briefcase.png')} width={40} height ={40}/>
                                    <div className='iconSubText'>
                                        Business Services
                                    </div>
                                </Col>
                                <Col>
                                    <Image src={require('../../images/vector/Store.png')} width={40} height ={40}/>
                                    <div className='iconSubText'>
                                        Retail
                                    </div>
                                </Col>
                                <Col>
                                    <Image src={require('../../images/vector/Nature.png')} width={40} height ={40}/>
                                    <div className='iconSubText'>
                                        Environment
                                    </div>
                                </Col>
                                <Col>
                                    <Image src={require('../../images/vector/Plane.png')} width={40} height ={40}/>
                                    <div className='iconSubText'>
                                        Travel Logistics
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div style={{textAlign: 'left'}}>
                                    <button className="filterButton">Female Owned</button>
                                    <button className="filterButton">Minority Owned</button>
                                    <button className="filterButton">Non-profit</button>
                                    <button className="filterButton">Over 4.5 ★<Image src={require('../../images/vector/chevron-down.png')} width={16} height ={8}/></button>
                                </div>
                            </Row>
                        </Container>
                    </Card>
                    <Card className='mapCard'>
                        <div ref={el => this.mapContainer = el} className="mapContainer" />
                    </Card>
                    {isLoaded ? <Card className='businessCard'>
                        {
                            sliders.map(curr => (
                                <Slider
                                    businessArr={curr.places}
                                    businessCategory={curr.title}
                                    businessDescrip={curr.subtitle}
                                    currId={id}
                                    key={key++}
                                />
                            ))
                        }
                    </Card> : null}
                </div>
            </div>
        )
    }
}