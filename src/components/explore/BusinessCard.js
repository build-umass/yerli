import React from 'react'
import Card from 'react-bootstrap/Card'

export default function BusinessCard({ businessTitle, backgroundPicture, data}) {
  return (
    <div>
      <a href={'/explore?id=' + data.id} style={{margin: '0 0.35rem', display: 'block'}}>
        <Card className="main-card" bg={'dark'} style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('${backgroundPicture}')` }}>
          <Card.Body>
            <Card.Title className="business-title">{businessTitle}</Card.Title>
          </Card.Body>
        </Card>
      </a>
    </div>
  )
}
