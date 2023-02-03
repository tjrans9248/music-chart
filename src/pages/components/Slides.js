/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Slides = () => {
  const [slides, setSlides] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('./data/slide.json');
      setSlides(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleVote = () => {
    alert('현재 투표 기간이 아닙니다.');
  };
  return (
    <div className="container">
      <div className="test">
        <Slider {...settings} className="slider">
          {slides.map(slide => (
            <div className="slideContainer" key={slide.id}>
              <a href={slide.link} alt="link">
                <img src={slide.image} alt="image" className="slideImage" />
              </a>
              <div className="ongoing">{slide.onGoing}</div>
              <div className="titleContainer">
                <h4>{slide.title}</h4>
                <button className="voteBtn" onClick={handleVote}>
                  투표하기
                </button>
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
