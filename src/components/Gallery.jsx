import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import slide4 from '../images/slide4.jpg';
import slide5 from '../images/slide5.jpg';
import slide6 from '../images/slide6.jpg';
import slide7 from '../images/slide7.jpg';
import slide8 from '../images/slide8.jpg';

const responsive = {
    700: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"><img src={slide1} alt="food"/></div>,
    <div className="item" data-value="2"><img src={slide2} alt="food"/></div>,
    <div className="item" data-value="3"><img src={slide3} alt="food"/></div>,
    <div className="item" data-value="4"><img src={slide4} alt="food"/></div>,
    <div className="item" data-value="5"><img src={slide5} alt="food"/></div>,
    <div className="item" data-value="6"><img src={slide6} alt="food"/></div>,
    <div className="item" data-value="7"><img src={slide7} alt="food"/></div>,
    <div className="item" data-value="8"><img src={slide8} alt="food"/></div>,

];

const Gallery = () => {
    return (
        <AliceCarousel
            autoPlay
            autoPlayInterval={2000}
            animationDuration={2000}
            infinite
            mouseTracking
            items={items}
            responsive={responsive}
        />
    )
}

export default Gallery;
