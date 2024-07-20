import './Sdp.css';
import  img1 from '../Facilities/sd1.png';
import img2 from '../Facilities/sd2.png';
import img3 from '../Facilities/sd33.png';
import img4 from '../Facilities/sd4.png';
import img5 from '../Facilities/sd5.png';
import img6 from '../Facilities/sd6.png';
import img7 from '../Facilities/s&p2.jpg';


const Sdp = () => {
  return (
    <div>
    <br></br><br></br><br></br>
     <h1 id="sdp">Patashala Pranalika Abhivrudhi</h1>
     <div id="sdpimgs"> 
        <center>
          <div><img src={img1}   alt="Transport 1"  style={{height:"600px",width:"900px"}}/></div><br></br>
            <div><img src={img2} alt="Transport 2" style={{height:"600px",width:"900px"}}/></div><br></br>
            <div><img src={img3} alt="Transport 3" style={{height:"600px",width:"900px"}}/></div><br></br>
            <div><img src={img4} alt="Transport 4" style={{height:"600px",width:"900px"}} /></div><br></br>
            <div><img src={img5} alt="Transport 3" style={{height:"600px",width:"900px"}}/></div><br></br>
            <div><img src={img6} alt="Transport 4" style={{height:"600px",width:"900px"}}/></div><br></br>
            <div><img src={img7} alt="Transport 4" style={{height:"600px",width:"900px"}}/></div>
            </center>
            </div>
        
      
    </div>
  )
}

export default Sdp;