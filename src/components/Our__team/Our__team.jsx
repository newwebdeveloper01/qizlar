import React, { useState } from 'react';
import IMG1 from '../../assets/birinchi.jpeg';
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselSlider from './CarouselSlider.jsx';
import styled from "styled-components";
import { Container, Our__Card } from './styled.js';
const Our__team = () => {


    //no of slide to be visible
    const [slideCount, setSlideCount] = useState(2);
    const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
      <Container >
      <h3 id='jamoa'>Bizning jamoamiz</h3>
      <div>
      <Our__Card className='cards'>
        <img src={IMG1} alt="Team member" />
        <div className='cards__info'>
        <h3>Direktor</h3>
        <p>Nurullayev Akbar</p>
        </div>
      </Our__Card>
      <Our__Card className='cards'>
        <img src={IMG1} alt="Team member" />
        <div className='cards__info'>
        <h3>Direktor</h3>
        <p>Nurullayev Akbar</p>
        </div>
      </Our__Card>
      <Our__Card className='cards'>
        <img src={IMG1} alt="Team member" />
        <div className='cards__info'>
        <h3>Direktor</h3>
        <p>Nurullayev Akbar</p>
        </div>
      </Our__Card>      
      
      <Our__Card className='cards'>
        <img src={IMG1} alt="Team member" />
        <div className='cards__info'>
        <h3>Direktor</h3>
        <p>Nurullayev Akbar</p>
        </div>
      </Our__Card>
      <Our__Card className='cards'>
        <img src={IMG1} alt="Team member" />
        <div className='cards__info'>
        <h3>Direktor</h3>
        <p>Nurullayev Akbar</p>
        </div>
      </Our__Card>
      <Our__Card className='cards'>
        <img src={IMG1} alt="Team member" />
        <div className='cards__info'>
        <h3>Direktor</h3>
        <p>Nurullayev Akbar</p>
        </div>
      </Our__Card>      
      
      </div>
      


      <CarouselWrapper className="carousel-container yangilik" id='yangilik'>
      <h2>Yangiliklar</h2>
      <CarouselProvider
        visibleSlides={slideCount}
        totalSlides={6}
        step={1}
        currentSlide={currentSlide}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={true}
      >
        <CarouselSlider
          setSlideCount={setSlideCount}
          setCurrentSlide={setCurrentSlide}
        />
      </CarouselProvider>
    </CarouselWrapper>

    </Container>
  );
};


const CarouselWrapper = styled.div`

text-align: center;
display: flex;
align-items: center;
justify-content: center;
& > h2 {
  margin:auto;
  margin-bottom: 10px;
}


  margin-top: 200px !important;

  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1344px;
    }
  }

  /* This class is found in Slide from pure-react-carousel */
  /* We need to override it to add space between slides */
  .carousel__inner-slide {
    /* width: 100% - margin */
    width: calc(100% - 16px);
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`;

export default Our__team;
