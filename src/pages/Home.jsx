import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import schoolCampusView from './School Campus-Dwaraka-1.jpg';
import schoolCampusView1 from './slides3.jpg';
import schoolCampusView2 from './slide1.jpg';
// import schoolCampusView3 from './slide2.jpg';
import schoolCampusView4 from './slide3.jpg';
// import schoolCampusView5 from './slide4.jpg';
// import schoolCampusView6 from './slide5.jpg';
import schoolCampusView7 from './slide6.jpg';
import schoolCampusView8 from './slide4.jpg'
import schoolCampusView9 from './SPORTS_1.jpg';
import schoolCampusView10 from './GHOSH_1.jpg';
import schoolCampusView11 from './vb3.jpg';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
// import { BsJustify } from'react-icons/bs';

const Home = () => {
    const navigate = useNavigate();

    const handledigi = () => {
        navigate('/Classroom');
    };
    const handlegames = () => {
        navigate('/Sportsroom');
    };
    const handleitlab = () => {
        navigate('/Library');
    };
    const handlelab = () => {
        navigate('/Laboratories');
    };
    const handlelib = () => {
        navigate('/Library');
    };
    const handletrans = () => {
        navigate('/Transport');
    };
    const handleAimobj = () => {
        navigate('/Aimobj');
    };
    const handleag = () => {
        navigate('/Atglance');
    };
    const handleOs = () => {
        navigate('/Os');
    };

    return (
        <div>

        <div className="body">
            {/* <div className="t01" > */}
            <div className="carousel-wrapper">
                <Carousel
                    showArrows={true} // Display navigation arrows
                    showThumbs={false} // Hide thumbnail indicators
                    infiniteLoop={true} // Enable infinite looping
                    autoPlay={true} // Auto-play the slides
                    interval={1800} // Change slides every 5 seconds
                    showStatus={false} // Hide the current slide indicator
                    stopOnHover={true} // Stop auto-play on hover
                >
                    {/* Slide 1 */}
                    <div className="carousel-slide">

                        <div className="t1">
                            <div className="t2"><br></br><br></br><br></br>
                                <center><h1 id="we">WELCOME TO SRI VIDYARANYA AVASA VIDYALAYAM</h1></center><br></br><br></br>

                                <h2><center><h4>The opening verses of the school rectified</h4></center></h2><br></br><br></br>
                                <div className='p1' >
                                    <b> The first school</b> was started in <b>1966</b>  at Nirmal in Adilabad district, the forest region of United Andhra Pradesh, the home of
                                    Mother Basara Saraswati, jointly with the ideas of Manyashree, Kirti Seshulu.<b> Sri Shathagopan Lakshmi Narasimhacharya</b>, the
                                    founders of Sri Saraswati Vidyapeeth Andhra Pradesh and the Regional Secretary of Sri Saraswati Vidyapeeth.
                                    <br></br> <br></br> Rampur is a small
                                    village in the remote area of Hajipur mandal, in Manchiryala district while the children sanctuaries are flourishing.
                                    <b>Sri
                                        Vidyaranya Avasa Vidyalaya</b>  was started in Rampur village with the great aim of providing education to the surrounding people and
                                    with the good intention of providing culture along with education. This idea came to the fore when the family members of Sri Kirti
                                    Seshulu Sri Malraju Rama Rao (Sri Laxman Rao, Sri Harish Rao, Sri Venkatarao, Sri Acharya) donated <b> 05 acres</b> of land for the realization
                                    of their ideas. On <b>19-4-1980,</b> Shri Raudrinama Samvatsara Vaisakh Shuddha Panchami, Bhumi Pooja and foundation stone laying was done by Dr. Kona
                                    Brahmananda Rao. Later <b>28 acres</b> of land was donated by the family members of Hajipur resident <b>Shri Puskuri Chokka Rao</b> (Shri Puskuri Surya
                                    Prakash Rao, Shri Puskuri Venkateswar Rao, Shri Puskuri Chokkarao).<br></br><br></br>
                                </div>
                                {/* <button id="bk">KNOW MORE</button> */}
                            </div>
                            <div className='container'>
                                <img className='image2' style={{ height: "400px", width: "400px" }} src='https://svis.ind.in/wp-content/uploads/2021/11/vidyaranya_panchakosha.png' alt="School Image" />
                            </div>
                        </div>
                    </div>

                    {/* Additional Slides */}
                    <div className="carousel-slide">
                        <img src={schoolCampusView} alt="School Campus View"  />
                    </div>
{/* 
                    style={{ width: '100%', height: '600px' }}  */}
                    <div className="carousel-slide">
                        <img src={schoolCampusView11} alt="School Campus View"  style={{ width: '100%', height: '700px' }}  />
                    </div>
                    <div className="carousel-slide">
                        <img src={schoolCampusView8} alt="School Campus View"  />
                    </div>
                    <div className="carousel-slide">
                        <img src={schoolCampusView2} alt="School Campus View"  />
                    </div>

                    <div className="carousel-slide">
                        <img src={schoolCampusView4} alt="School Campus View"  />
                    </div>

                    <div className="carousel-slide">
                        <img src={schoolCampusView7} alt="School Campus View"  style={{ width: '100%', height: '700px' }}  />
                    </div>
                    <div className="carousel-slide">
                        <img src={schoolCampusView9} alt="School Campus View"  />
                    </div>
                    <div className="carousel-slide">
                        <img src={schoolCampusView10} alt="School Campus View"  />
                    </div>

                    <div className="carousel-slide">
                        {/* Add additional content for other slides here */}
                        <img src={schoolCampusView1} alt="School Campus View" />
                    </div>

                    {/* Add as many slides as needed */}
                </Carousel>
            </div>

            <div className="bar">
                <div className="design">
                </div>
                <div className='sectwo'>
                    <h2>Athadhi Vidyam | Aacharyaha Poorva Roopam | Anteyvasyuthara Roopam <br />| Vidya Sandhihi | Pravachanagum Sandhanam | Itydividyam ||</h2><br />
                    <p className="design">SVAV is established with the purpose to prepare children to reach high academic standards, with<br /> ancient wisdom, modern technology, and scientific temper.</p><br />
                    <p className="design">To blossom the inner potential of the child in a creative and innovative atmosphere, nurture the self-<br />exploration to enquire, to experiment, to find the truth in the best spirit and indomitable will.</p>
                </div> </div>




            <div className='mainElement'>
                <div className='subElementop'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://tse4.mm.bing.net/th?id=OIP.BHkh7zuokhlSZ_4qRQyD0AHaHa&pid=Api&P=0&h=220" className="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspaceop' >AIM & OBJECTIVES</h4>
                    <span className='op1' style={{ textAlign: "justify" }} onClick={handleAimobj} >To develop a National System of Education which would help to build a generation
                        of youngmen and women that is<Link className='ao'>....More</Link></span>
                </div>
                <div className='subElement1op'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://tse1.mm.bing.net/th?id=OIP.D0-_bzmKDpTjpQeZhrltiwAAAA&pid=Api&P=0&h=220" className="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspaceop' >AT GLANCE</h4>
                    <span className='op1' style={{ textAlign: "justify" }} onClick={handleag}> Sri Vidyaranya Avasa Vidyalayam at Chokkaram Nagar, Rampur is a English medium
                        school offering education from Nursery to 10th grade<Link className='ao'>....More</Link></span>
                </div>
                <div className='subElement2op'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://as2.ftcdn.net/v2/jpg/01/33/78/75/1000_F_133787583_DbQZgh1QPWdqMqbISwcCchzC23Fv0gO3.jpg" className="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspaceop'>ORGANIZATIONAL STRUCTURE</h4>
                    <span className='op1' style={{ textAlign: "justify" }} onClick={handleOs}>Vidya Bharati Akhila Bharatiya Shiksha Sansthan is registered under the society registration act<Link className='ao'>....More</Link></span>
                </div>
              



            </div>
            <div className="c1f">
              <div> <span className="c132">FACILITIES</span></div> 
            </div>
          

            <div className='mainElement'>
               
                
                <div className='subElement'>
               
                    <figure className="Element">

                        <button className="bc">
                            <img decoding='async' onClick={handledigi} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" className="attachment-fullsize-full"></img>
                            
                            </button>

                    </figure>
                    <h4 className='subspace' >Digital Classrooms</h4>
                    <p className='cards'>The Digital Classroom project features information, resources, and professional development opportunities to support schools in understanding</p>
                </div>
                <div className='subElement'>
                    <figure className="Element">

                        <button className='bc'>
                            <img decoding='async'  onClick={handlegames} src="https://svis.ind.in/wp-content/uploads/2021/10/Games-Sports.png" className="attachment-full size-full"></img></button>

                    </figure>
                    <h4 className='subspace'>Games & Sports</h4>
                    <p className='cards'> To stimulate competitive behavior among students and strengthen physical & mental growth SVAV offers both outdoor and indoor game facilities led by experienced</p>
                </div>
                <div className='subElement'>
                    <figure className="Element">
                        <button className='bc'>
                            <img decoding='async'  onClick={handleitlab} src="https://svis.ind.in/wp-content/uploads/2021/10/IT-LAB-Technology-Lab.png" className="attachment-full size-full"></img>
                        </button>
                    </figure>
                    <h4 className='subspace'>IT Lab / Technology Lab</h4>
                    <p className='cards'>A well-equipped computer lab with a good number of systems, various educational software, and online computer applications is provided to learn from basic computer skills</p>
                </div>
            </div>

            <div className='mainElement'>
                <div className='subElement'>
                    <figure className="Element">
                        <button className='bc'>
                            <img decoding='async' onClick={handlelab} src="https://svis.ind.in/wp-content/uploads/2021/10/LABORATORIES.png" className="attachment-full size-full"></img>
                        </button>
                    </figure>
                    <h4 className='subspace'>Laboratories</h4>
                    <p className='cards'> <span> SVAV has well-equipped Science labs, Math labs, English labs/Language labs, Computer labs & Robotics labs to foster hands-on experience, enhance learning </span></p>
                </div>
                <div className='subElement'>
                    <figure className="Element" >
                        <button className='bc'>
                            <img decoding='async'  onClick={handlelib} src="https://svis.ind.in/wp-content/uploads/2021/10/Library.png" className="attachment-full size-full"></img>
                        </button>
                    </figure>
                    <h4 className='subspace'>Library</h4>
                    <p className='cards'> <span>An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students</span></p>
                </div>
                <div className='subElement'>
                    <figure className="Element">
                        <button className='bc'>
                            <img decoding='async'  onClick={handletrans} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" className="attachment-full size-full"></img>
                        </button>
                    </figure>
                    <h4 className='subspace'>Transport Management System</h4>
                    <p className='cards'>SVAV1 Transport Management System is a convenience provided to our parents to facilitate a safe and easy commute for their children. </p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Home;