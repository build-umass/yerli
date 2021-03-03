import React, {useState} from 'react'
import BusinessCard from './BusinessCard.js'
import './feed.css'

export default function Slider({businessArr, businessCategory, businessDescrip, currId }) {
    let [businesses, setBusinesses] = useState(businessArr);
    const [indeces, setIndeces] = useState({start: 0, finish: 4})

    const computeArr = () => {
        let copy = [...businesses]
        if (indeces.start < indeces.finish) {
            return copy.slice(indeces.start, indeces.finish)
        }
        else{
            let start = copy.slice(indeces.start, businesses.length);
            let  finish = copy.slice(0, indeces.finish);
            return [...start, ...finish]
        }
    }

    const updateIndeces = () => {
        const handleBounds = (val) => {
            return val >= businesses.length ? 0 : val;
        }

        let nextA = handleBounds(indeces.start + 1);
        let nextB = handleBounds(indeces.finish + 1);

        setIndeces({start: nextA, finish: nextB})
    }

    return (
        // Map Cards to Businesses
        // Add
        <div className="wrap"> 
            <div className="titles">
                <h3>{businessCategory}</h3>
                <h6>{businessDescrip}</h6>
            </div>
            <div className="slider-wrapper">
                {computeArr(businesses).map((curr) => (
                    <BusinessCard businessTitle={curr.name} backgroundPicture={curr.photos[0]} key={curr.id} data={businessArr.find(item => item.id === curr.id)} curr={currId}/>
                ))}
                <div onClick={() => {
                    console.log(indeces)
                    updateIndeces();
                }} 
                className="nextSlide"></div>
            </div>
        </div>
    )
}
