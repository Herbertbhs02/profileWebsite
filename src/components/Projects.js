import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Connectbambi from './Connectbambi';
import Wikipedia from './Wikipedia';
import Calculator from './Calculator';
import Houseview from './Houseview';
import Blogapp from './Blogapp';
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
      
        <h2 className='reactproject'> PROJECTS</h2>
    
        <Slider {...settings}>
          <div >
            <Connectbambi/>
          </div>

          <div>
          <Blogapp/>
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
        
        </Slider>
        
      </div>
    );
  }
}

export default Projects;