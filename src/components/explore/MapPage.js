import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import mapboxgl from 'mapbox-gl';
import '../../App.css';
import queryString from 'query-string';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { BsSearch } from 'react-icons/bs'

export default class MapPage extends React.Component {
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
            coords: null
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({ coords: pos.coords })
        },
            err => {
                console.error("Error fetching location: " + err.message);
            }
        );
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
            container: 'mapPage',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        this.setState({ map })
    }
    render() {
        const { isLoaded, searchVal, markers } = this.state;
        let mapItems = this.state.items;
        if (isLoaded) {
            if (searchVal) {
                for (const marker of markers) {
                    marker.remove();
                }
                markers.length = 0;
                mapItems = this.state.items.filter(business => business.name.toLowerCase().search(this.state.searchVal.toLowerCase()) !== -1);
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

                txt.innerHTML = marker.name;
                elem.id = 'marker';
                txt.id = 'markerText';

                elem.style.backgroundImage = 'url(' + marker.photos[1] + ')';

                elem.onmouseover = () => {
                    elem.appendChild(txt);
                }

                elem.ontouchstart = () => {
                    elem.appendChild(txt);
                }

                elem.onmouseout = () => {
                    elem.removeChild(txt);
                }

                elem.ontouchend = () => {
                    elem.removeChild(txt);
                }

                elem.onclick = () => {
                    window.location.href = '/explore?id=' + marker.id;
                }

                this.state.markers.push(new mapboxgl.Marker(elem, {
                    offset: [0, -49 / 2]
                })
                    .setLngLat([marker.lon, marker.lat])
                    .addTo(this.state.map));
            });
            if (this.state.coords !== null) {
                const elem = document.createElement('div');
                elem.id = 'userMarker';
                this.state.markers.push(new mapboxgl.Marker(elem, {
                    offset: [0, -30 / 2]
                })
                    .setLngLat([this.state.coords.longitude, this.state.coords.latitude])
                    .addTo(this.state.map));
            }
        }
        return (
            <div className="body">
                <Card className='mapCard' id='mapPageCard'>
                    <Row>
                        <div>
                            <a href='/explore'>
                                <Image className='' src={require("../../images/vector/arrowleft.svg")} />
                            </a>
                            <h3 className="text-dark backText" style={{marginLeft: 10}}>Go back</h3>
                        </div>
                    </Row>
                    <Row>
                        <div id='mapPageSearch'>
                            <Form inline>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{ backgroundColor: 'white', padding: 0, border: 'none' }}>
                                            <BsSearch size="15" color="#888" />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="searchBar" onChange={event => this.setState({ searchVal: event.target.value })} type="text" placeholder="Search for a business near you" />
                                </InputGroup>
                            </Form>
                        </div>
                    </Row>
                    <Row>
                        <div id='mapPage'></div>
                    </Row>
                </Card>
            </div>
        )
    }
}