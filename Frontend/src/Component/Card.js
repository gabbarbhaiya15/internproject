import React from 'react'
import Share from '../Image/Share.png'
import '../Style/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({image,type,heading,para,profile,name}) => {
  return (
    <div className="card article-card mb-4">
      <img
        src={image}
        className="card-img-top"
        alt="Article Image"
      />
      <div className="card-body">
        <div className="article-header d-flex justify-content-between">
          <span className="article-type">
            <i className="bi bi-pencil"></i>{type}
          </span>
          <span className="article-options">
            <i className="bi bi-three-dots"></i>
          </span>
        </div>
        <h5 className="card-title">
        {heading}
        </h5>
        <p className="card-text">
         {para}
        </p>
        <div className="article-footer d-flex justify-content-between align-items-center">
          <div className="author d-flex align-items-center">
            <img
              src= {profile}
              alt="Author"
              className="rounded-circle"
            />
            <span className="author-name ms-2">{name}</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="views">
              <i className="bi bi-eye"></i> 1.4k views
            </span>
            <span className="share ms-3">
              <i className="bi bi-share"><img src={Share} alt='share' /> </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card