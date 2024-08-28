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
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={hero_image} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={girl} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={family} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
                        {/* <img src={hero_image} alt="" />
                        <img src={family} alt="" />
                        <img src={girl} alt="" /> */}
    </div>
 </div>
 
            )
        }
export default Hero
