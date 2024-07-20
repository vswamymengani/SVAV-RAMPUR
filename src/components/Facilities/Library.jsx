
import Slider from 'react-slick';
import './Library.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './libimg1.jpeg';
import img2 from './libimg2.png';
import img3 from './libimg3.jpeg';
import img4 from './lib1.jpg';
import img6 from './lib3.jpg';
import { FaBook, FaNewspaper, FaJournalWhills, FaRegClipboard, FaUserGraduate, FaChalkboard } from 'react-icons/fa';

// Import logos for the facilities


const Library = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1900,
    interval: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 630
  };

  return (
    <div>
    <div className="Library-container">
      <div className="Library-slider">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Library 1" /></div>
          <div><img src={img2} alt="Library 2" /></div>
          <div><img src={img3} alt="Library 3" /></div>
          <div><img src={img4} alt="Library 1" /></div>
          <div><img src={img6} alt="Library 3" /></div>
        </Slider>
      </div>
      <div className="Library-content">
        <h1 id="Library">Library Facilities</h1>
        <div id="Librarycontents">
        <div className="facility-item-Library">
        <FaBook style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />
        <h3>Home Lending of Books</h3>
      </div>
      <div className="facility-item-Library">
        <FaJournalWhills style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />
        <h3>Periodical Journals and magazines are available</h3>
      </div>
      <div className="facility-item-Library">
        <FaNewspaper style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />
        <h3>Daily Newspapers</h3>
      </div>
      <div className="facility-item-Library">
        <FaRegClipboard style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />
        <h3>Reference Services for projects and assignments</h3>
      </div>
      <div className="facility-item-Library">
        <FaChalkboard style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />
        <h3>Reading Room for self-study</h3>
      </div>
      <div className="facility-item-Library">
        <FaUserGraduate style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />
        <h3>Services to ex-students</h3>
      </div>
        </div>
      </div>
    </div>
    <div id="libconn">
        <span >
        An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students build fluency and become self-reliant readers.
           <br></br><br></br>
           It plays an important part in the learning process of the school as it’s a counterpart of the schools infrastructure. This well stocked libraryis located in a quiet and calm place with a soothing ambience for the students to concentrate better.
           <br></br><br></br>
           <center><div id="lib1"></div></center><br></br><br></br>
        <b>  Features of our Library</b>  <br></br><br></br>
An all-encompassing source of information including children’s literature, magazines, reference books, newspapers and educational CD’s is provided to help students build fluency and become self-reliant readers. <br></br><br></br>
It plays an important part in the learning process of the school as it’s a counterpart of the schools infrastructure. This well stocked libraryis located in a quiet and calm place with a soothing ambience for the students to concentrate better.
<br></br><br></br>

<b>Library Rules & Regulations</b> <br></br><br></br><br></br>
<center><div id="lib2"></div></center><br></br><br></br>
•	Before entering the library, Users (Staff & Student) should leave their belongings at the property counter and must scan their ID card in e-gate at the entrance.<br></br><br></br>
•	Strict silent should be maintained inside the library. <br></br><br></br>
•	Book will be issued only under the Non-Transferable Institutional ID Card.<br></br><br></br>
•	If the borrowed book is not returned on the due date, a fine of Rs.1. per day must be paid until the book is returned.<br></br><br></br>
•	In case of damage or loss of book, the borrower should provide a new book along with overdue charges. Otherwise the triple-price of the latest edition of book will be collected along with penalty of overdue<br></br><br></br>
•	Writing in the books, dog-earing, tearing pages and tampering the date – slip or any other type of mutilation of books and journals etc., are punishable offences.<br></br><br></br>
•	Reference books, Back Volumes, and Journals are not allowed to lend out of the library.<br></br><br></br>
•	Cell phone is strictly prohibited inside the library even they are staff/Management/Students.<br></br><br></br>
•	The authority will take necessary action against the users who violate the library rules and regulations.

        </span>
    </div>
    </div>
  );
};

export default Library;