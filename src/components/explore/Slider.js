import React, { useState } from 'react'
import BusinessCard from './BusinessCard.js'
import './explore.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Slider({ businessArr, businessCategory, businessDescrip, currId }) {
    const [indices, setIndices] = useState({ start: 0, finish: 4 })
    const computeArr = () => {
        if (indices.start < indices.finish) {
            return businessArr.slice(indices.start, indices.finish)
        }
        else {
            let start = businessArr.slice(indices.start, businessArr.length);
            let finish = businessArr.slice(0, indices.finish);
            return [...start, ...finish]
        }
    }
    const updateIndicesPrev = () => {
        const handleBounds = (val) => {
            return val < 0 ? val + businessArr.length : val;
        }

        let nextA = handleBounds(indices.start - 1);
        let nextB = handleBounds(indices.finish - 1);

        setIndices({ start: nextA, finish: nextB })
    }

    const updateIndicesNext = () => {
        const handleBounds = (val) => {
            return val >= businessArr.length ? val - businessArr.length : val;
        }

        let nextA = handleBounds(indices.start + 1);
        let nextB = handleBounds(indices.finish + 1);

        setIndices({ start: nextA, finish: nextB })
    }

    return (
        <div className="wrap">
            <div className="titles">
                <Row>
                    <Col lg={10}>
                        <h3 className="businessCategory">{businessCategory}</h3>
                    </Col>
                    <Col>
                        {businessArr.length > 4 ?
                            <div className="prevSlide"
                                onClick={() => {
                                    updateIndicesPrev();
                                }}>
                                <Image src={require('../../images/vector/arrowleft.png')} />
                            </div> : null}
                    </Col>
                    <Col>
                        {businessArr.length > 4 ?
                        <div className="nextSlide"
                            onClick={() => {
                                if (businessArr.length > 4) {
                                    updateIndicesNext();
                                }
                            }}>
                            <Image src={require('../../images/vector/arrowright.png')} />
                        </div> : null}
                    </Col>
                </Row>

                {/* <h6>{businessDescrip}</h6> */}

            </div>
            <div className="slider-wrapper">
                {computeArr(businessArr).map((curr) => (
                    <BusinessCard businessTitle={curr.name} backgroundPicture={curr.photos[0]} key={curr.id} data={businessArr.find(item => item.id === curr.id)} curr={currId} />
                ))}
            </div>
        </div>
    )
}
