//포스터 내용
import React from 'react';

function Poster({ posterInfo}) {
  const { postertxt, concertName, place, date, imageUrl } = posterInfo;

  return (
    <div className="poster-wrap">
      <img className="poster-img" src={imageUrl} alt="" />
      <h1 className="postertxt">{postertxt}</h1>
      <div className="poster-detail">
        <h2 className="concertName">{concertName}</h2>
        <h3 className="place">{place}</h3>
        <h3 className="date">{date}</h3>
      </div>
    </div>
  );
}

export default Poster;
