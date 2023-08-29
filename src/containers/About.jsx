import React from 'react'
import Slider from "react-slick"; 
import { slickybanner } from '../shared/Services'; 

const About = () => { 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
    
  return (
    <Slider {...settings}>     
      {
      slickybanner.map((item , index)=>(
     <div> 
      <img src={item.image} />
      </div>      
        ))}
    </Slider>
  )


}

export default About;