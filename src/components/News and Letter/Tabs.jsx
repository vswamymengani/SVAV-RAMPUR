
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-button ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
          title={tab.title}
          aria-label={tab.title}
        >
          <img src={tab.image} alt={tab.title} className="tab-image" />
          <span className="tab-title">{tab.title}</span>
        </button>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Tabs;
