// Card2.js
import React, { useState } from 'react';
import rectangle7 from '../Image/Rectangle7.png';
import profile3 from '../Image/profile3.png';
import Share from '../Image/Share.png';
import menuImage from '../Image/Group6.png'; // Import the menu image
import '../Style/Card2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card2 = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="card event-card mb-4">
      <img
        src={rectangle7}
        className="card-img-top"
        alt="Event Image"
      />
      <div className="card-body">
        <div className="event-header d-flex justify-content-between">
          <span className="event-type">
            <i className="bi bi-calendar-event"></i> 🗓️ Meetup
          </span>
          <span className="event-options" onClick={toggleMenu}>
            <i className="bi bi-three-dots">
              <img width="18.67" height="18.67" src="https://img.icons8.com/ios-filled/50/737373/ellipsis.png" alt="ellipsis" />
            </i>
          </span>
        </div>
        {menuVisible && (
          <div className="menu">
            <img src={menuImage} alt="Menu" />
          </div>
        )}
        <h5 className="card-title">
          Finance & Investment Elite Social Mixer @Lujiazui
        </h5>
        <div className="event-details">
          <p className="event-date">
            <i className="bi bi-calendar">
              <img width="15" height="16.67" src="https://img.icons8.com/material/24/737373/tear-off-calendar.png" alt="tear-off-calendar" />
            </i> Fri, 12 Oct, 2018
          </p>
          <p className="event-location">
            <i className="bi bi-geo-alt">
              <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/737373/marker.png" alt="marker" />
            </i> Ahmedabad, India
          </p>
        </div>
        <button className='card_button'>Visit Website</button>
        <div className="event-footer d-flex justify-content-between align-items-center mt-3">
          <div className="author d-flex align-items-center">
            <img
              src={profile3}
              alt="Author"
              className="rounded-circle"
            />
            <span className="author-name ms-2">Ronal Jones</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="views">
              <i className="bi bi-eye"></i> 1.4k views
            </span>
            <span className="share ms-3">
              <i className="bi bi-share">
                <img src={Share} alt='share' />
              </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;