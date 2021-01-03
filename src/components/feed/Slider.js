import React, {useState} from 'react'
import BusinessCard from './BusinessCard.js'
import './feed.css'

export default function Slider({businessArr, businessCategory, businessDescrip}) {
    let [businesses, setBusinesses] = useState(businessArr);
    return (
        // Map Cards to Businesses
        // Add
        <div className="wrap"> 
            <div className="titles">
                <h3>{businessCategory}</h3>
                <h6>{businessDescrip}</h6>
            </div>
            <div className="slider-wrapper">
                {businesses.map((curr) => (
                    <BusinessCard businessTitle={curr.name} backgroundPicture={curr.photos[0]} key={curr.id} data={businessArr.find(item => item.id === curr.id)}/>
                ))}
                <div className="nextSlide">

                </div>
            </div>
        </div>
    )
}
