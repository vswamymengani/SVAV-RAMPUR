// ScrollUpButton.jsx
import { useState, useEffect } from 'react';
import './ScrollUpButton.css'; // Create a separate CSS file for styling if needed

const ScrollUpButton = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <button
            onClick={scrollToTop}
            className="scrollUpButton"
            style={{ display: showScroll ? 'inline' : 'none' }}
        >
            &#8679;
        </button>
    );
};

export default ScrollUpButton;
