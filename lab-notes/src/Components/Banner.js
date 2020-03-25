import Carousel from 'react-bootstrap/Carousel'
import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../banner.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="Banner"
            src="https://i.pinimg.com/originals/be/38/c4/be38c4b5eb251520f7add837c0b3bdd0.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="BannerLetters">
            <h1 className="BannerLetters" >
              Lab Notes
            </h1>
            <p className="BannerLettersP">If you can think it you can make it</p>
                    
          </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Banner"
            src="https://i.pinimg.com/originals/c1/b7/d8/c1b7d80ae7e42cc8d969fc16db9ffb15.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="BannerLetters">
            <h1 className="BannerLetters">
              Lab Notes
            </h1>
            <p className="BannerLettersP">Be Magic, write Magic</p>
                    
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img
            className="Banner"
            src="https://assets.wordpress.envato-static.com/uploads/2017/03/watercolor2.jpeg"
            alt="Third slide"
          />
          
         
      <Carousel.Caption className="BannerLetters">
          <h1 className="BannerLetters">
            Lab Notes
          </h1>
          <p className="BannerLettersP">The place to write your best ideas</p>
                    
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