import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import schoolCampusView from './School prayer-time-1.jpg';
import schoolCampusView1 from './School Campus-Dwaraka-1.jpg';


const Home = () => {
   return (

    
        <div>
            
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
                                    
                                    <h2><center><b>The opening verses of the school recited:</b></center></h2>
                                    <p className='p1'>
                                        The first school was started in 1966 at Nirmal in Adilabad district, the forest region of Andhra Pradesh, the home of
                                        Mother Basara Saraswati, jointly with the ideas of Manyashree, Kirti Seshulu. Sri Shathagopan Lakshmi Narasimhacharya, the
                                        founders of Sri Saraswati Vidyapeeth Andhra Pradesh and the Regional Secretary of Sri Saraswati Vidyapeeth. Rampur is a small
                                        village in the remote area of Hajipur mandal, in Manchiryala district while the children's sanctuaries are flourishing. Sri
                                        Vidyaranya Avasa Vidyalaya was started in Rampur village with the great aim of providing education to the surrounding people and
                                        with the good intention of providing culture along with education. This idea came to the fore when the family members of Sri Kirti
                                        Seshulu Sri Malraju Rama Rao (Sri Laxman Rao, Sri Harish Rao, Sri Venkatarao, Sri Acharya) donated five acres of land for the realization
                                        of their ideas. On 19-4-1980, Shri Raudrinama year Vaisakh Shuddha Panchami, Bhumi Pooja and foundation stone laying was done by Dr. Kona
                                        Brahmananda Rao. Later 28 acres of land was donated by the family members of Hajipur resident Shri Puskuri Chokka Rao (Shri Puskuri Surya
                                        Prakash Rao, Shri Puskuri Venkateswar Rao, Shri Puskuri Chokkarao).
                                    </p>
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
                    </div>
                </div><div className="c1">
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