import React, { useState, useEffect } from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import background from '../assets/main_banner.png';
import background from '../assets/main_background.png';
import hand from '../assets/main_hand.png';
import curve from '../assets/Vector_7071.png';
import curvetop from '../assets/Vector_7072.png';
import comingsoon from '../assets/main_comingsoon.svg';
import together from '../assets/main_together.svg';
import arrowright from '../assets/arrow_right.svg';
import MainPoster from '../components/Mainposter';
import TogetherPoster from '../components/Togetherposter';
import soonposterImage from '../assets/poster_1.png';
import togetherposterImage from '../assets/poster_6.png';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Main() {
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const navigate = useNavigate();



  axios.get(`${PROXY}/api/home?festivalType=1&togetherType=1`)
  .then((Response) => {
      console.log(Response); 
  })
  .catch((Error) => {
      console.log(Error);
  });

    const [selectedSoon, setSelectedSoon] = useState('축제');
    const handleSoonClick = (Soon) => {
        setSelectedSoon(Soon);
    };

    const [selectedTogether, setSelectedTogether] = useState('얼마 남지 않은');
    const handleTogetherClick = (Together) => {
        setSelectedTogether(Together);
    };

    const bannerStyles = {
        position: "absolute",
        objectFit: "cover",
        backgroundImg: "url('../components/main_background.png')", // 배너 배경색
      };

      const handimgStyles = {
        position: "absolute",
        top: "69px",
        left: "722px",
      };

      const curveimgStyles = {
        position: "absolute",
        top: "0px",
        left: "-90px",
      };

      const curvetopimgStyles = {
        position: "absolute",
        top: "247px",
        left: "757.1px",
      };

      const textmainStyles = {
        position: "absolute",
        top: "70px",
        left: "70px",
        color: "white",
        fontSize: "48px",
      };     

      const textStyles = {
        position: "absolute",
        top: "221px",
        left: "70px",
        color: "white",
        fontSize: "16px",
      };      

      const btnStyles = {
        position: "absolute",
        top: "327px",
        left: "70px",
        color: "white",
        fontSize: "20px",
      };   

      const [posterInfo, setPosterInfo] = useState(null);
      const [posterInfo1, setPosterInfo1] = useState(null);
      const [posterInfo2, setPosterInfo2] = useState(null);
      const [posterInfo3, setPosterInfo3] = useState(null);
      const [posterInfo4, setPosterInfo4] = useState(null);
      const [togetherInfo, setTogetherInfo] = useState(null);
      const [togetherInfo1, setTogetherInfo1] = useState(null);
      const [togetherInfo2, setTogetherInfo2] = useState(null);
      const [togetherInfo3, setTogetherInfo3] = useState(null);
      const [togetherInfo4, setTogetherInfo4] = useState(null);


      useEffect(() => {
        // Fetch festival and together data from the API
        axios.get(`${PROXY}/api/home?festivalType=1&togetherType=0`)
          .then((response) => {
            const festivalList = response.data.festivalList;
            const togetherList = response.data.togetherList;
          
            //축제 항목
            if (festivalList.length >= 1) {
              const festival1 = festivalList[0];
              setPosterInfo1({
                status: festival1.status,
                concertName: festival1.title,
                place: festival1.location,
                date: `${festival1.startDate} - ${festival1.endDate}`,
                imageUrl: festival1.thumbnailUrl,
              });
            }
            if (festivalList.length >= 2) {
              const festival2 = festivalList[1];
              setPosterInfo2({
                concertName: festival2.title,
                place: festival2.location,
                date: `${festival2.startDate} - ${festival2.endDate}`,
                imageUrl: festival2.thumbnailUrl,
              });
            }
            if (festivalList.length >= 3) {
              const festival3 = festivalList[2];
              setPosterInfo3({
                concertName: festival3.title,
                place: festival3.location,
                date: `${festival3.startDate} - ${festival3.endDate}`,
                imageUrl: festival3.thumbnailUrl,
              });
            }
            if (festivalList.length >= 4) {
              const festival4 = festivalList[3];
              setPosterInfo4({
                concertName: festival4.title,
                place: festival4.location,
                date: `${festival4.startDate} - ${festival4.endDate}`,
                imageUrl: festival4.thumbnailUrl,
              });
            }
            
            //같이가요 항목
            if (togetherList.length >= 1) {
              const together1 = togetherList[0];
              setTogetherInfo1({
                togetherTitle: together1.title,
                togetherNickname: together1.nickname,
                togetherDate: together1.togetherDate,
                imageUrl: together1.thumbnailUrl, // 이미지 URL 필드를 확인
              });
            }
            if (festivalList.length >= 2) {
              const together2 = togetherList[1];
              setTogetherInfo2({
                togetherTitle: together2.title,
                togetherNickname: together2.nickname,
                togetherDate: together2.togetherDate,
                imageUrl: together2.thumbnailUrl, // 이미지 URL 필드를 확인
              });
            }
            if (festivalList.length >= 3) {
              const together3 = togetherList[2];
              setTogetherInfo3({
                togetherTitle: together3.title,
                togetherNickname: together3.nickname,
                togetherDate: together3.togetherDate,
                imageUrl: together3.thumbnailUrl, // 이미지 URL 필드를 확인
              });
            }
            if (festivalList.length >= 4) {
              const together4 = togetherList[3];
              setTogetherInfo4({
                togetherTitle: together4.title,
                togetherNickname: together4.nickname,
                togetherDate: together4.togetherDate,
                imageUrl: together4.thumbnailUrl, // 이미지 URL 필드를 확인
              });
            }
          })
          .catch((error) => {
            console.log('Error fetching data:', error);
          });
      }, []);

      const handleScrollToTop = () => {
        // window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
        window.scrollTo(0, 0); // 스크롤을 최상단으로 이동 (애니메이션 없음)
      };

      const [ScrollY, setScrollY] = useState(0);
      const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

      const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if (ScrollY > 150) {
          setBtnStatus(true);
        } else {
          setBtnStatus(false);
        }
      }
    
      const handleTop = () => { 
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setScrollY(0);
        setBtnStatus(false);
      }

      useEffect(() => {
        const watch = () => {
          window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => {
          window.removeEventListener('scroll', handleFollow)
        }
      })
    
    return (
        <div>
            <div className='mainBanner'>
                <div style={bannerStyles}>
                    <img src={background} alt="Banner Image"/>
                    <img src={curve} style={curveimgStyles}/>
                    <img src={hand} style={handimgStyles}/>
                    <img src={curvetop} style={curvetopimgStyles}/>
                    <p className="mainText" style={textmainStyles}>축제도 보고, <br/> 친구도 사귀고!</p>
                    <p className="mainsecondText" style={textStyles}>나와 취향이 맞는 친구도 사귀고, 페스티벌 정보도 공유하고! <br/> 나의 취향과 추억 그리고 정보를 ‘공유’해요</p>
                    <div className="startBtn" style={btnStyles} onClick={() => {
                      navigate('/login');
                      handleScrollToTop();
                    }}>
                      시작하기<img src={arrowright} alt="Arrow Right" />
                    </div>
                </div>
                <img src={background}/>
            </div>
            <button
              className={BtnStatus ? "topBtn active" : "topBtn"}
              onClick={() => {
                handleTop();
              }}
            >
              <FontAwesomeIcon icon={faArrowUp} className="fa-icon" />
            </button>
            <div className='main'>
                <div className='comingsoonImg'>
                    <img src={comingsoon}/>
                </div>
                <p className="comingsoonText">곧 다가와요</p>
                <span
                    className={`soonBtn ${selectedSoon === '축제' ? 'clicked' : ''}`}
                    style={{ marginLeft: '580px' }}
                    onClick={() => handleSoonClick('축제')}
                >
                    축제
                </span>
                <span
                    className={`soonBtn ${selectedSoon === '공연' ? 'clicked' : ''}`}
                    style={{ marginLeft: '8px' }}
                    onClick={() => handleSoonClick('공연')}
                >
                    공연
                </span>
                {selectedSoon === '축제' && (
                  <div className="main_posterwrap">
                    {posterInfo1 && <MainPoster posterInfo={posterInfo1} className="PosterSize" />}
                    {posterInfo2 && <MainPoster posterInfo={posterInfo2} className="PosterSize" />}
                    {posterInfo3 && <MainPoster posterInfo={posterInfo3} className="PosterSize" />}
                    {posterInfo4 && <MainPoster posterInfo={posterInfo4} className="PosterSize" />}
                  </div>
                )}
                {selectedSoon === '공연' && (
                  <div className="main_posterwrap">
                    {posterInfo1 && <MainPoster posterInfo={posterInfo1} className="PosterSize" />}
                    {posterInfo2 && <MainPoster posterInfo={posterInfo2} className="PosterSize" />}
                    {posterInfo3 && <MainPoster posterInfo={posterInfo3} className="PosterSize" />}
                    {posterInfo4 && <MainPoster posterInfo={posterInfo4} className="PosterSize" />}
                  </div>
                )}
                <NavLink to="/view/performance" style={{ textDecoration: "none" }}>
                  <div className="togoinfoBtn" onClick={handleScrollToTop}>공연정보 더 보러가기<img src={arrowright}/></div>
                </NavLink>
                <div className='togetherImg'>
                    <img src={together}/>
                </div>
                <p className="togetherText">같이가요</p>
                <span
                    className={`maintogetherBtn ${selectedTogether === '얼마 남지 않은' ? 'clicked' : ''}`}
                    style={{ width: '92px', marginLeft: '540px' }}
                    onClick={() => handleTogetherClick('얼마 남지 않은')}
                >
                    얼마 남지 않은
                </span>
                <span
                    className={`maintogetherBtn ${selectedTogether === '새로운' ? 'clicked' : ''}`}
                    style={{ marginLeft: '8px' }}
                    onClick={() => handleTogetherClick('새로운')}
                >
                    새로운
                </span>
                {selectedTogether === '얼마 남지 않은' && (
                  <div className="main_posterwrap">
                  {togetherInfo1 && <TogetherPoster posterInfo={togetherInfo1} className="PosterSize"/>}
                  {togetherInfo2 && <TogetherPoster posterInfo={togetherInfo2} className="PosterSize"/>}
                  {togetherInfo3 && <TogetherPoster posterInfo={togetherInfo3} className="PosterSize"/>}
                  {togetherInfo4 && <TogetherPoster posterInfo={togetherInfo4} className="PosterSize"/>}
                  </div>
                )}
                {selectedTogether === '새로운' && (
                  <div className="main_posterwrap">
                  {togetherInfo1 && <TogetherPoster posterInfo={togetherInfo1} className="PosterSize"/>}
                  {togetherInfo2 && <TogetherPoster posterInfo={togetherInfo2} className="PosterSize"/>}
                  {togetherInfo3 && <TogetherPoster posterInfo={togetherInfo3} className="PosterSize"/>}
                  {togetherInfo4 && <TogetherPoster posterInfo={togetherInfo4} className="PosterSize"/>}
                  </div>
                )}
                <NavLink to="/together" style={{ textDecoration: "none" }}>
                <div className="togotogetherBtn" onClick={handleScrollToTop}>같이가요 더 보러가기<img src={arrowright}/></div>
                </NavLink>
            </div>
        </div>
    )
}