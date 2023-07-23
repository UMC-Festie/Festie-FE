import React, { useState, useEffect } from 'react';
import './Sharing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Poster from './Poster';
import './index.css';

function ConcertMain() {
  const [showCategoriesBtn, setShowCategoriesBtn] = useState(true);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [categoryButtons, setCategoryButtons] = useState([]);
  const [areaButtons, setAreaButtons] = useState([]);
  const [periodButtons, setPeriodButtons] = useState([]);
  const [activeButton, setActiveButton] = useState('');
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => { // 공연 공유 버튼
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
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

  const handleCategoryClick = () => {
    setShowCategoriesBtn(false);
    setCategoryButtons(["뮤지컬", "연극", "콘서트", "클래식", "가족/아동", "뮤직페스티벌", "공연제"]);
    setAreaButtons([]);
    setPeriodButtons([]);
    setActiveButton('category');
  };

  const handleAreaClick = () => {
    setShowCategoriesBtn(true);
    setCategoryButtons([]);
    setAreaButtons(["서울", "경기", "인천", "대전", "대구", "광주", "부산", "울산", "세종", "충청", "경상", "전라", "강원", "제주"]);
    setPeriodButtons([]);
    setActiveButton('area');
  };

  const handlePeriodClick = () => {
    setShowCategoriesBtn(false);
    setCategoryButtons([]);
    setAreaButtons([]);
    setPeriodButtons(["공연중", "공연예정", "공연종료"]);
    setActiveButton('period');
  };

  const handleCategoryBtnClick = (button) => {
    if (!selectedButtons.includes(button)) {
      setSelectedButtons([...selectedButtons, button]);
    }
  };

  const handleResetClick = () => {
    setSelectedButtons([]);
  };

  const handleRemoveButtonClick = (button) => {
    const updatedButtons = selectedButtons.filter((selectedButton) => selectedButton !== button);
    setSelectedButtons(updatedButtons);
  };

  const CategoryButton = ({ button, isSelected, onClick }) => (
    <h1
      className={`category ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {button}
    </h1>
  );
  /*const backendData = {
    postertxt: 'D-day',
    concertName: '제목',
    place: '장소',
    date: '날짜',
    img: '이미지 URL',
  };*/

  const [posterInfo, setPosterInfo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1') // JSONPlaceholder API에서 데이터 가져오기
      .then((response) => response.json())
      .then((data) => {
        // 가져온 데이터를 가공하여 posterInfo 상태 업데이트
        const { userId } = data;
        setPosterInfo({
          postertxt: 'Day',
          concertName: `Concert by User ${userId}`,
          place: 'Virtual Concert Hall',
          date: '2023-07-29',
          imageUrl: 'http://tkfile.yes24.com/upload2/perfblog/202306/20230607/20230607-46113.jpg/dims/quality/70/', // 이미지 URL 추가
        });
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  if (!posterInfo) {
    return <div>Loading...</div>;
  }

  const OPTIONS = [
    { value: "최신순", name: "최신순" },
    { value: "오래된순", name: "오래된순" },
    { value: "조회많은순", name: "조회많은순" },
    { value: "조회적은순", name: "조회적은순" },
    { value: "좋아요많은순", name: "좋아요많은순" },
    { value: "좋아요적은순", name: "좋아요적은순" },
  ];

  const SelectBox = (props) => (
    <select>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );

  return (
    <div className="contents">
      <div className="tops">
        <h1>HEADER</h1>
      </div>
      <div className="breadcrumb">
        <span>홈</span> &gt; <span>정보보기</span> &gt; <span>공연</span>
      </div>
      <div className="banner">
        <img className="default-image" src="default-image.png" alt="" />
        <h1 className="banner-txt">공연 정보 공유(BESTIE끼리 공유하는 공연 정보)</h1>
        <h2 className="banner-txt">Festie가 소개하는 공연 정보에 내가 좋아하는 아티스트의 공연이  없었나요? 그렇다면 BESTIE들에게 직접 소개해보세요!</h2>
        <button className="breadcrumb-button">
          Bestie들에게 알려주러 가기
          <span className="arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
      <div className="categories">
        <CategoryButton
          button="카테고리"
          isSelected={activeButton === 'category'}
          onClick={handleCategoryClick}
        />
        <CategoryButton
          button="지역"
          isSelected={activeButton === 'area'}
          onClick={handleAreaClick}
        />
        <CategoryButton
          button="기간"
          isSelected={activeButton === 'period'}
          onClick={handlePeriodClick}
        />
      </div>
      {showCategoriesBtn && activeButton === 'area' && (
        <div className="categories-btn">
          {areaButtons.map((button, index) => (
            <button key={index} className="category-btn" onClick={() => handleCategoryBtnClick(button)}>
              {button}
            </button>
          ))}
        </div>
      )}
      {!showCategoriesBtn && activeButton === 'category' && (
        <div className="categories-btn">
          {categoryButtons.map((button, index) => (
            <button key={index} className="category-btn" onClick={() => handleCategoryBtnClick(button)}>
              {button}
            </button>
          ))}
        </div>
      )}
      {!showCategoriesBtn && activeButton === 'period' && (
        <div className="categories-btn">
          {periodButtons.map((button, index) => (
            <button key={index} className="category-btn" onClick={() => handleCategoryBtnClick(button)}>
              {button}
            </button>
          ))}
        </div>
      )}
      <div className="reset">
        <button onClick={handleResetClick} className="reset-button">
          <FontAwesomeIcon icon={faUndoAlt} className="reset-icon" />
          초기화
        </button>
        {selectedButtons.map((button, index) => (
          <button
            key={index}
            className="selected-button"
            onClick={() => handleRemoveButtonClick(button)}
          >
            {button} X
          </button>
        ))}
      </div>
      <div className="serch">
        <h1>검색결과</h1>
        <h2>180건</h2>
        <div className="serch-box">
          <SelectBox options={OPTIONS} className="custom-select" />
        </div>
      </div>
      <div className="poster">
        <button
          className={BtnStatus ? "topBtn active" : "topBtn"}
          onClick={() => {
            handleTop();
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} className="fa-icon" />
        </button>
        {showButton && (
          <button className="addBtn">
            <FontAwesomeIcon icon={faPlus} />
            {' '}
            새로운 공연 공유
          </button>
        )}
        <div className="poster-wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {posterInfo && <Poster posterInfo={posterInfo} />}
          {posterInfo && <Poster posterInfo={posterInfo} />}
          {posterInfo && <Poster posterInfo={posterInfo} />}
          {posterInfo && <Poster posterInfo={posterInfo} />}
          {posterInfo && <Poster posterInfo={posterInfo} />}
          {posterInfo && <Poster posterInfo={posterInfo} />}
          {posterInfo && <Poster posterInfo={posterInfo} />}
          {posterInfo && <Poster posterInfo={posterInfo} />}

        </div>
      </div>
      <div className="footer">
        <h1>FOOTER</h1>
      </div>
    </div>
  );
}

export default ConcertMain;
