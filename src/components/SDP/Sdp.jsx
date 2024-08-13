import './Sdp.css';
import img11 from './sdp1.png';
// import img1 from '../Facilities/sd1.png';
// import img2 from '../Facilities/sd2.png';
// import img3 from '../Facilities/sd33.png';
// import img4 from '../Facilities/sd4.png';
// import img5 from '../Facilities/sd5.png';
// import img6 from '../Facilities/sd6.png';
// import img7 from '../Facilities/s&p2.jpg';
import img12 from './book1.png';



const Sdp = () => {
  return (
    <div>
      <br></br><br></br>
      <h1 id="sdp" style={{ fontFamily: 'Cursive' }}>Patashala Abhivrudhi Pranalika <br></br> <h1 id ="sdp1" style={{ fontFamily: 'Cursive' }}>(School Development Plan)</h1></h1>
      <div>
        <div id="sdppara">
          <p>
            The school improvement is first and foremost the responsibility of the school Management.It is based on the premise that schools themselves are best placed to identify areas for improvement and to implement changes that can bring about better outcomes for pupiles.
           
            We bring to your kind Notice that Sri Vidyaranya Avasa Vidyalayam is a reputed non-profit NGO based School run by Sri Saraswathi Vidya Pettam.As you may kindly be aware, Vidya Pettam which is Affilliated to Vidya Bharathi-Akhil Bharatiya Shiksha Sansthan is running around 300 Shishumandir Schools in the state of telangana.Shishumandir Schools all over the country, are known for impacting value based education, with emphasis on
            ancient Bharatiya Culture & Imbibing Patriotism among it's students.
            <br></br>   <br></br>
            In our School, in addition to the academic education, we are also conducting activities & programs to install physical, Mental,
            Intellectual & spiritual skills in the students, which helps in all around development of the child, so that the students should be able to face any challenges in life and be useful to the nation at
            large.

            Our school campus is spanned across 33 acres land, with spacious classrooms, big playground, goshala & Sri Kodanda Ramalayam Temple. Apart from the regular academic curriculum, we are also imparting training in yoga, vedic maths, robotics, spoken english and many more extra curricular activites, which improves student personality development.
            <br></br>   <br></br>
            This campus provides education facilities to more than 820 plus students including 480 plus residential students belonging to middle class families.
            We therefore,Requesting you to help our school for further improvement in all dimensions.
            <br></br>   <br></br>
            Here is the school development planning process with the resulting actions and targets captured in School Development Plans (SDPs).
            The SDP is a strategic plan for improvement. It should bring together, in a clear and simple way, the school’s priorities, the main measures it will take to raise standards, the resources dedicated to these, and the key outcomes and targets it intends to achieve.
          </p>
        </div>
        <h2 id="ch1"style={{ fontFamily: 'Cursive' }}>Contribute in this noble mission of SDP-SVAV-RAMPUR</h2>
        {/* <ul className="custom-list">
        <br></br><br></br>
        <li>&nbsp;&nbsp;Contribute in the resource developments of SVAV schools;</li>
          <li>&nbsp;&nbsp;Associate with the Alumni Council of your respective school, if you are a former student of SVAV.</li>
          <li>&nbsp;&nbsp;Participate in various programmes, seminars, workshops etc. organized by SVAV;</li>
          <li>&nbsp;&nbsp;Extend your valuable suggestions towards the development of various educational activities;</li>
        </ul> */}
        
        <div className="responsive-text">
        <img src={img12} alt="student" className="link-icon" />
        <span><h4>Contribute in the resource developments of SVAV schools.</h4></span>
      </div>
      <div className="responsive-text">
        <img src={img12} alt="student" className="link-icon" />
        <span><h4>Associate with the Alumni Council of your respective school, if you are a former student of SVAV.</h4></span>
      </div>
      <div className="responsive-text">
        <img src={img12} alt="student" className="link-icon" />
        <span><h4>Participate in various programmes, seminars, workshops etc. organized by SVAV.</h4></span>
      </div>
      <div className="responsive-text">
        <img src={img12} alt="student" className="link-icon" />
        <span><h4>Extend your valuable suggestions towards the development of various educational activities.</h4></span>
      </div>

      </div><br></br>
      <div id="sdpimgs">
        <center>
          <div><img src={img11} style={{width:"90%"}} alt="sdp 1" /></div>
          {/* <div><img src={img1} alt="Transport 1" /></div><br></br>
          <div><img src={img2} alt="Transport 2"  /></div><br></br>
          <div><img src={img3} alt="Transport 3"  /></div><br></br>
          <div><img src={img4} alt="Transport 4"  /></div><br></br>
          <div><img src={img5} alt="Transport 3" /></div><br></br>
          <div><img src={img6} alt="Transport 4" /></div><br></br>
          <div><img src={img7} alt="Transport 4"  /></div> */}
        </center>
      </div>

      <div>
        <center>
          <h2 className='sdp1'></h2>
          <table className="responsive-table">
      <thead>
        <tr>
          <th>Phase</th>
          <th>S.No</th>
          <th>Work Details</th>
          <th>Estimation</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Donar</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Phase" rowSpan={6}>Phase 1</td>
          <td data-label="S.No">1</td>
          <td data-label="Work Details">Arch, entry and exit gate with 100m wall each side</td>
          <td data-label="Estimation">30-40 Lakhs</td>
          <td data-label="Start Date">19th Aug 2024</td>
          <td data-label="End Date"></td>
          <td data-label="Donar"></td>
          <td data-label="Status"></td>
        </tr>
        <tr>
          <td data-label="S.No">2</td>
          <td data-label="Work Details">Compound Wall</td>
          <td data-label="Estimation">xx Lakhs</td>
          <td data-label="Start Date">19th Aug 2024</td>
          <td data-label="End Date"></td>
          <td data-label="Donar"></td>
          <td data-label="Status"></td>
        </tr>
        <tr>
          <td data-label="S.No">3</td>
          <td data-label="Work Details">Internal rows</td>
          <td data-label="Estimation">xx Lakhs</td>
          <td data-label="Start Date">19th Aug 2024</td>
          <td data-label="End Date"></td>
          <td data-label="Donar"></td>
          <td data-label="Status"></td>
        </tr>
        <tr>
          <td data-label="S.No">4</td>
          <td data-label="Work Details">Play Ground</td>
          <td data-label="Estimation">xx Lakhs</td>
          <td data-label="Start Date">19th Aug 2024</td>
          <td data-label="End Date"></td>
          <td data-label="Donar"></td>
          <td data-label="Status"></td>
        </tr>
        <tr>
          <td data-label="S.No">5</td>
          <td data-label="Work Details">Parking Green Spots</td>
          <td data-label="Estimation">xx Lakhs</td>
          <td data-label="Start Date">19th Aug 2024</td>
          <td data-label="End Date"></td>
          <td data-label="Donar"></td>
          <td data-label="Status"></td>
        </tr>
        <tr>
          <td data-label="S.No">6</td>
          <td data-label="Work Details">Memorial</td>
          <td data-label="Estimation">xx Lakhs</td>
          <td data-label="Start Date">19th Aug 2024</td>
          <td data-label="End Date"></td>
          <td data-label="Donar"></td>
          <td data-label="Status"></td>
        </tr>
        <tr>
          <td data-label="Phase" rowSpan={2}>Phase 2</td>
          <td data-label="S.No">1</td>
          <td data-label="Work Details"></td>
          <td data-label="Estimation"></td>
          <td data-label="Start Date"></td>
          <td data-label="End Date"></td>
          <td data-label="Donar"></td>
          <td data-label="Status"></td>
        </tr>
        <tr>
          <td data-label="S.No">2</td>
          <td data-label="Work Details"></td>
          <td data-label="Estimation"></td>
          <td data-label="Start Date"></td>
          <td data-label="End Date"></td>
          <td data-label="Donar"></td>
          <td data-label="Status"></td>
        </tr>
      </tbody>
    </table>

        </center>
      </div>
      <br></br><br></br>
      <center>
        <b>Project status reports:</b>
      <a href="Downloads"><b>Please click here</b></a>
      </center>
    </div>
  )
}

export default Sdp;