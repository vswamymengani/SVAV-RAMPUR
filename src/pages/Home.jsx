import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import schoolCampusView from './School prayer-time-1.jpg';
import schoolCampusView1 from './School Campus-Dwaraka-1.jpg';
const Home = () => {
    
   return (
        
           <div className="body">
            <div className="t01" >
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
                                <div className="t2">
                                    <h1 id="we">WELCOME TO SRI VIDYARANYA AVASA VIDYALAYAM</h1>
                                    
                                    <h2><center><h4>The opening verses of the school recited</h4></center></h2>
                                    <span className='p1'>
                                       <b> The first school</b> was started in <b>1966</b>  at Nirmal in Adilabad district, the forest region of Andhra Pradesh, the home of
                                        Mother Basara Saraswati, jointly with the ideas of Manyashree, Kirti Seshulu. Sri Shathagopan Lakshmi Narasimhacharya, the
                                        founders of Sri Saraswati Vidyapeeth Andhra Pradesh and the Regional Secretary of Sri Saraswati Vidyapeeth. Rampur is a small
                                        village in the remote area of Hajipur mandal, in Manchiryala district while the children's sanctuaries are flourishing.<br></br> <br></br>
                                        <b>Sri
                                        Vidyaranya Avasa Vidyalaya</b>  was started in Rampur village with the great aim of providing education to the surrounding people and
                                        with the good intention of providing culture along with education. This idea came to the fore when the family members of Sri Kirti
                                        Seshulu Sri Malraju Rama Rao (Sri Laxman Rao, Sri Harish Rao, Sri Venkatarao, Sri Acharya) donated five acres of land for the realization
                                        of their ideas. On <b>19-4-1980,</b> Shri Raudrinama year Vaisakh Shuddha Panchami, Bhumi Pooja and foundation stone laying was done by Dr. Kona
                                        Brahmananda Rao. Later 28 acres of land was donated by the family members of Hajipur resident Shri Puskuri Chokka Rao (Shri Puskuri Surya
                                        Prakash Rao, Shri Puskuri Venkateswar Rao, Shri Puskuri Chokkarao).<br></br><br></br>
                                    </span>
                                    <button id="bk">KNOW MORE</button>
                                </div>
                                <div className='container'>
                                    <img className='image2' style={{ height: "400px", width: "400px" }} src='https://svis.ind.in/wp-content/uploads/2021/11/vidyaranya_panchakosha.png' alt="School Image" />
                                </div>
                            </div>
                        </div>

                        {/* Additional Slides */}
                        <div className="carousel-slide">
                            <img src={schoolCampusView} alt="School Campus View" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="carousel-slide">
                            {/* Add additional content for other slides here */}
                            <img src={schoolCampusView1} alt="School Campus View" style={{ width: '100%', height: 'auto' }} />
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

                    <img decoding='async' style={{ margin: "inherit", marginBlock: "auto", height:"120px", width:"120px"}} src="https://tse4.mm.bing.net/th?id=OIP.BHkh7zuokhlSZ_4qRQyD0AHaHa&pid=Api&P=0&h=220" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspaceop'>AIM & OBJECTIVES</h4>
                    <p className='op1' style={{ textAlign: "justify" }}>To develop a National System of Education which would help to build a generation
                    of youngmen and women that is[....More]</p>
                </div>
                <div className='subElement1op'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto",height:"120px", width:"120px" }} src="https://tse1.mm.bing.net/th?id=OIP.D0-_bzmKDpTjpQeZhrltiwAAAA&pid=Api&P=0&h=220" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspaceop'>AT GLANCE</h4>
                    <p className='op1' style={{ textAlign: "justify" }}> Sri Vidyaranya Avasa Vidyalayam at Chokkaram Nagar, Rampur is a English medium
                    school offering education from Nursery to 10th grade[....More]</p>
                </div>
                <div className='subElement2op'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto",height:"120px", width:"120px" }} src="https://as2.ftcdn.net/v2/jpg/01/33/78/75/1000_F_133787583_DbQZgh1QPWdqMqbISwcCchzC23Fv0gO3.jpg" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspaceop'>ORGANIZATIONAL STRUCTURE</h4>
                    <p className='op1' style={{ textAlign: "justify" }}>Vidya Bharati Akhila Bharatiya Shiksha Sansthan is registered under the society registration act[....More]</p>
                </div>
                    {/* </div> */}



                </div><div className="c1f">
                <center> <span className="c132">FACILITIES</span></center>   
                </div>
            </div>

            <div className='mainElement'>
                <div className='subElement'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Digital Classrooms</h4>
                    <p style={{ textAlign: "justify" }}>The Digital Classroom project features information, resources, and professional development opportunities to support schools in understanding</p>
                </div>
                <div className='subElement1'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Games-Sports.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Games & Sports</h4>
                    <p style={{ textAlign: "justify" }}> To stimulate competitive behavior among students and strengthen physical & mental growth SVAV offers both outdoor and indoor game facilities led by experienced</p>
                </div>
                <div className='subElement2'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/IT-LAB-Technology-Lab.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>IT Lab / Technology Lab</h4>
                    <p style={{ textAlign: "justify" }}>A well-equipped computer lab with a good number of systems, various educational software, and online computer applications is provided to learn from basic computer skills</p>
                </div>
            </div>

            <div className='mainElement'>
                <div className='subElement3'>
                    <figure className="Element">

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/LABORATORIES.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Laboratories</h4>
                    <p style={{ textAlign: "justify" }}>SVAV has well-equipped Science labs, Math labs, English labs/Language labs, Computer labs & Robotics labs to foster hands-on experience, enhance learning </p>
                </div>
                <div className='subElement4'>
                    <figure className = "Element" >

                        <img decoding='async' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Library.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Library</h4>
                    <p style={{ textAlign: "justify" }}>An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students</p>
                </div>
                <div className='subElement5'>
                    <figure className="Element">

                        <img className='img1' style={{ margin: "inherit", marginBlock: "auto" }} src="https://svis.ind.in/wp-content/uploads/2021/10/Digital-Classrooms.png" class="attachment-full size-full"></img>

                    </figure>
                    <h4 className='subspace'>Transport Management System</h4>
                    <p style={{ textAlign: "justify" }}>SVAV1 Transport Management System is a convenience provided to our parents to facilitate a safe and easy commute for their children. </p>
                </div>
            </div>
            
        </div>
    )
}

export default Home;