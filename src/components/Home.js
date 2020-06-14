import React from 'react';
import profilePicture from '../Assets/profilePicture4.png';
import '../Style/home/home.css'

 const Home = ()=> {
  return (
    <div>
        <div className='container'>
        <img className='profilePicture' src={profilePicture} alt="profilePicture" />
        <div className='name'><h3>Herbert Ssevume</h3></div>
        </div>

        <div className='devlist'><h3>FULL STACK WEB DEVELOPER</h3>
        <hr style={{border:" dotted"}}/>
        <h5>HTML | CSS-Flexbox,Grid | JavaScript | React |Redux| Nodejs | Express | MongoDB | Github | AWS-Cloud</h5>
        </div>
    </div>
  );
}

export default Home;