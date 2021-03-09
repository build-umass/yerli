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
                <Card className='filterCard'>
                    <Container>
                        <Row>
                            <Col>
                                <Image src={require('../../images/vector/Food.png')} width={40} height ={40}/>
                                <div className='iconSubText'>
                                    Restaurants
                                </div>
                            </Col>
                            <Col>
                                <Image src={require('../../images/vector/Trimmer.png')} width={40} height ={40}/>
                                <div className='iconSubText'>
                                    Barbershops
                                </div>
                            </Col>
                            <Col>
                                <Image src={require('../../images/vector/Hair Dryer.png')} width={40} height ={40}/>
                                <div className='iconSubText'>
                                    Salons
                                </div>
                            </Col>
                            <Col>
                                <Image src={require('../../images/vector/Cookie.png')} width={40} height ={40}/>
                                <div className='iconSubText'>
                                    Bakeries
                                </div>
                            </Col>
                            <Col>
                                <Image src={require('../../images/vector/Beer.png')} width={40} height ={40}/>
                                <div className='iconSubText'>
                                    Bars
                                </div>
                            </Col>
                            <Col>
                                <Image src={require('../../images/vector/Farm House.png')} width={40} height ={40}/>
                                <div className='iconSubText'>
                                    Farms
                                </div>
                            </Col>
                            <Col>
                                <Image src={require('../../images/vector/Cart.png')} width={40} height ={40}/>
                                <div className='iconSubText'>
                                    Groceries
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button className="filterButton">Female Owned</button>
                            </Col>
                            <Col>
                                <button className="filterButton">Minority Owned</button>
                            </Col>
                            <Col>
                                <button className="filterButton">Non-profit</button>
                            </Col>
                            <Col>
                                <button className="filterButton">Over 4.5 ★</button>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card className='mapCard'>
                    <div ref={el => this.mapContainer = el} className="mapContainer" />
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
        )
    }
}