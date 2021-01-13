import React from 'react';
import '../App.css';
import mapboxgl from 'mapbox-gl';
import { API, graphqlOperation } from 'aws-amplify';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 42.3732,
      lng: -72.5199,
      zoom: 13,
      items: []
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

    this.state.items.forEach(marker => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = marker.photos[2];
      el.style.width = '120px';
      el.style.height = '200px';

      new mapboxgl.Marker(el)
        .setLngLat([marker.lon, marker.lat])
        .addTo(this.state.map);
    });
  }
  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    );
  }
}