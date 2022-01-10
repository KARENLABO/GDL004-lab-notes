import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import PinkToBlue from '../Images/Pink-to-blue-pallete.png';
import Blue from '../Images/Blue-pallete.png';
import PinkToBlueInverted from '../Images/Pink-to-blue-pallete-inverted.png';
import PurpleToBlue from '../Images/Purple-to-blue-pallete.png';

import '../Components/componentsCSS/banner.css'  
import 'bootstrap/dist/css/bootstrap.min.css';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="ImgBanner"
            src={PinkToBlue}
            alt="Third slide"
          />
          <Carousel.Caption >
            <h1 className="BannerLetters">
              Lab Notes
            </h1>
            <p className="BannerLettersP">The place to write your best ideas</p>          
          </Carousel.Caption> 
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ImgBanner"
            src={Blue}
            alt="Second slide"
          />
          <Carousel.Caption >
            <h1 className="BannerLetters">
              Lab Notes
            </h1>
            <p className="BannerLettersP">Be Magic, write Magic</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ImgBanner"
            src={PinkToBlueInverted}
            alt="Second slide"
          />
          <Carousel.Caption >
            <h1 className="BannerLetters">
              Lab Notes
            </h1>
            <p className="BannerLettersP">Be Magic, write Magic</p>            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ImgBanner"
            src={PurpleToBlue}
            alt="First slide"
          />
          <Carousel.Caption >
            <h1 className="BannerLetters" >
              Lab Notes
            </h1>
            <p className="BannerLettersP">If you can think it you can make it</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

  export default ControlledCarousel