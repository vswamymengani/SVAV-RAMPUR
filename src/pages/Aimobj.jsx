import Target from './target.png';
import './Aimobj.css'



const Aimobj = () => {
  return (
<div>
     <div id="bcimg">
     <center> <div id="aimimg"></div></center><br></br><br></br>
      </div>
  <div id="aimpara">
    <br></br><br></br>
     <center><b id="aimp1" style={{ fontFamily: 'Cursive' }}>AIM & OBJECTIVES</b></center><br></br>
    <div id ="para">
      To develop a National System of Education which would help to build a generation of youngmen and women that is<br></br><br></br>
      <img src={Target} alt="student" className="link-icon" />
	Committed to cultural values and infused with patriotic fervor,<br></br><br></br>
  <img src={Target} alt="student" className="link-icon" />
	Fully developed physically, vitally, mentally and spiritually,<br></br><br></br>
  <img src={Target} alt="student" className="link-icon" />
	Capable of successfully facing challenges of day to day life-situations.<br></br><br></br>
  <img src={Target} alt="student" className="link-icon" />
	Dedicated to the service of our those brothers and sisters who live in villages, forests,
caves and slums and are deprived and destitute, so that they are liberated from the shackles of social evils and injustice, and
Thus devoted, may contribute to building up a harmonious, prosperous and culturally rich Nation.
</div>
    </div></div>
  )
}

export default Aimobj;