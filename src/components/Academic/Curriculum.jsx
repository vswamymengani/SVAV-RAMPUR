
import './Curriculum.css';
import logo1 from './law.png'; // Ensure the path to the logo is correct
import img11 from './cir.png';
import classImage from './priscl.webp'; // Import the new image
import classImage1 from './6 to 8.webp';
import classImage2 from './9 and 10.jpeg';
import classImage3 from './11 and 12 1.jpeg';
const Curriculum = () => {
  return (
    <div>
      <div className="curriculum-container">
        <div className="curriculum-header">
          <div className="content-container">
            <img src={logo1} alt="Logo1" className="curriculum-logo" />
            <div id="t11">
              Balanced Academics and Residential Life
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 id="he">How is every child at SVAV guided through their academic growth?</h2>
      </div>
      <p id="hee">
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
          <h3 className='hi'>CBSE AND STATE boarding school</h3>
          <h3 className='hi'>Planned academic Growth</h3>
          <h3 className='hi'>Safe and Secure Residential Campus</h3>
          <h3 className='hi'>Integrated IT/NEET preparation</h3>
          <h3 className='hi'>Planning for Universities Abroad</h3>
        </div>
        <div className="content-col">
          <h3 className='hi'>STATE BOARD curriculum boarding school</h3>
          <h3 className='hi'>Detailed Career Preparation</h3>
          <h3 className='hi'>Co-scholastic Development</h3>
          <h3 className='hi'>Integrated NATA, NID, CLAT, CA and IPMAT preparation</h3>
          <h3 className='hi'>Preparing Children For Independent Living</h3>
        </div>
      </div>
      <div id="g2">
        <h1 id="g1">Classes 4 and 5</h1>
        <div id="bx" className="class-info-container">
          <div className="text-container">
            <b id="g03">Primary School</b><br></br>
            <span className="g4">Curriculum</span><br />
            <span className="g5">CBSE And STATE</span><br></br>
            <span className="g4">Academics</span><br />
            <span className="g5">Diagnostic test.Individual progression plan,<br />
              Experiental Learning.Learning and reflection
            </span><br /><br />
            <span className="g4">Career Advancement</span><br />
            <span className="g5">Learn the nuances of career guidance</span><br /><br />
            <span className="g4">School of common sciences</span><br />
            <span className="g5">Makerspace, Farming, Swimming, Music, Dance, Art, Sports etc.</span>
          </div>
          <div className="image-container">
            <img src={classImage} alt="Classes 4 and 5" className="class-image" />
          </div>
        </div>
      </div>

      <div>
      <div id="g21">
        <h1 id="g11">Classes 6, 7 and 8</h1>
        <div id="bx1" className="class-info-container">
          <div className="image-container1">
            <img src={classImage1} alt="Classes 4 and 5" className="class-image1" />
          </div>
          <div className="text-container1">
            <b className="g31">Middle School</b><br /><br />
            <span className="g41">Curriculum</span><br />
            <span className="g51">CBSE And STATE assessment curriculum</span><br /><br />
            <span className="g41">Academics</span><br />
            <span className="g51">Diagnostic test.Individual progression plan,<br />
              Experimental order thinking,Project-based Learning,Research and documentation.
            </span><br /><br />
            <span className="g41">Career Advancement</span><br />
            <span className="g51">Career explanation via meeting career experts.</span><br /><br />
            <span className="g41">School of common sciences</span><br />
            <span className="g51">Makerspace, Farming, Swimming, Music, Dance, Art, Sports etc.</span>
          </div>
        </div>
      </div>
    </div>

    <div id="g2">
        <h1 id="g12">Classes 9 and 10</h1>
        <div id="bx2" className="class-info-container">
          <div className="text-container">
            <b id="g03">Secondary School</b><br /><br />
            <span className="g4">Curriculum</span><br />
            <span className="g5">CBSE and STATE assessment curriculum</span><br /><br />
            <span className="g4">Academics</span><br />
            <span className="g5">Board selection,individual progression plan, Setting high targets, Learning and Reflection,
              The challenge to cognitive ability.<br />
            </span><br /><br />
            <span className="g4">Career Advancement</span><br />
            <span className="g5">Psychometric assessments and career shortlisting</span><br /><br />
            <span className="g4">School of common sciences</span><br />
            <span className="g5">Makerspace, Farming, Swimming, Music, Dance, Art, Sports etc.</span>
          </div>
          <div className="image-container2">
            <img src={classImage2} alt="Classes 9 and 10" className="class-image" />
          </div>
        </div>
      </div>

      <div>
      <div id="g21">
        <h1 id="g11">Classes 11 and 12</h1>
        <div id="bx3" className="class-info-container">
          <div className="image-container3">
            <img src={classImage3} alt="Classes 11 and 12" className="class-image1" />
          </div>
          <div className="text-container13">
            <b className="g33">Secondary School</b><br /><br />
            <span className="g43">Curriculum</span><br />
            <span className="g53">CBSE and STATE BOARD assessment curriculum</span><br /><br />
            <span className="g43">Academics</span><br />
            <span className="g53">Plan own Learning .Final Board selection,Learning and reflection, The balance of Board &
              Entrance
            </span><br /><br />
            <span className="g43">Career Advancement</span><br />
            <span className="g53">Career propogation and entrance exam guidance.</span><br /><br />
            <span className="g43">School of common sciences</span><br />
            <span className="g53">Makerspace, Farming, Swimming, Music, Dance, Art, Sports etc.</span>
          </div>
        </div>
      </div>
    </div>
   {/* Embed YouTube video */}
   <div className="youtube-video-container">
      <h2>Please have a look at the virtual tour of our campus.</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/NeCTs0Fn_a0" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      <h1>We would love to know you!</h1>
    </div>
    </div>
  );
}

export default Curriculum;
