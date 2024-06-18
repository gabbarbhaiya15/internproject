import React from 'react'
import Share from '../Image/Share.png'
import card3img from '../Image/card3img.png'
import profile4 from '../Image/profile4.png'
import '../Style/Card2.css'
const Card3 = () => {
  return (
    <div className="card event-card mb-4">
   
    <div className="card-body">
      <div className="event-header d-flex justify-content-between">
        <span className="event-type">
          <i className="bi bi-calendar-event"></i>💼️ Job
        </span>
        <span className="event-options">
          <i className="bi bi-three-dots"><img width="18.67" height="18.67" src="https://img.icons8.com/ios-filled/50/737373/ellipsis.png" alt="ellipsis"/></i>
        </span>
      </div>
      <h5 className="card-title">
      Software Developer
      </h5>
      <div className="event-details">
        <p className="event-date">
          <i className="bi bi-calendar"><img width="15" height="16.67" src={card3img} alt="tear-off-calendar"/></i> Innovaccer Analytics Private Ltd.
        </p>
        <p className="event-location">
          <i className="bi bi-geo-alt"><img width="20" height="20" src="https://img.icons8.com/material-outlined/24/737373/marker.png" alt="marker"/></i> Noida, India
        </p>
      </div>
      <button className='card_buttons' >Apply on timesjob</button>
      <div className="event-footer d-flex justify-content-between align-items-center mt-3">
        <div className="author d-flex align-items-center">
          <img
            src={profile4}
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
            <i className="bi bi-share"> <img src={Share} alt='share' />  </i>
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card3