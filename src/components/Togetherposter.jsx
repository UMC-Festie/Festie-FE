import React from 'react';
import './Togetherposter.css';

function togetherPoster({ posterInfo}) {
  const { togetherTitle, togetherNickname, togetherDate, imageUrl } = posterInfo;

  return (
    <div className="poster_wrap">
      <img className="poster_img" src={imageUrl} alt="" />
      <div className="poster_detail">
        <h2 className="togetherTitle">{togetherTitle}</h2>
        <h3 className="togetherNickname">{togetherNickname}</h3>
        <h3 className="togetherDate">{togetherDate}</h3>
      </div>
    </div>
  );
}

export default togetherPoster;