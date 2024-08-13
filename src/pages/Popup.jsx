// src/components/Popup.js
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import './Popup.css';
import img1 from './popupimg1.jpg';
import img2 from './popupimg2.jpg';

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const images = [img1, img2];

    useEffect(() => {
        // Show popup after 1 second
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        isVisible && (
            <div className="popup">
                <div className="popup-content">
                    <span className="close" onClick={closePopup}>&times;</span>
                    <h2>Laying the Foundation for a Brighter Future: Bhumipuja Ceremony for School Modernization</h2>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index}`} className="popup-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    );
};

export default Popup;
