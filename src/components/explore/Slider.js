import React, { useState } from 'react'
import BusinessCard from './BusinessCard.js'
import './explore.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Slider({ businessArr, businessCategory, businessDescrip, currId }) {
    let businesses = useState(businessArr)[0];
    const [indices, setIndices] = useState({ start: 0, finish: 4 })

    const computeArr = () => {
        let copy = [...businesses]
        if (indices.start < indices.finish) {
            return copy.slice(indices.start, indices.finish)
        }
        else {
            let start = copy.slice(indices.start, businesses.length);
            let finish = copy.slice(0, indices.finish);
            return [...start, ...finish]
        }
    }

    const updateIndicesPrev = () => {
        const handleBounds = (val) => {
            return val < 0 ? val + businesses.length : val;
        }

        let nextA = handleBounds(indices.start - 1);
        let nextB = handleBounds(indices.finish - 1);

        setIndices({ start: nextA, finish: nextB })
    }

    const updateIndicesNext = () => {
        const handleBounds = (val) => {
            return val >= businesses.length ? val - businesses.length : val;
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
                        <h3>{businessCategory}</h3>
                    </Col>
                    <Col>
                        <div className="prevSlide"
                            onClick={() => {
                                updateIndicesPrev();
                            }}>
                            <Image src={require('../../images/vector/arrowleft.png')} />
                        </div>
                    </Col>
                    <Col>
                        <div className="nextSlide"
                            onClick={() => {
                                updateIndicesNext();
                            }}>
                            <Image src={require('../../images/vector/arrowright.png')} />
                        </div>
                    </Col>
                </Row>

                {/* <h6>{businessDescrip}</h6> */}

            </div>
            <div className="slider-wrapper">
                {computeArr(businesses).map((curr) => (
                    <div key={curr.id}><BusinessCard businessTitle={curr.name} backgroundPicture={curr.photos[0]} key={curr.id} data={businessArr.find(item => item.id === curr.id)} curr={currId}/></div>
                ))}
            </div>
        </div>
    )
}
