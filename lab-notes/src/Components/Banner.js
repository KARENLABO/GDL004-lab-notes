import Carousel from 'react-bootstrap/Carousel'
import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
          className='bannerPrincipal'
            src="https://cdn.wallpapersafari.com/88/72/I78SE0.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://i.pinimg.com/originals/77/20/ba/7720bad30e15738e6c610ba8e673352c.jpg"
            alt="Second slide"
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.wordpress.envato-static.com/uploads/2017/03/watercolor2.jpeg"
            alt="Third slide"
          />
      <Carousel.Caption>
          <h1>LAB NOTES</h1>
          <img with='100'src='https://image.flaticon.com/icons/svg/497/497492.svg'
          alt="inside"/>
        </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
    );
  }
  
  class ControllerBanner extends Component{

    render (){
        return (
            <ControlledCarousel/>
        )
    }
  }
  

  export default ControllerBanner