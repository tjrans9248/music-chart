import React from 'react';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <h5>
          <a href="#">개인정보처리방침</a> <span>|</span>{' '}
          <a href="#">오시는길</a> &#38; <a href="#">제휴 제안</a>
        </h5>
        <div className="footerLetter">
          Copyright 2021 © HANTEO GLOBAL, INC.
          <br />
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
