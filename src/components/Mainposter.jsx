import React from 'react';
import './Mainposter.css';

function mainPoster({ posterInfo}) {
  const { concertName, place, date, imageUrl } = posterInfo;

  return (
    <div className="poster_wrap">
      <img className="poster_img" src={imageUrl} alt="" />
      <div className="poster_detail">
        <h2 className="concertName">{concertName}</h2>
        <h3 className="place">{place}</h3>
        <h3 className="date">{date}</h3>
      </div>
    </div>
  );
}

export default mainPoster;