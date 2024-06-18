import React, { useState } from 'react';
import logo from '../Image/whole.png';
import add_peope from '../Image/add_people.png';
import friends from '../Image/Group.png';
import reactangle5 from '../Image/reactangle5.png';
import profile from '../Image/profile.png';
import profile2 from '../Image/profile2.png';
import rectangle6 from '../Image/rectangle6.png';
import mobile_navbar from '../Image/mobile_navbar.png';
import join_group from '../Image/Join_group.png';
import filter from '../Image/Filter.png';
import write from '../Image/write.png';
import jgroup from '../Image/jgroup.png';
import pencilup from '../Image/pencilup.png';
import '../Style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import Signup from './Signup'; // Import the Signup component

export const Home = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const toggleSignupPopup = () => {
    setIsSignupVisible(!isSignupVisible);
  };

  return (
    <div className='container-fluid p-0'>
      <nav className='navbar p-2' id='top_navbar'>
        <div id='logo_box'>
          <img src={logo} alt='' id='logo' />
        </div>
        <div className="input-group search-bar rounded-pill" id='searchbar'>
          <span className="input-group-text search-icon border-0 rounded-pill bg-transparent">
            <img width="15" height="15" src="https://img.icons8.com/ios/50/737373/search--v1.png" alt="search--v1" />
          </span>
          <input type="text" className="form-control search-input border-0 rounded-pill bg-transparent" placeholder="Search for your favorite groups in ATG" aria-label="Search" aria-describedby="basic-addon1" />
        </div>
        <div className='' id='text_box'>
          <p onClick={toggleSignupPopup} style={{ cursor: 'pointer' }}>Create account. It’s free!</p>
        </div>
      </nav>
      <nav className='d-flex justify-content-end align-items-center' id='mobile_top_navbar'>
        <img src={mobile_navbar} className='' alt='navbar' id ="mobile_navbar" />
      </nav>

      {/* Rectangle 3 and other components */}
      <div className='row' id="rectangle_3">
        <div className="col">
          <div className='d-flex justify-content-between align-items-center' id='mobile_img_box'>
            <img id='join_group' width="24" height="24" src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/FFFFFF/external-Left-interface-glyph-silhouettes-icons-papa-vector-2.png" alt="external-Left-interface-glyph-silhouettes-icons-papa-vector-2" />
            <img id='join_group' src={join_group} alt='' />
          </div>
          <div className="rectangle-content">
            <p className='computer_science'>Computer Science</p>
            <p className='computer_text'>142,765 Computer Engineers follow this</p>
          </div>
        </div>
      </div>
      {/* Navbar and buttons */}
      <div className='row d-flex justify-content-between align-items-center border-bottom' id='rectangle_4'>
        <div className='col '>
          <div className=" fw-bold " aria-current="page" href="#" id='page'>All Post(132)</div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" id='back'>
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active " aria-current="page" href="#">All Post(32)</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Article</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Event</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Education</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Job</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className='col d-flex justify-content-end ' id='button_box'>
          <img src={filter} id='filter' alt='' />
          <img src={write} id='back' alt='' />
          <img src={jgroup} id='back' alt='' />
        </div>
      </div>
      {/* Cards */}
      <div className='row' id='rectangle_5'>
        <div className='col-8 d-flex  flex-column align-items-center' id='main_card_container'>
          <div className='' id='card_container'>
            <Card
              image={reactangle5}
              type={"✍️ Article"}
              heading={"What if famous brands had regular fonts? Meet RegulaBrands!"}
              para={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
              profile={profile}
              name={"Sarthak Kamra"}
            />
            <Card
              image={rectangle6}
              type={"🔬️ Education"}
              heading={"Tax Benefits for Investment under National Pension Scheme launched by Government"}
              para={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
              profile={profile2}
              name={"Sarah West"}
            />
            <Card2 />
            <Card3 />
          </div>
        </div>
        <div className='col' id='card_container_2'>
          <div className='mt-4 d-flex flex-column align-items-center'>
            <div className="input-group mb-3" id='location'>
              <span className="input-group-text bg-transparent border-0">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/000000/marker.png"
                  alt="location-icon"
                />
              </span>
              <input
                type="text"
                className="form-control border-0 mt-1"
                placeholder="Enter your location"
                aria-label="Location"
              />
            </div>
            <div className='text-secondary' id='col-2-text'>
              <p>Your location will help us serve better <br /> and extend a personalised experience.</p>
            </div>
            <div>
              <img src={friends} alt=' ' />
            </div>
          </div>
        </div>
      </div>
      <img src={pencilup} alt='' className='pencilup' onClick={toggleSignupPopup} />
      {isSignupVisible && <Signup closePopup={toggleSignupPopup} />} {/* Conditionally render Signup */}
    </div>
  );
};

export default Home;
