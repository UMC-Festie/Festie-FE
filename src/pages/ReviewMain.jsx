//정보 공유_후기 메인페이지
import React, { useState, useEffect } from "react";
import { ReviewCard, dummyReviews } from "../components/ReviewCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import image5 from '../assets/image5.png';
import './ReviewMain.css';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const navigate = useNavigate();
  // 메인 페이지에서 보여줄 후기 데이터를 저장하는 상태 변수입니다.
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]); // 모든 후기 데이터를 관리하는 상태 변수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호를 상태 변수로 관리
  const [activeButton, setActiveButton] = useState(1); // 활성화된 버튼의 상태를 관리하는 상태 변수
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
  useEffect(() => {
    // 페이지가 로드될 때 모든 후기 데이터를 가져옵니다.
    setAllReviews(dummyReviews);
  }, []);

  useEffect(() => {
    // 현재 페이지 번호에 해당하는 데이터를 가져옵니다.
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    setReviews(allReviews.slice(startIndex, endIndex));
  }, [allReviews, currentPage]);

  // 전체 페이지 개수를 계산하는 함수
  const getTotalPages = () => {
    return Math.ceil(allReviews.length / 10);
  };

  // 특정 페이지로 이동하는 함수
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-page">
      <div className="breadcrumb">
        <span>홈</span> &gt; <span>정보공유</span> &gt; <span>후기</span>
      </div>
      <div className="banner2">
        <img src={image5} alt="이미지 5" />
        <h1 className="banner-txt">Festie 후기 공유</h1>
        <h2 className="banner-txt">좋았던, 혹은 Bestie들에게 공유하고 싶은 공연 및 축제 후기가 있나요? 그렇다면 Bestie들에게 소개해주세요!</h2>
        <button className="breadcrumb-button" onClick={()=>navigate('/share/review/write')}>
          내 후기 작성하기
          <span className="arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
      <div className="selectbtn">
        <SelectBox options={OPTIONS} />
      </div>
      <div className="main-pagetxt">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <button
        className={BtnStatus ? "topBtn active" : "topBtn"}
        onClick={() => {
          handleTop();
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} className="fa-icon" />
      </button>
      {showButton && (
        <button className="addBtn2" onClick={()=>navigate('/share/review/write')}>
          <FontAwesomeIcon icon={faPlus} />
          {' '}
          후기 작성하기
        </button>
      )}
      <div className="page-btn">
        {/* 처음 페이지로 이동하는 버튼 */}
        <button
          onClick={() => goToPage(1)}
          className={activeButton === 1 ? "active" : ""}
          disabled={currentPage === 1} // Disable when already on the first page
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.16667 14.1663L5 9.99967L9.16667 5.83301" stroke="#555555" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0007 14.1663L10.834 9.99967L15.0007 5.83301" stroke="#555555" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="btn-text">첫 페이지</span>
        </button>

        {/* 페이지 번호를 나타내는 버튼들 */}
        {Array.from({ length: getTotalPages() }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToPage(index + 1);
              setActiveButton(index + 1); // 클릭한 버튼으로 활성화 상태 업데이트
            }}
            className={activeButton === index + 1 ? "active" : ""}
            disabled={currentPage === index + 1}
          >
            <span className="btn-text">{index + 1}</span>
          </button>
        ))}

        {/* 마지막 페이지로 이동하는 버튼 */}
        <button
          onClick={() => goToPage(getTotalPages())}
          className={activeButton === getTotalPages() ? "active" : ""}
          disabled={currentPage === getTotalPages()} // Disable when already on the last page
        >
          <span className="btn-text">끝 페이지</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.834 14.1663L15.0007 9.99967L10.834 5.83301" stroke="#555555" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 14.1663L9.16667 9.99967L5 5.83301" stroke="#555555" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
