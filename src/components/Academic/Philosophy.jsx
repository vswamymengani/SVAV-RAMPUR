import './Philosophy.css';
import img1 from './logo2.png';

const Philosophy = () => {
  return (
    <div>
      <p className="oil1">
        Sri Vidyaranya International School (SVIS) is a CBSE+ School located in Hyderabad, spread across 19 acres of lush green campus. SVIS is established with a purpose of preparing children to reach high academic standards, acquire ancient wisdom, modern technological and soft skills and scientific temperament. SVIS is founded by Sri Saraswathi Vidyapeetham, Telangana, the biggest non-profit organisation in the field of education, with over five decades of experience in providing value-based education in its schools across India.
      </p>
      <div id="sp1">
        <h1 className="sp">Sailent Features</h1><br></br>
        <h3>Curriculum And Pedagogy That,</h3><br></br>

        <ul>
          <li>Awakens the inner potential of the child.</li>
          <li>Facilitates holistic personality development.</li>
          <li>Instills unalloyed nationalism and respect for Indian culture.</li>
          <li>Inculcates self-discipline, self-awareness, and self-confidence.</li>
        </ul>
        
        <div id="mc">

          <h3>Methodology That,</h3><br></br>

          <ul>
            <li>
              encourages behavioural learning</li>
            <li>enables inquiry and discovery through experiential learning.</li>
            <li>caters to the 12 aspects of early child development <br></br> ‘Sisu Vaatika Sikshana’ Programme.</li>

          </ul>

        </div></div>
        <div className='oil2'>
          <p>The true purpose of yoga is to develop a relationship with the self that exists deep <br></br>within our core, which is called Jivatman (individual soul). 
        Human beings 
          are<br></br> embodiments of five distinct energy sheaths called “koshas” that surround our <br></br>
          jivatman. They are,</p>
        </div>
        <img src={img1} style={{marginLeft:"65%",marginTop:"-10%",width:"30%",height:"auto"}}></img>
        <div ><br></br><br></br><br></br>
        <div style={{marginTop:"-20%"}}>
          <b>
       <ol>
    <li>Physical – Annamaya kosha</li>
    <li>Energy – Pranamaya kosha</li>
    <li>Mental – Manamaya kosha</li>
    <li>Wisdom – Vijnanamaya kosha</li>
    <li>Bliss – Anandamaya kosha</li>
    <li>Self – Atman</li>
       </ol></b>
      </div>

      </div>
          
          
       
    </div>
  )
}

export default Philosophy;