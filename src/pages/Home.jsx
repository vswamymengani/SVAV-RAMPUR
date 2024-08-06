import './Home.css';
//import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselSlider from './CarouselSlider';
// import schoolCampusView from './newslide1.jpg';
// import schoolCampusView1 from './newslide2.jpg';
// import schoolCampusView2 from './newslide3.jpg';
// import schoolCampusView3 from './newslide4.jpg';
// import schoolCampusView4 from './newslide5.jpg';

import yourVideo from './homevideo.mp4';

// import schoolCampusView8 from './GHOSH_1.jpg';
// import schoolCampusView9 from './vb3.jpg';
import SpecialFonts from './SpecialFonts';
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
        navigate('/Labroom');
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
            <div className='newslider'>
                <CarouselSlider />  
                </div>

                {/* <div className="carousel-wrapper">
                    <Carousel
                        showArrows={true} 
                        showThumbs={false} 
                        infiniteLoop={true} 
                        autoPlay={true} 
                        interval={1800} 
                        showStatus={false} 
                        stopOnHover={true} 
                    >
                      
                        <div className="carousel-slide">

                            <div className="t1">
                                <div className="t2"><br></br><br></br>
                                    <center><h1 id="we"> <span style={{ fontFamily: 'Cursive', fontSize: '34px' }}>WELCOME TO</span> SRI VIDYARANYA AVASA VIDYALAYAM</h1></center>

                                    <h2><center><h2>The opening verses of the school rectified</h2></center></h2>
                                    <div className='p1' style={{ fontSize: "24px", textAlign: "justify", textJustify: "inter-word", margin: "3%" }} >
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

                                </div>

                            </div>
                        </div>

                      
                        <div className="carousel-slide">
                            <img src={schoolCampusView} alt="School Campus View"   />
                        </div>
                      
                        <div className="carousel-slide">
                            <img src={schoolCampusView11} alt="School Campus View" style={{ width: '100%', height: '500px' }} />
                        </div>
                        <div className="carousel-slide">
                            <img src={schoolCampusView8} alt="School Campus View" />
                        </div>
                        <div className="carousel-slide">
                            <img src={schoolCampusView2} alt="School Campus View" />
                        </div>

                        <div className="carousel-slide">
                            <img src={schoolCampusView4} alt="School Campus View" />
                        </div>

                        <div className="carousel-slide">
                            <img src={schoolCampusView7} alt="School Campus View" style={{ width: '100%', height: '700px' }} />
                        </div>
                        <div className="carousel-slide">
                            <img src={schoolCampusView9} alt="School Campus View" />
                        </div>
                        <div className="carousel-slide">
                            <img src={schoolCampusView10} alt="School Campus View" />
                        </div>

                        <div className="carousel-slide">
                         
                            <img src={schoolCampusView1} alt="School Campus View" />
                        </div>

                    </Carousel>
                </div> */}
                {/* <div className='newsliders'> */}
                    {/* <div className="carousel-wrapper1">
                        <Carousel
                            showArrows={true}
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={1800}
                            showStatus={false}
                            stopOnHover={true}
                        >
                            <div className="carousel-slide1">

                                <div className="tn1">
                                    <div className="tn2"><br></br><br></br>
                                        <center><h1 id="we1"> <span style={{ fontFamily: 'Cursive', fontSize: '34px' }}>WELCOME TO</span> SRI VIDYARANYA AVASA VIDYALAYAM</h1></center>

                                        <h2><center><h2>The opening verses of the school rectified</h2></center></h2>
                                        <div className='p11' style={{ fontSize: "24px", textAlign: "justify", textJustify: "inter-word", margin: "3%" }} >
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

                                    </div>

                                </div>
                            </div>


                            <div className="carousel-slide1">
                                <img src={schoolCampusView} alt="School Campus View" />
                            </div>
                            <div className="carousel-slide1">
                                <img src={schoolCampusView1} alt="School Campus View 1" />
                            </div>
                            <div className="carousel-slide1">
                                <img src={schoolCampusView2} alt="School Campus View 2" />
                            </div>
                            <div className="carousel-slide1">
                                <img src={schoolCampusView3} alt="School Campus View 3" />
                            </div>
                            <div className="carousel-slide1">
                                <img src={schoolCampusView4} alt="School Campus View 4" />
                            </div>
                            <div className="carousel-slide1">
                                <img src={schoolCampusView5} alt="School Campus View 5" />
                            </div>
                            <div className="carousel-slide1">
                                <img src={schoolCampusView6} alt="School Campus View 6" />
                            </div>
                            <div className="carousel-slide1">
                                <img src={schoolCampusView7} alt="School Campus View 7" />
                            </div>
                        </Carousel>
                    </div> */}

                    <div className="bar">
                        {/* <div className="design">
                    </div> */}
                        <div className='sectwo'>
                            {/* <h2>Athadhi Vidyam | Aacharyaha Poorva Roopam | Anteyvasyuthara Roopam <br />| Vidya Sandhihi | Pravachanagum Sandhanam | Itydividyam ||</h2><br />
                        <p className="design">SVAV is established with the purpose to prepare children to reach high academic standards, with<br /> ancient wisdom, modern technology, and scientific temper.</p><br />
                        <p className="design">To blossom the inner potential of the child in a creative and innovative atmosphere, nurture the self-<br />exploration to enquire, to experiment, to find the truth in the best spirit and indomitable will.</p>
                         */}
                            {/* Video Element */}
                            <video width="60%" height="%" autoPlay loop muted>
                            <source src={yourVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        </div>
                    </div>




                    <div className='mainElement'>
                        <div className='subElementop'>
                            <figure className="Element">

                                <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://tse4.mm.bing.net/th?id=OIP.BHkh7zuokhlSZ_4qRQyD0AHaHa&pid=Api&P=0&h=220" className="attachment-full size-full"></img>

                            </figure>
                            <h4 className='subspaceop' style={{ fontFamily: 'Cursive' }} >AIM & OBJECTIVES</h4>
                            <span className='op1' style={{ textAlign: "justify" }} onClick={handleAimobj} >To develop a National System of Education which would help to build a generation
                                of youngmen and women that is<Link className='ao'>....More</Link></span>
                        </div>
                        <div className='subElement1op'>
                            <figure className="Element">

                                <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://tse1.mm.bing.net/th?id=OIP.D0-_bzmKDpTjpQeZhrltiwAAAA&pid=Api&P=0&h=220" className="attachment-full size-full"></img>

                            </figure>
                            <h4 className='subspaceop' style={{ fontFamily: 'Cursive' }}>AT GLANCE</h4>
                            <span className='op1' style={{ textAlign: "justify" }} onClick={handleag}> Sri Vidyaranya Avasa Vidyalayam at Chokkaram Nagar, Rampur is a English medium
                                school offering education from Nursery to 10th grade<Link className='ao'>....More</Link></span>
                        </div>
                        <div className='subElement2op'>
                            <figure className="Element">

                                <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height: "120px", width: "120px" }} src="https://as2.ftcdn.net/v2/jpg/01/33/78/75/1000_F_133787583_DbQZgh1QPWdqMqbISwcCchzC23Fv0gO3.jpg" className="attachment-full size-full"></img>

                            </figure>
                            <h4 className='subspaceop' style={{ fontFamily: 'Cursive' }}>ORGANIZATIONAL STRUCTURE</h4>
                            <span className='op1' style={{ textAlign: "justify" }} onClick={handleOs}>Vidya Bharati Akhila Bharatiya Shiksha Sansthan is registered under the society registration act<Link className='ao'>....More</Link></span>
                        </div>




                    </div>
                    <div className="c1f">
                        <div>
                            <span className="c132" ><SpecialFonts /></span>
                        </div>

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
                                    <img decoding='async' onClick={handlegames} src="https://svis.ind.in/wp-content/uploads/2021/10/Games-Sports.png" className="attachment-full size-full"></img></button>

                            </figure>
                            <h4 className='subspace'>Games & Sports</h4>
                            <p className='cards'> To stimulate competitive behavior among students and strengthen physical & mental growth SVAV offers both outdoor and indoor game facilities led by experienced</p>
                        </div>
                        <div className='subElement'>
                            <figure className="Element">
                                <button className='bc'>
                                    <img decoding='async' onClick={handleitlab} src="https://svis.ind.in/wp-content/uploads/2021/10/IT-LAB-Technology-Lab.png" className="attachment-full size-full"></img>
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
                                    <img decoding='async' onClick={handlelib} src="https://svis.ind.in/wp-content/uploads/2021/10/Library.png" className="attachment-full size-full"></img>
                                </button>
                            </figure>
                            <h4 className='subspace'>Library</h4>
                            <p className='cards'> <span>An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students</span></p>
                        </div>
                        <div className='subElement'>
                            <figure className="Element">
                                <button className='bc'>
                                    <img decoding='async' onClick={handletrans} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" className="attachment-full size-full"></img>
                                </button>
                            </figure>
                            <h4 className='subspace'>Transport Management System</h4>
                            <p className='cards'>SVAV1 Transport Management System is a convenience provided to our parents to facilitate a safe and easy commute for their children. </p>
                        </div>
                    </div>

                {/* </div> */}
                <div>
                    <a href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"> </a>
                    <a href="https://api.whatsapp.com/send?phone=919502116793&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
                        <i className="fa fa-whatsapp my-float"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home;