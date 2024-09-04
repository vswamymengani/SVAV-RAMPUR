// src/components/Popup.js
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import './Popup.css';
import img1 from './popupimg1.jpg';
import img2 from './popupimg2.jpg';
import img3 from './pooja1.jpg';
import img4 from './eventbhumipooja.jpg';
import img5 from './popupimg3.jpg';

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const images = [img1, img2, img3, "https://svav-wesite-gallery.s3.ap-south-2.amazonaws.com/HomeScreenPopUpSlides/4.jpg", img5];

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
                    <h2>Laying the Foundation for a Brighter Future <br></br>Welcome To SVAV High School-Rampur</h2>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className={`popup-image ${index === 5 ? 'special-image' : ''}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    );
};

export default Popup;