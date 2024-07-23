
import PropTypes from 'prop-types';
import './TabContent.css';

const TabContent = ({ images }) => {
  return (
    <div className="tab-content">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

TabContent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabContent;
