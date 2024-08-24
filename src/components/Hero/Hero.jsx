import React from 'react'
import './Hero.css'
import collections from '../Assests/new_collections.jpeg'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/heroine.jpeg'
import girl from '../Assests/girl.jpeg'
import family from '../Assests/collections_img.jpeg'

const Hero = () =>{
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-collections-icon">
                    <p>New <br/>Collections<br/>For Everyone</p>
                    <img src={collections} alt="" />
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
                <img src={family} alt="" />
                <img src={girl} alt="" />
            </div>
        </div>
    )
}
export default Hero
