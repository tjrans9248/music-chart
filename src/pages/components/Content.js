import React from 'react';

const Content = ({ aContent }) => {
  return (
    <div className="contentContainer">
      <div className="contentWrapper">
        <img src={aContent.imageURL} className="contentLeft" alt="coverImage" />

        <div className="contentRight">
          <span>{aContent.title}</span>
          <span className="albumGrade">{aContent.id}</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
