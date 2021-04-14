import React from 'react';
import Slider from './Slider'
import { API, graphqlOperation } from 'aws-amplify';
import mapboxgl from 'mapbox-gl';
import '../../App.css';
import queryString from 'query-string';
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
import Business from './Business.js'

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
            searchVal: null,
            redirectId: 0,
            filterFlag: null
        }
    }

    componentDidMount() {
        const id = queryString.parse(this.props.location.search).id;
        if (id !== undefined) {
            this.setState({ redirectId: id });
            return;
        }
        const ListItems = `
        query {
            listLocalVersionProds {
            items {
                id
                name
                flags
                lon
                lat
                photos
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
    handleFilterButton(filterFlag) {
        const button = document.getElementById('filter' + filterFlag);
        if (this.state.filterFlag) {
            this.setState({ filterFlag: null });
            button.style.backgroundColor = 'white';
            button.style.color = '#30C692';
        }
        else {
            this.setState({ filterFlag });
            button.style.backgroundColor = '#30C692';
            button.style.color = 'white';
        }
    }
    render() {
        let searchSlider;
        if (this.state.searchVal) {
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
        const { isLoaded, searchVal, markers, filterFlag } = this.state;
        let key = 0;
        let mapItems = this.state.items;
        if (isLoaded) {
            if (searchVal) {
                for (const marker of markers) {
                    marker.remove();
                }
                markers.length = 0;
                mapItems = this.state.items.filter(business => business.name.toLowerCase().search(this.state.searchVal.toLowerCase()) !== -1);
            }
            else if (filterFlag) {
                for (const marker of markers) {
                    marker.remove();
                }
                markers.length = 0;
                mapItems = this.state.items.filter(business => business.flags === filterFlag);
            }
            else {
                for (const marker of markers) {
                    marker.remove();
                }
                markers.length = 0;
            }
        }

        if (isLoaded && markers.length === 0) {
            mapItems.forEach(marker => { //Create map markers
                const elem = document.createElement('div');
                const txt = document.createElement('div');
                const img = document.createElement('div');

                txt.style.visibility = 'hidden';
                txt.innerHTML = marker.name;
                txt.id = 'markerText';
                img.id = 'markerImg';

                img.style.backgroundImage = 'url(' + marker.photos[1] + ')';

                elem.onmouseover = () => {
                    elem.firstChild.style.visibility = 'visible';
                }

                elem.onmouseout = () => {
                    elem.firstChild.style.visibility = 'hidden';
                }

                elem.onclick = () => {
                    window.location.href = '/explore?id=' + marker.id;
                }

                elem.appendChild(txt);
                elem.appendChild(img);


                this.state.markers.push(new mapboxgl.Marker(elem)
                    .setLngLat([marker.lon, marker.lat])
                    .addTo(this.state.map));
            });
        }
        return (
            <div>
                <div className='leftNav'>
                    <div>
                        <Nav.Link href="/feed">
                            <div className="Nav-Button" style={{ color: 'black' }}>
                                <div style={{ borderBottom: 'none' }}>
                                    <GiHouse size="25" color={'black'} />
                                        Feed
                                    </div>
                            </div>
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href="/explore" style={{ color: '#30C692' }}>
                            <div className="Nav-Button">
                                <div style={{ borderBottom: '3px solid #30C692' }}>
                                    <BsGeoAlt size="25" color={'#30C692'} />
                                        Explore
                                    </div>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
                {this.state.redirectId === 0 ?
                    <div className="body">
                        <Card className='searchCard'>
                            <Form inline>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{ backgroundColor: 'white', paddingRight: 0, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                                            <BsSearch size="15" color="#888" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={event => this.setState({ searchVal: event.target.value })} type="text" placeholder="Search for a business near you" className="mr-sm-2" style={{ borderLeft: 'none', width: 845, borderTopRightRadius: 20, borderBottomRightRadius: 20 }} />
                                </InputGroup>
                            </Form>
                        </Card>
                        {searchVal ?
                            <Card className='searchResultCard'>
                                <Slider
                                    businessArr={searchSlider.places}
                                    businessCategory={searchSlider.title}
                                />
                            </Card> : null}
                        {!searchVal ?
                            <Card className='filterCard'>
                                <Container>
                                    <Row style={{ marginBottom: 10 }}>
                                        <Col>
                                            <Image src={require('../../images/vector/Food.png')} width={40} height={40} />
                                            <div className='iconSubText'>
                                                Food/Restaurants
                                    </div>
                                        </Col>
                                        <Col>
                                            <Image src={require('../../images/vector/Yoga.png')} width={40} height={40} />
                                            <div className='iconSubText'>
                                                Health/Beauty/Fitness
                                    </div>
                                        </Col>
                                        <Col>
                                            <Image src={require('../../images/vector/Briefcase.png')} width={40} height={40} />
                                            <div className='iconSubText'>
                                                Business Services
                                    </div>
                                        </Col>
                                        <Col>
                                            <Image src={require('../../images/vector/Store.png')} width={40} height={40} />
                                            <div className='iconSubText'>
                                                Retail
                                    </div>
                                        </Col>
                                        <Col>
                                            <Image src={require('../../images/vector/Nature.png')} width={40} height={40} />
                                            <div className='iconSubText'>
                                                Environment
                                    </div>
                                        </Col>
                                        <Col>
                                            <Image src={require('../../images/vector/Plane.png')} width={40} height={40} />
                                            <div className='iconSubText'>
                                                Travel Logistics
                                    </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{ textAlign: 'left' }}>
                                            <button className="filterButton" id='filterfemale' onClick={() => this.handleFilterButton('female')}>Female Owned</button>
                                            <button className="filterButton" id='filterminority' onClick={() => this.handleFilterButton('minority')}>Minority Owned</button>
                                            <button className="filterButton" id='filternonprofit'>Non-profit</button>
                                            <button className="filterButton" id='filterstars'>Over 4.5 ★<Image src={require('../../images/vector/chevron-down.png')} width={16} height={8} /></button>
                                        </div>
                                    </Row>
                                </Container>
                            </Card> : null}
                        <Card className='mapCard'>
                            <div ref={el => this.mapContainer = el} className="mapContainer" />
                        </Card>
                        {isLoaded ? <Card className='businessCard'>
                            {
                                sliders.map(curr => (
                                    <Slider
                                        businessArr={curr.places}
                                        businessCategory={curr.title}
                                        key={key++}
                                    />
                                ))
                            }
                        </Card> : null}
                    </div> : <Business id={this.state.redirectId} />}
            </div>
        )
    }
}