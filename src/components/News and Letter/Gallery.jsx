import './Gallery.css';
import img1 from '../Facilities/dining.jpg';

const Gallery = () => {
  return (
    <div>
    <br></br><br></br><br></br>
     <h1 id="gal">Our Gallery</h1>
     <div id="sdpimgs"> 
        <center>
          <div><img src={img1}   alt="Transport 1"  style={{height:"600px",width:"900px"}}/></div><br></br>
           
            </center>
            </div>
        
      
    </div>
  )
}

export default Gallery