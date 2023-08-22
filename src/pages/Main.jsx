import React, { useState, useEffect } from 'react';
import './Main.css';
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

export default function Main() {
    const [selectedSoon, setSelectedSoon] = useState('공연');
    const handleSoonClick = (Soon) => {
        setSelectedSoon(Soon);
    };

    const [selectedTogether, setSelectedTogether] = useState('새로운');
    const handleTogetherClick = (Together) => {
        setSelectedTogether(Together);
    };

    const bannerStyles = {
        position: "absolute",
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
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then((response) => response.json())
          .then((data) => {
            //posterInfo 상태 업데이트
            const { userId } = data;
            setPosterInfo({
              concertName: '뮤지컬 <보이A>',
            //   concertName: `Concert by User ${userId}`,
              place: '예사스테이지 3관',
              date: '2023.5.30 - 2023.8.20',
              imageUrl: soonposterImage,
            });
            // setPosterInfo({
            //     concertName: '가족음악극 `슈베르트와 장미요...',
            //   //   concertName: `Concert by User ${userId}`,
            //     place: '세종문화회관 체임버홀',
            //     date: '2023.5.30 - 2023.8.20',
            //     imageUrl: posterImage,
            //   });
          })
          .catch((error) => {
            console.log('Error fetching data:', error);
          });
      }, []);

      const [togetherInfo, setTogetherInfo] = useState(null);
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then((response) => response.json())
          .then((data) => {
            //togetherInfo 상태 업데이트
            const { userId } = data;
            setTogetherInfo({
              togetherTitle: '펍크롤링투어 2일차 함께 가실 분',
            //   concertName: `Concert by User ${userId}`,
              togetherNickname: '덕구',
              togetherDate: '2023.5.30',
              imageUrl: togetherposterImage,
            });
          })
          .catch((error) => {
            console.log('Error fetching data:', error);
          });
      }, []);
    
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
                    <div className="startBtn" style={btnStyles}>시작하기<img src={arrowright}/></div>
                </div>
                <img src={background}/>
                {/* <p className="mainText">축제도 보고, <br/> 친구도 사귀고!</p>
                <p className="mainsecondText">나와 취향이 맞는 친구도 사귀고, 페스티벌 정보도 공유하고! <br/> 나의 취향과 추억 그리고 정보를 ‘공유’해요</p>
                <div className="startBtn">시작하기<img src={arrowright}/></div> */}
            </div>
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
                <div className="main_posterwrap" style={{ display: 'flex', height:'442px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {posterInfo && <MainPoster posterInfo={posterInfo} />}
                    {posterInfo && <MainPoster posterInfo={posterInfo} />}
                    {posterInfo && <MainPoster posterInfo={posterInfo} />}
                    {posterInfo && <MainPoster posterInfo={posterInfo} />}
                </div>
                <div className="togoinfoBtn">공연정보 더 보러가기<img src={arrowright}/></div>
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
                <div className="main_posterwrap" style={{ display: 'flex', height:'442px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {togetherInfo && <TogetherPoster posterInfo={togetherInfo} />}
                    {togetherInfo && <TogetherPoster posterInfo={togetherInfo} />}
                    {togetherInfo && <TogetherPoster posterInfo={togetherInfo} />}
                    {togetherInfo && <TogetherPoster posterInfo={togetherInfo} />}
                </div>
                <div className="togotogetherBtn">같이가요 더 보러가기<img src={arrowright}/></div>
            </div>
        </div>
    )
}
