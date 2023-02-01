/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slides = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('./data/slide.json')
      .then(res => res.json())
      .then(data => setSlides(data));
  }, []);

  return (
    <div className="container">
      <div>
        <Slider {...settings} className="slider">
          {slides.map(slide => (
            <div className="slideContainer" key={slide.id}>
              <a href={slide.link} alt="link">
                <img src={slide.image} alt="image" className="slideImage" />
              </a>
              <div className="titleContainer">
                <h4>{slide.title}</h4>
                <button className="voteBtn">{slide.vote}</button>
              </div>
              <p>{slide.date}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slides;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0px',
  autoplay: true,
  arrow: false,
};
