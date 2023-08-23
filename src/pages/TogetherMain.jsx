//같이가요 메인페이지
import React, { useState, useEffect } from 'react';
import './Sharing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import image6 from '../assets/image6.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.get('/api/together?page=0')
  .then((Response) => {
    console.log(Response);
  })
  .catch((Error) => {
    console.log(Error);
  });
axios
  .get('/api/together?page=0')
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
  const [typeButtons, setTypeButtons] = useState([]);
  const [activeButton, setActiveButton] = useState('');
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  const [showButton, setShowButton] = useState(false);
  // 검색 결과 개수를 담는 상태
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [filteredPosters, setFilteredPosters] = useState([]);
  const [posters, setPosters] = useState([]);
  const [searchButtonActive, setSearchButtonActive] = useState(false); // "조회하기" 버튼 클릭 상태를 관리
  const [selectedCategoryButton, setSelectedCategoryButton] = useState('');
  const [selectedCategoryButtons, setSelectedCategoryButtons] = useState([]);

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
  const handleSearchButtonClick = async () => {
    setSearchButtonActive(true);
    setSearchButtonActive(!searchButtonActive);
    setSelectedCategoryButtons([]);    // 필터링 조건 객체 생성
    const filterParams = {
      page: 0,
      category: '바다',
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

  const handleTypeClick = () => {
    setShowCategoriesBtn(true);
    setCategoryButtons([]);
    setAreaButtons([]);
    setPeriodButtons([]);
    setTypeButtons(["공연", "축제"]);
    setActiveButton('type');
  };

  const handleCategoryClick = () => {
    setShowCategoriesBtn(false);
    setCategoryButtons(["바다", "여름먹거리", "연꽃", "토마토", "장미", "문화예술", "여름꽃"]);
    setAreaButtons([]);
    setPeriodButtons([]);
    setTypeButtons([]);
    setActiveButton('category');
  };

  const handleAreaClick = () => {
    setShowCategoriesBtn(true);
    setCategoryButtons([]);
    setAreaButtons([
      "서울", "경기", "인천", "대전", "대구", "광주", "부산", "울산", "세종",
      "충청", "경상", "전라", "강원", "제주", "공연", "축제"
    ]);
    setPeriodButtons([]);
    setTypeButtons([]);
    setActiveButton('area');
  };

  const handlePeriodClick = () => {
    setShowCategoriesBtn(false);
    setCategoryButtons([]);
    setAreaButtons([]);
    setPeriodButtons(["모집중", "모집종료"]);
    setTypeButtons([]);
    setActiveButton('period');
  };

  const handleCategoryBtnClick = (button) => {
    if (!selectedButtons.includes(button)) {
      setSelectedButtons([...selectedButtons, button]);
    }
  };

  const handleResetClick = () => {
    setSelectedButtons([]);
    setSearchButtonActive(false);
  };

  const handleRemoveButtonClick = (button) => {
    const updatedButtons = selectedButtons.filter((selectedButton) => selectedButton !== button);
    setSelectedButtons(updatedButtons);
  };

  const CategoryButton = ({ button, isSelected, onClick }) => (
    <h1
      tabIndex="0"
      className={`category ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {button}
    </h1>
  );

  /*const backendData = {
    postertxt: 'D-day',
    concertName: '제목',
    place: '작성자',
    date: '날짜',
    img: '이미지 URL',
  };*/
  //const [status, setStatus] = useState([]); // 축제 상태 데이터를 담을 상태
  const [titles, setTitles] = useState([]); // 축제 제목 데이터를 담을 상태 변수
  const [festivalDates, setFestivalDates] = useState([]); // 축제 날짜 데이터를 담을 상태 변수
  const [nicknames, setNicknames] = useState([]); // 닉네임 데이터를 담을 상태 변수
  const [thumbnailUrls, setThumbnailUrls] = useState([]);
  const [togetherIds, setTogetherIds] = useState([]);

  useEffect(() => {
    const backendApiUrl = '/api/together?page=0';

    axios
      .get(backendApiUrl)
      .then((response) => {
        const data = response.data.data;
        const extractedUrls = data.map((item) => item.thumbnailUrl);
        setThumbnailUrls(extractedUrls);
        // festivalDate와 nickname 추출 및 상태로 저장
        const festivalDates = data.map((item) => item.festivalDate);
        const nicknames = data.map((item) => item.nickname);
        const titles = data.map((item) => item.title);
        const togetherIds = data.map((item) => item.togetherId);

        //const status = data.map((item) => item.status);

        // 추출한 데이터를 상태로 설정
        setFestivalDates(festivalDates);
        setNicknames(nicknames);
        setTitles(titles);
        setTogetherIds(togetherIds);
        //setStatus(status);
      })
      .catch((error) => {
        console.log('데이터 가져오기 오류:', error);
      });
  }, []);
  /* 
   useEffect(() => {
     axios
       .get('https://jsonplaceholder.typicode.com/posts/1')
       .then((response) => {
         const data = response.data;
         const { userId } = data;
         setPosterInfo({
           postertxt: 'Day',
           concertName: `User ${userId}의 공연`,
           place: '가상 콘서트 홀',
           date: '2023-07-29',
           imageUrl: 'http://tkfile.yes24.com/upload2/perfblog/202306/20230607/20230607-46113.jpg/dims/quality/70/',
         });
       })
       .catch((error) => {
         console.log('데이터 가져오기 오류:', error);
       });
   }, []);
   */
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
        <span>홈</span> &gt; <span>같이가요</span>
      </div>
      <div className="banner">
        <img src={image6} alt="이미지 6" />
        <h1 className="banner-txt">같이가요</h1>
        <h2 className="banner-txt">Festie에서 추억과 취향을 공유할 친구를 만들어보세요. 같이 가고 싶은 축제/공연을 찾아보고, Bestie가 되어보세요!</h2>
        <button className="breadcrumb-button" onClick={() => navigate('/together/write')}>
          같이 갈 Bestie 만들기
          <span className="arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
      <div className="categories">
        <CategoryButton
          button="유형"
          isSelected={activeButton === 'type'}
          onClick={handleTypeClick}
        />
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
          button="모집"
          isSelected={activeButton === 'period'}
          onClick={handlePeriodClick}
        />
      </div>
      {showCategoriesBtn && activeButton === 'type' && (
        <div className="categories-btn">
          {/* 유형 버튼에 해당하는 하위 버튼들을 보여줍니다. */}
          {typeButtons.map((button, index) => (
            <button
              key={index}
              className={`category-btn1 ${selectedButtons.includes(button) ? 'selected' : ''} ${searchButtonActive && activeButton === 'type' && selectedButtons.includes(button) ? 'active' : ''}`}
              onClick={() => handleCategoryBtnClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      )}
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
        {showButton && (
          <button className="addBtn" onClick={() => navigate('/together/write')}>
            <FontAwesomeIcon icon={faPlus} />
            {' '}
            같이가요 글쓰기
          </button>
        )}
        <div className="poster2">
          {thumbnailUrls.map((url, index) => (
            <div key={index} className="poster-item" onClick={()=> navigate(`/together/detail/${togetherIds[index]}`)}>
              <img src={url} alt={`Thumbnail ${index}`} className='poster-img'/>
              {/*<p className='postertxt'>{status[index]}</p>*/}
              <div className="poster-info" >
                {/* 여기에 이미지와 관련된 정보 표시 (예: festivalDate, nickname 등) */}
                <p className='concertName'>{titles[index]}</p>
                <p className='place'>{nicknames[index]}</p>
                <p className='date'>{festivalDates[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ConcertMain;
