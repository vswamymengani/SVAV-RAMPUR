import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
 import './Library.css';
import img1 from './libimg1.jpg';
import img2 from './libimg2.jpeg.jpg';
import img3 from './libimg3.jpg';
import img4 from './lib1.jpg';
import img6 from './lib3.jpg';
import { FaBook, FaNewspaper, FaJournalWhills, FaRegClipboard, FaUserGraduate, FaChalkboard } from 'react-icons/fa';

const images = [img1, img2, img3, img4, img6];

const Library = () => {
  return (
    <div className="Library-container">
      <div className="Library-slider1">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={true}
          className="carousel-slider1"
        >
          {images.map((src, index) => (
            <div key={index} className="carousel-image-container1">
              <img src={src} alt={`Slide ${index + 1}`} className="carousel-image1" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="Library-content">
        <h1 id="Library">Library Facilities</h1><br />
        <div id="Librarycontents">
          <div className="facility-item-Library">
            <h3><FaBook style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />Home Lending of Books</h3>
          </div>
          <div className="facility-item-Library">
            <h3><FaJournalWhills style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />Periodical Journals & magazines are available</h3>
          </div>
          <div className="facility-item-Library">
            <h3><FaNewspaper style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />Daily Newspapers</h3>
          </div>
          <div className="facility-item-Library">
            <h3><FaRegClipboard style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />Reference Services for projects & assignments</h3>
          </div>
          <div className="facility-item-Library">
            <h3><FaChalkboard style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />Reading Room for self-study</h3>
          </div>
          <div className="facility-item-Library">
            <h3><FaUserGraduate style={{ color: 'black', fontSize: '2rem' }} className="facility-logo-Library" />Services to ex-students</h3>
          </div>
        </div>
      </div>
      <div id="clspara">
      <center>
      <h1 id="Library">Library Facilities</h1><br />
      </center>
      <span>
          An all-encompassing source of information including children’s literature, magazines, reference books, newspapers, and educational CD’s is provided to help students build fluency and become self-reliant readers.
          <br /><br />
          It plays an important part in the learning process of the school as it’s a counterpart of the school’s infrastructure. This well-stocked library is located in a quiet and calm place with a soothing ambiance for the students to concentrate better.
          <br /><br />
          <center><div id="lib1"></div></center>
          <br /><br />
          <b>Features of our Library</b> <br /><br />
          An all-encompassing source of information including children’s literature, magazines, reference books, newspapers, and educational CD’s is provided to help students build fluency and become self-reliant readers. <br /><br />
          It plays an important part in the learning process of the school as it’s a counterpart of the school’s infrastructure. This well-stocked library is located in a quiet and calm place with a soothing ambiance for the students to concentrate better.
          <br /><br />
          <b>Library Rules & Regulations</b> <br /><br /><br />
          <center><div id="lib2"></div></center>
          <br /><br />
          • Before entering the library, Users (Staff & Student) should leave their belongings at the property counter and must scan their ID card in e-gate at the entrance.<br /><br />
          • Strict silence should be maintained inside the library.<br /><br />
          • Books will be issued only under the Non-Transferable Institutional ID Card.<br /><br />
          • If the borrowed book is not returned on the due date, a fine of Rs.1 per day must be paid until the book is returned.<br /><br />
          • In case of damage or loss of a book, the borrower should provide a new book along with overdue charges. Otherwise, the triple price of the latest edition of the book will be collected along with a penalty for overdue.<br /><br />
          • Writing in the books, dog-earing, tearing pages, and tampering with the date-slip or any other type of mutilation of books and journals, etc., are punishable offenses.<br /><br />
          • Reference books, Back Volumes, and Journals are not allowed to be lent out of the library.<br /><br />
          • Cell phones are strictly prohibited inside the library even if they are staff/Management/Students.<br /><br />
          • The authority will take necessary action against the users who violate the library rules and regulations.
        </span>
      </div>
    </div>
  );
};

export default Library;
