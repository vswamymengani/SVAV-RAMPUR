
import './TabContent.css';

const TabContent = ({ images, onImageClick }) => {
  return (
    <div className="tab-content">
      {images.map((image, index) => (
        <img 
          key={index}
          src={image}
          alt={`Gallery Image ${index + 1}`}
          className="gallery-image"
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
};

export default TabContent;
