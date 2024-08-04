


import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'; // Import the Layout component
import Home from './pages/Home';
import Supportus from './components/Aboutus/Supportus';
import Vidhya from './components/Aboutus/Vidhya';
import Commite from './components/Aboutus/Commite';
import Classroom from './components/Facilities/Classroom';
import Donate from './components/Donate/Donate';
import Sportsroom from './components/Facilities/Sportsroom';
import Labroom from './components/Facilities/Labroom';
import Medical from './components/Facilities/Medical';
import Laboratories from './components/Facilities/Laboratories';
import Boardingroom from './components/Facilities/Boardingroom';
import Sadacharam from './components/Beyond/Sadacharam';
import Onlineenquiryform from './components/Admission/Onlineenquiryform';
import Contact from './pages/ContactUs';
import Cirriculum from './components/Academic/Curriculum';
import AdmissionProcess from './components/Admission/AdmissionProcess';
import Halloffame from './components/News and Letter/Halloffame';
import Library from './components/Facilities/Library';
import Auditorium from './components/Facilities/Auditorium';
import Arts from './components/Facilities/Art';
import Svavprathana from './components/Beyond/Svavprathana';
import Transport from './components/Facilities/Transport';
import Sanskrit from './components/Beyond/Sanskrit';
import Yoga from './components/Beyond/Yoga';
import Faq from './components/Admission/Faq';
import Studentenrollment from './components/Admission/Studentenrollment';
import Feestructure from './components/Admission/Feestructure';
import Philosophy from './components/Academic/Philosophy';
import SubmittedSuccessfully from './components/Footer/SubmittedSuccessfully';
import Alumini from './pages/Alumini';
import Download from './pages/Download';
import Ourfaculty from './components/Footer/Ourfaculty';
import Students from './components/Footer/Students';
import Atglance from './pages/Atglance';
import Aimobj from './pages/Aimobj';
import Os from './pages/Os';
import Archana from './components/Beyond/Archana';
import Sdp from './components/SDP/Sdp';
import Gallery from './components/News and Letter/Gallery';
import ProfessionalDevelopment from './components/Career/ProfessionalDevelopment';
import JobOpening from './components/Career/JobOpening';
import Events from './components/News and Letter/Events';
import ScrollToTop from './pages/ScrollToTop';
import Holidays from './components/Academic/Holidays';
import Gogglesheet from './components/Footer/Gogglesheet';
import Downloads from './components/Academic/Downloads';

const AppRoutes = () => {
    return (
        <>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="Supportus" element={<Supportus />} />
                <Route path="Vidhya" element={<Vidhya />} />
                <Route path="Sdp" element={<Sdp />} />
                <Route path="Commite" element={<Commite />} />
                <Route path="Classroom" element={<Classroom />} />
                <Route path="Sportsroom" element={<Sportsroom />} />
                <Route path="Labroom" element={<Labroom />} />
                <Route path="Medical" element={<Medical />} />
                <Route path="Library" element={<Library />} />
                <Route path="Laboratories" element={<Laboratories />} />
                <Route path="Auditorium" element={<Auditorium />} />
                <Route path="Arts" element={<Arts />} />  
                <Route path="Transport" element={<Transport />} />
                <Route path="Boardingroom" element={<Boardingroom />} />
                <Route path="Sadacharam" element={<Sadacharam />} />
                <Route path="Svavprathana" element={<Svavprathana />} />
                <Route path="Sanskrit" element={<Sanskrit />} />
                <Route path="Yoga" element={<Yoga />} />
                <Route path="Philosophy" element={<Philosophy />} />
                <Route path="Onlineenquiryform" element={<Onlineenquiryform />} />
                <Route path="contact" element={<Contact />} />
                <Route path="AdmissionProcess" element={<AdmissionProcess />} />
                <Route path="Cirriculum" element={<Cirriculum />} />
                <Route path="Halloffame" element={<Halloffame />} />
                <Route path="Faq" element={<Faq />} />
                <Route path="Studentenrollment" element={<Studentenrollment />} />
                <Route path="Feestructure" element={<Feestructure />} />
                <Route path="Donate" element={<Donate />} />
                <Route path="SubmittedSuccessfully" element={<SubmittedSuccessfully />} />
                <Route path="Alumini" element={<Alumini />} />
                <Route path="Download" element={<Download />} />
                <Route path="Downloads" element={<Downloads />} />
                <Route path="Ourfaculty" element={<Ourfaculty />} />
                <Route path="Students" element={<Students />} />
                <Route path="Os" element={<Os />} />
                <Route path="Atglance" element={<Atglance />} />
                <Route path="Aimobj" element={<Aimobj />} />
                <Route path="Archana" element={<Archana />} />
                <Route path="JobOpening" element={<JobOpening />} />
                <Route path="Gallery" element={<Gallery />} />
                <Route path="Events" element={<Events/>} />
                <Route path="Holidays" element={<Holidays/>} />
                <Route path="Gogglesheet" element={<Gogglesheet/>} />
                <Route path="ProfessionalDevelopment" element={<ProfessionalDevelopment />} />
               
             </Route>
        </Routes>
        </>

    );
};

export default AppRoutes;
