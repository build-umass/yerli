import React, { useState, useEffect } from 'react'
import BusinessCard from './BusinessCard.js'
import './explore.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function getSlideNum() {
    if (window.innerWidth > 990) {
        return 4;
    }
    if (window.innerWidth > 750) {
        return 3;
    }
    if (window.innerWidth > 575) {
        return 2;
    }
    return 2;
}

export default function Slider({ businessArr, businessCategory, loc }) {
    const [indices, setIndices] = useState({ start: 0, finish: getSlideNum() })

    useEffect(() => {
        function handleResize() {
            setIndices({ start: 0, finish: getSlideNum() })
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        <div>
            <div className="titles">
                <Row className="businessCategoryRow">
                    <Col>
                        <h3 className="businessCategory">{businessCategory}</h3>
                    </Col>
                    <Col xs={1} style={{padding: 0, display: 'inline-block'}}>
                        {businessArr.length > getSlideNum() ?
                            <div className="prevSlide"
                                onClick={() => {
                                    updateIndicesPrev();
                                }}>
                                <Image src={require('../../images/vector/arrowleft.svg')} />
                            </div> : null}
                            {businessArr.length > getSlideNum() ?
                            <div className="nextSlide"
                                >
                                <Image src={require('../../images/vector/arrowright.svg')} onClick={() => {
                                    updateIndicesNext();
                                }}/>
                            </div> : null}
                    </Col>
                </Row>
            </div>
            <div className="slider-wrapper">
                {computeArr(businessArr).map((curr) => (
                    <BusinessCard businessTitle={curr.name} userLocation={loc} backgroundPicture={curr.photos[0]} key={curr.id} data={businessArr.find(item => item.id === curr.id)} />
                ))}
            </div>
        </div>
    )
}
