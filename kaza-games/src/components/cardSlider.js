import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cardSlider.css'; // Custom styles for the slider
import img from '../imgs/landing-home-img-1.jpg';
//npm slick-carousel and npm react-slick
function CardSlider() {
    // Configuration for the slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 4000
    };

    return (
        <div className='slider-container'>
            <div className='titlesContainer' style={{ display: "flex" }}>
                <p className='tag'>GAMING</p>
                <div className='mainTitle'>
                    <h2>COMES WITH THE PRACTICAL ESPORTS MODULE</h2>
                    <p>Artorias’ esports module comes with everything you’ll need to present your esports teams, matches as well as players.</p>
                </div>

            </div>



            <Slider {...settings}>
                <div>
                    <img src={img} alt="Slide 1" />
                </div>
                <div>
                    <img src={img} alt="Slide 2" />
                </div>
                <div>
                    <img src={img} alt="Slide 3" />
                </div>
                <div>
                    <img src={img} alt="Slide 4" />
                </div>
                <div>
                    <img src={img} alt="Slide 4" />
                </div>
                <div>
                    <img src={img} alt="Slide 4" />
                </div>
                <div>
                    <img src={img} alt="Slide 4" />
                </div>
                <div>
                    <img src={img} alt="Slide 4" />
                </div>
                <div>
                    <img src={img} alt="Slide 4" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
}

export default CardSlider;

