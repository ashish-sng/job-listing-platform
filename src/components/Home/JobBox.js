import React from 'react'
import "./JobBox.css"
import people from "../../assets/icons/people.png"
import flag from "../../assets/icons/indianFlag.png"

const JobBox = () => {
  return (
    <div className="jobBox__container">
      <div className="job__left__component">
        <div className="company__logo">
          <img src={people} alt="groupIcon" />
        </div>
        <div className="second__div">
          <span>Frontend Developer</span>
          <div className="second__div__text">
            <img src={people} alt="group" />
            <span>11-50 </span>
            <span>₹ 25000</span>
          </div>
          <div className="second__div__footer">
            <span>Office</span>
            <span>Full time</span>
          </div>
        </div>
        <div className="third__div">
          <img src={flag} alt="country" />
          <span>Delhi</span>
        </div>
      </div>
      <div className="job__right__content">
        <div className="job__right__upper">
          <span>hello</span>
          <span>hello</span>
          <span>hello</span>
        </div>
        <div className="job__right__lower">
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default JobBox