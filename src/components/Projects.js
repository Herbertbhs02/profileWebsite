import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Connectbambi from './Connectbambi';
import Wikipedia from './Wikipedia';
import Calculator from './Calculator';
import Houseview from './Houseview';
import logo192 from '../Assets/logo192.png';
import '../Style/projects/projects.css';


 class Projects  extends Component {
  render() {
    const settings = {
        
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      

    };
    return (
      <div>
      
        <h2 className='reactproject'><img className='reactlog' src={logo192} alt="logo192" />REACT PROJECTS</h2>
    
        <Slider {...settings}>
          <div >
            <Connectbambi/>
          </div>

          <div>
          <Houseview/>
        </div>

          <div>
            <Wikipedia/>
          </div>
          <div>
            <Calculator/>
          </div>
          <div>
           
          </div>
        
        </Slider>
        
      </div>
    );
  }
}

export default Projects;