import React from 'react';
import plant from '../images/plant.png'
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-left-side">
          <h1 className='landing-heading' dir="rtl">کسان آواز</h1>
          <p className="landing-para" dir="rtl">خوشحال کسان خوشحال پاکستان</p>
        </div>
        <div className="landing-right-side">
          <img src={plant} alt="plant pot" />
        </div>
      </div>
    </div>
  )
}

export default Landing;
