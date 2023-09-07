import React from 'react';
import './Mypageposter.css';

function mypagePoster({ posterInfo}) {
  const { title, location, date, imageUrl } = posterInfo;

  return (
    <div className="mypage_poster_wrap">
      <img className="poster_img" src={imageUrl} alt="" />
      <div className="poster_detail">
        <h2 className="title">{title}</h2>
        <h3 className="location">{location}</h3>
        <h3 className="date">{date}</h3>
      </div>
    </div>
  );
}

export default mypagePoster;

// function mypagePoster({ posterInfo}) {
//   const { openFestivalTitle, location, openFestivalDate, imageUrl } = posterInfo;

//   return (
//     <div className="mypage_poster_wrap">
//       <img className="poster_img" src={imageUrl} alt="" />
//       <div className="poster_detail">
//         <h2 className="openFestivalTitle">{openFestivalTitle}</h2>
//         <h3 className="location">{location}</h3>
//         <h3 className="openFestivalDate">{openFestivalDate}</h3>
//       </div>
//     </div>
//   );
// }

// export default mypagePoster;