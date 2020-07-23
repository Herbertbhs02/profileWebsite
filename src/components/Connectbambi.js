import React from 'react';
import '../Style/connectbambi/connect.css';
import logo192 from '../Assets/logo192.png';

const Connectbambi = () => {
  return (
    <div className="connect" >
      <h2><span style={{fontWeight:"bold"}}><img className='reactlog' src={logo192} alt="logo192" />Connect With Old Friends </span></h2>
      <p>I developed this website to help people to reconnect with old friends.</p> 
          <p><h3>Front-end developed with:</h3> React, JavaScript and Axios for asynchronous HTTP requests to REST endpoints.</p>
          <p><h3>Back-end developed with:</h3> Nodejs, Express, Mongoose, jwtToken--authentication, bcrypt--password encryption, mongoDB and axios </p>
          <p>Please click on the link below to see the website</p>
      <a href="https://www.connectbambi.com/" target="_blank">connectbambi</a>
    </div>
  )
}
export default Connectbambi;
