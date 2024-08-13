import imgh from './holidaysimg.jpeg';
import './Holidays.css';

const Holidays = () => {
  return (
    <div>
    <center>
      <img src={imgh} className="img" alt="Responsive" />
    </center>
  </div>
  )
}

export default Holidays;