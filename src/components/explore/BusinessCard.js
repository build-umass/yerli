import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import { getDistance } from 'geolib';

export default function BusinessCard({ businessTitle, userLocation, backgroundPicture, data }) {
  return (
    <div>
      <a href={'/explore?id=' + data.id} style={{ margin: '0 0.35rem', display: 'block' }}>
        <Card className="main-card" bg={'dark'} style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ), url("${backgroundPicture}")` }}>
          <Card.Body>
            <Card.Title className="business-title">{businessTitle}<br />
              {userLocation !== null ?
                <div className="mileage">
                  <Image width={13} src={require("../../images/vector/mile.png")} className='mileageImg' />
                  {(getDistance({ latitude: userLocation.latitude, longitude: userLocation.longitude }, {
                    latitude: data.lat,
                    longitude: data.lon
                  }) / 1609).toFixed(1) + ' mi'}
                </div> : null}
            </Card.Title>
          </Card.Body>
        </Card>
      </a>
    </div >
  )
}
