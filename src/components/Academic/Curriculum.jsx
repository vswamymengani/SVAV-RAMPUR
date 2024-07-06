import React from 'react';
import './Curriculum.css';
import logo1 from './law.png'; // Ensure the path to the logo is correct
import img11 from './Frame .png';

const Curriculum = () => {
  return (
    <div>
      <div className="curriculum-container">
        <div className="curriculum-header">
          <div className="content-container">
            <img src={logo1} alt="Logo1" className="curriculum-logo" />
            <div id="t11" className="curriculum-text">
              Balanced Academics and Residential Life
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 id="he">How is every child at SVAV guided through their academic growth?</h2>
      </div>
      <p>
        SVAV focuses on the development of a child's academic results independently. We believe that
        personalized attention and methodical guidance will progressively improve a child's performance in any 
        subject. If you are a parent eager to enhance your child's academic performance systematically, you should discover 
        our approach to achieving this goal.
      </p>
      <div id="img11">
        <img src={img11} alt="Academic Growth" className='img-logo' />
      </div>
      {/* Flex container for h2 and h3 contents */}
      <div className="content-row">
        <div className="content-col">
          <h3 className='hi'>CBSE boarding school</h3>
          <h3 className='hi'>Planned academic Growth</h3>
          <h3 className='hi'>Safe and Secure Residential Campus</h3>
          <h3 className='hi'>Integrated IT/NEET preparation</h3>
          <h3 className='hi'>Planning for Universities Abroad</h3>
        </div>
        <div className="content-col">
          <h3 className='hi'>Cambridge curriculum boarding school</h3>
          <h3 className='hi'>Detailed Career Preparation</h3>
          <h3 className='hi'>Co-scholastic Development</h3>
          <h3 className='hi'>Integrated NATA, NID, CLAT, CA and IPMAT preparation</h3>
          <h3 className='hi'>Preparing Children For Independent Living</h3>
        </div>
      </div>
      <div id="g2">
        <h1 id="g1">Classes 4 and 5</h1>
        <div id="bx">
        <b id="g3">Primary School</b><br></br><br></br>
        <span className="g4" >Curriculum</span><br></br>
        <span className="g5">CBSE</span><br></br><br></br>
        <span className="g4">Academics</span><br></br>
        <span className="g5">Diagnostic test.Individual progression plan,<br></br>
          Experiental Learning.Learning and reflection
        </span><br></br><br></br>
          <span className="g4">Career Advancement</span><br></br>
          <span className="g5">Learn the ruances of career guidance</span><br></br><br></br>
          <span className="g4">School of common sciences</span><br></br>
          <span className="g5">Markerspace,Farming,Swimming,Music,Dance,Art,Sports etc.</span>
          </div>
      </div>
    </div>
  );
}

export default Curriculum;
