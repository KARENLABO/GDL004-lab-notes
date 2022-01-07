import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
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
            src="https://assets.wordpress.envato-static.com/uploads/2017/03/watercolor2.jpeg"
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
            src= 'https://www.xtrafondos.com/wallpapers/palmas-en-pared-rosa-pastel-3842.jpg'
            alt="First slide"
          />
          <Carousel.Caption >
            <h1 className="BannerLetters" >
              Lab Notes
            </h1>
            <p className="BannerLettersP">If you can think it you can make it</p>
                    
          </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ImgBanner"
            src="https://3.bp.blogspot.com/-WqrzUNDz9pc/WaGyaWWOFRI/AAAAAAAAj4k/F3zfTXXV9D4CKvMlbps2tf9On2KD3fJ2gCLcBGAs/s1600/walppapers-fondos-1600x1000px%2B%25283%2529.jpg"
            alt="Second slide"
          />
          <Carousel.Caption >
            <h1 className="BannerLetters">
              Lab Notes
            </h1>
            <p className="BannerLettersP">Be Magic, write Magic</p>
                    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

  export default ControlledCarousel