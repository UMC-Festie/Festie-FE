//등록된 정보 보기_축제 메인페이지
import React, { useState, useEffect } from 'react';
import './Contents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import image3 from '../assets/image3.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

axios
  .get(`${PROXY}/api/base/festival?page=0`)
  .then((response) => {
    const data = response.data.data; // "data" 변수에 데이터 배열을 할당
    const thumbnailUrls = data.map((item) => item.thumbnailUrl); // 각 데이터 아이템의 thumbnailUrl 추출
    console.log(response.data);
  })
  .catch((Error) => {
    console.log(Error);
  });

function ConcertMain() {
  const navigate = useNavigate();
  const [showCategoriesBtn, setShowCategoriesBtn] = useState(true); 
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [categoryButtons, setCategoryButtons] = useState([]);
  const [areaButtons, setAreaButtons] = useState([]);
  const [periodButtons, setPeriodButtons] = useState([]);
  const [activeButton, setActiveButton] = useState('');
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  // 검색 결과 개수를 담는 상태
  const [searchResultCount, setSearchResultCount] = useState(0);
  
  const [filteredPosters, setFilteredPosters] = useState([]);
  const [searchButtonActive, setSearchButtonActive] = useState(false); // "조회하기" 버튼 클릭 상태를 관리
  const [selectedCategoryButton, setSelectedCategoryButton] = useState('');
  const [selectedCategoryButtons, setSelectedCategoryButtons] = useState([]);

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
  const handleSearchButtonClick = async () => {
    setSearchButtonActive(true);
    setSearchButtonActive(!searchButtonActive);
    setSelectedCategoryButtons([]);    // 필터링 조건 객체 생성
    const filterParams = {
      page: 0,
      category: '대중음악',
      region: '서울',
      status: '모집중',
      sortBy: 'LATEST'
    };
  
    // 필터링 조건 객체를 쿼리 파라미터 문자열로 변환
    const queryString = Object.keys(filterParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filterParams[key])}`)
      .join('&');
  
    // API 엔드포인트
    const apiEndpoint = '백엔드_API_URL';
  
    try {
      // 필터링된 데이터를 백엔드로 전송하고 응답 받기
      const response = await fetch(`${apiEndpoint}/filter?${queryString}`);
      if (response.ok) {
        const data = await response.json();
        // 받아온 데이터를 활용하여 필요한 처리를 수행
        console.log('Filtered data:', data);
      } else {
        console.error('Error fetching data from the server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleCategoryClick = () => {
    setShowCategoriesBtn(false);
    setCategoryButtons(["바다", "여름먹거리", "연꽃", "토마토", "장미", "문화예술", "여름꽃"]);
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
    setPeriodButtons(["행사중", "행사예정", "행사종료"]);
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

  const [names, setNames] = useState([]); // 제목 데이터를 담을 상태 변수
  const [locations, setLocation] = useState([]); // 장소 데이터를 담을 상태 변수
  const [startDates, setStartDate] = useState([]); // 시작날짜 데이터를 담을 상태 변수
  const [endDates, setEndDate] = useState([]); // 끝나는날짜 데이터를 담을 상태 변수
  const [profiles, setProfile] = useState([]);
  const [festivalIds, setFestivalIds] = useState([]);
  const [durations, setDuration] = useState([]);

  useEffect(() => {
    const backendApiUrl = `${PROXY}/api/base/festival?page=0`;

    axios
      .get(backendApiUrl)
      .then((response) => {
        const data = response.data.data;
        const extractedUrls = data.map((item) => item.profile);
        setProfile(extractedUrls);
    
        const names = data.map((item) => item.name);
        const locations = data.map((item) => item.location);
        const startDates = data.map((item) => item.startDate);
        const endDates = data.map((item) => item.endDate);
        const festivalIds = data.map((item) => item.festivalId);
        const durations = data.map((item) => item.duration);

        // 추출한 데이터를 상태로 설정
        setNames(names);
        setLocation(locations);
        setStartDate(startDates);
        setEndDate(endDates);
        setFestivalIds(festivalIds);
        setDuration(durations);
      })
      .catch((error) => {
        console.log('데이터 가져오기 오류:', error);
      });
  }, []);
  const [selectedOption, setSelectedOption] = useState(""); // 선택된 옵션을 저장하는 상태
  const handleOptionChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // 필터링 조건 객체 생성
    const filterParams = {
      page: 0,
      type: '공연',
      // ... (다른 필터링 조건 추가)
      sortBy: selectedValue  // 선택한 값을 sortBy 필터로 설정
    };

    // 필터링 조건 객체를 쿼리 파라미터 문자열로 변환
    const queryString = Object.keys(filterParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filterParams[key])}`)
      .join('&');

    const apiEndpoint = '백엔드_API_URL';

    try {
      const response = await fetch(`${apiEndpoint}/filter?${queryString}`);
      if (response.ok) {
        const data = await response.json();
        setFilteredPosters(data); // 필터링된 데이터 설정
      } else {
        console.error('Error fetching data from the server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
  // API로부터 검색 결과 개수를 받아오는 함수
  const fetchSearchResultCount = () => {
    // 이 부분에서 실제 API 호출을 하고 검색 결과 개수를 받아온다고 가정합니다.
    // API를 호출하는 코드는 해당 프로젝트에서 사용하는 API 형태에 맞게 작성해야 합니다.
    // 여기에서는 임시로 180을 반환하도록 하겠습니다.
    return 180;
  };

  useEffect(() => {
    const resultCount = fetchSearchResultCount();
    setSearchResultCount(resultCount);
  }, []);

  return (
    <div className="contents">
      <div className="breadcrumb">
        <span>홈</span> &gt; <span>정보보기</span> &gt; <span>축제</span>
      </div>
      <div className="banner1">
        <img src={image3} alt="이미지 3" />
        <h1 className="banner-txt">축제 정보 보기(Festie가 제공하는 축제 정보)</h1>
        <h2 className="banner-txt">Festie가 알려주는 국내 곳곳의 축제 정보를 구경해보세요.</h2>
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
          {/* 지역 버튼에 해당하는 하위 버튼들을 보여줍니다. */}
          {areaButtons.map((button, index) => (
            <button
            key={index}
            className={`category-btn1 ${selectedButtons.includes(button) ? 'selected' : ''} ${searchButtonActive && activeButton === 'area' && selectedButtons.includes(button) ? 'active' : ''}`}
            onClick={() => handleCategoryBtnClick(button)}
          >
            {button}
          </button>
          ))}
        </div>
      )}

      {!showCategoriesBtn && activeButton === 'category' && (
        <div className="categories-btn">
          {/* 카테고리 버튼에 해당하는 하위 버튼들을 보여줍니다. */}
          {categoryButtons.map((button, index) => (
            <button
            key={index}
            className={`category-btn1 ${selectedButtons.includes(button) ? 'selected' : ''} ${searchButtonActive && activeButton === 'category' && selectedButtons.includes(button) ? 'active' : ''}`}
            onClick={() => handleCategoryBtnClick(button)}
          >
            {button}
          </button>          
          ))}
        </div>
      )}

      {!showCategoriesBtn && activeButton === 'period' && (
        <div className="categories-btn">
          {/* 기간 버튼에 해당하는 하위 버튼들을 보여줍니다. */}
          {periodButtons.map((button, index) => (
            <button
            key={index}
            className={`category-btn1 ${selectedButtons.includes(button) ? 'selected' : ''} ${searchButtonActive && activeButton === 'period' && selectedButtons.includes(button) ? 'active' : ''}`}
            onClick={() => handleCategoryBtnClick(button)}
          >
            {button}
          </button>          
          ))}
        </div>
      )}

      <div className="reset">
        {/* "조회하기" 버튼 */}
        <button
          className={`search-button1 ${searchButtonActive ? 'active' : ''}`}
          onClick={handleSearchButtonClick}
        > {searchButtonActive ? (
          // 이미지가 변경되었을 때의 SVG 코드
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#3A3A3A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.0006 14.0001L11.1006 11.1001" stroke="#3A3A3A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.0006 14.0001L11.1006 11.1001" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
          </svg>)}
          조회하기
        </button>
        {selectedButtons.map((button, index) => (
          <button
            key={index}
            className={`selected-button1 ${searchButtonActive ? 'active' : ''}`}
            onClick={() => handleRemoveButtonClick(button)}
          >
            {button} X
          </button>
        ))}
        <button onClick={handleResetClick} className="reset-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M15.333 3.1665V7.1665H11.333" stroke="#3A3A3A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.6602 10.5002C13.2269 11.7268 12.4066 12.7793 11.323 13.4992C10.2394 14.219 8.95122 14.5672 7.65253 14.4912C6.35383 14.4153 5.11501 13.9192 4.12275 13.078C3.13048 12.2367 2.43853 11.0957 2.15116 9.82688C1.86378 8.5581 1.99656 7.2303 2.52949 6.04355C3.06241 4.85681 3.9666 3.87541 5.10581 3.24726C6.24502 2.61912 7.55753 2.37824 8.84555 2.56093C10.1336 2.74363 11.3273 3.34 12.2469 4.26017L15.3336 7.16684" stroke="#3A3A3A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          초기화
        </button>
      </div>
      <div className="serch">
        <h1>검색결과</h1>
        <h2>{searchResultCount}건</h2>
        <div className="serch-box">
        <SelectBox options={OPTIONS} value={selectedOption} onChange={handleOptionChange} className="custom-select" />
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
        <div className="poster2">
          {profiles.map((url, index) => (
            <div key={index} className="poster-item" onClick={()=> navigate(`/view/festival/detail/${festivalIds[index]}`)}>
              <img src={url} alt={`Thumbnail ${index}`} className='poster-img'/>
              <div className="poster-info" >
                {/* 여기에 이미지와 관련된 정보 표시*/}
                <p className='postertxt'>{durations[index]}</p>
                <p className='concertName'>{names[index]}</p>
                <p className='place'>{locations[index]}</p>
                <p className='date'>{startDates[index]} - {endDates[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConcertMain;