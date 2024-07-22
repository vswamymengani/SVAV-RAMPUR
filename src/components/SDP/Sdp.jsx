import './Sdp.css';
import img1 from '../Facilities/sd1.png';
import img2 from '../Facilities/sd2.png';
import img3 from '../Facilities/sd33.png';
import img4 from '../Facilities/sd4.png';
import img5 from '../Facilities/sd5.png';
import img6 from '../Facilities/sd6.png';
import img7 from '../Facilities/s&p2.jpg';


const Sdp = () => {
  return (
    <div>
      <br></br><br></br>
      <h1 id="sdp">Patashala Abhivrudhi Pranalika &nbsp; (School Development Plan)</h1>
      <div>
        <div id="sdppara">
          <span>
            The school improvement is first and foremost the responsibility of the school Management. It is based on the premise that schools themselves are best placed to identify areas for improvement and to implement changes that can bring about better outcomes for pupiles.
            <br></br><br></br>
            We bring to your kind Notice that Sri Vidyaranya Avasa Vidyalayam is a reputed non-profit NGO based School run by Sri Saraswathi Vidya Pettam.As you may kindly be aware, Vidya Pettam which is Affilliated to Vidya Bharathi-Akhil Bharatiya Shiksha Sansthan is running around 300 Shishumandir Schools in the state of telangana.Shishumandir Schools all over the country, are known for impacting value based education, with emphasis on
            ancient Bharatiya Culture & Imbibing Patriotism among it's students.
            <br></br>   <br></br>
            In our School, in addition to the academic education, we are also conducting activities & programs to install physical, Mental,
            Intellectual & spiritual skills in the students, which helps in all around development of the child, so that the students should be able to face any challenges in life and be useful to the nation at
            large.
            <br></br>   <br></br>
            Our school campus is spanned across 33 acres land, with spacious classrooms, big playground, goshala & Sri Kodanda Ramalayam Temple. Apart from the regular academic curriculum, we are also imparting training in yoga, vedic maths, robotics, spoken english and many more extra curricular activites, which improves student personality development.
            <br></br>   <br></br>
            This campus provides education facilities to more than 820 plus students including 480 plus residential students belonging to middle class families.
            We therefore,Requesting you to help our school for further improvement in all dimensions.
            <br></br>   <br></br>
            Here is the school development planning process with the resulting actions and targets captured in School Development Plans (SDPs).
            The SDP is a strategic plan for improvement. It should bring together, in a clear and simple way, the school’s priorities, the main measures it will take to raise standards, the resources dedicated to these, and the key outcomes and targets it intends to achieve.
          </span>
        </div><br></br><br></br>
        <h2 style={{ color: 'blue', marginLeft: '50px', marginTop: '10px', fontSize: '30px' }}>Contribute in this noble mission of SDP-SVAV-RAMPUR</h2>
        <ul className="custom-list">
          <li>&nbsp;&nbsp;Contribute in the resource developments of Sri Vidyaranya Avasa Vidyalayam schools;</li>
          <li>&nbsp;&nbsp;Associate with the Alumni Council of your respective school, if you are a former student of Sri Vidyaranya Avasa Vidyalayam.</li>
          <li>&nbsp;&nbsp;Participate in various programmes, seminars, workshops etc. organized by Sri Vidyaranya Avasa Vidyalayam;</li>
          <li>&nbsp;&nbsp;Extend your valuable suggestions towards the development of various educational activities;</li>
        </ul>
      </div><br></br><br></br>
      <div id="sdpimgs">
        <center>
          <div><img src={img1} alt="Transport 1" style={{ height: "600px", width: "900px" }} /></div><br></br>
          <div><img src={img2} alt="Transport 2" style={{ height: "600px", width: "900px" }} /></div><br></br>
          <div><img src={img3} alt="Transport 3" style={{ height: "600px", width: "900px" }} /></div><br></br>
          <div><img src={img4} alt="Transport 4" style={{ height: "600px", width: "900px" }} /></div><br></br>
          <div><img src={img5} alt="Transport 3" style={{ height: "600px", width: "900px" }} /></div><br></br>
          <div><img src={img6} alt="Transport 4" style={{ height: "600px", width: "900px" }} /></div><br></br>
          <div><img src={img7} alt="Transport 4" style={{ height: "600px", width: "900px" }} /></div>
        </center>
      </div>



    </div>
  )
}

export default Sdp;