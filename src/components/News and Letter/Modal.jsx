
import './Modal.css'; // Ensure you have corresponding CSS for the modal

const Modal = ({ selectedImage, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={selectedImage} alt="Selected" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
