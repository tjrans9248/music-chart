import React from 'react';

const Content = ({ aContent }) => {
  return (
    <div className="contentContainer">
      <div className="contentWrapper">
        <img src={aContent.imageURL} className="contentLeft" alt="coverImage" />

        <div className="contentRight">{aContent.title}</div>
      </div>
    </div>
  );
};

export default Content;
