//검색결과
import React, { useState, useEffect } from 'react';
import './Search.css';
import image7 from '../assets/image7.png';
import { ReviewCard, dummyReviews } from "../components/ReviewCard";

function ConcertMain() {
    const [showCategoriesBtn, setShowCategoriesBtn] = useState(true);
    const [entireButtons, setEntireButtons] = useState([]);
    const [festivalButtons, setFestivalButtons] = useState([]);
    const [concertButtons, setConcertButtons] = useState([]);
    const [reviewButtons, setReviewButtons] = useState([]);
    const [ticketButtons, setTicketButtons] = useState([]);
    const [togetherButtons, setTogetherButtons] = useState([]);
    const [activeButton, setActiveButton] = useState('entrie');
    const [showButton, setShowButton] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [reviews, setReviews] = useState([]);

    const processReviewData = (data) => {
      const processedData = data.map((review) => {
        const processedReview = { ...review };
    
        // date 필드가 없는 경우 null로 처리
        if (!processedReview.date) {
          processedReview.date = null;
        }
    
        // viewCount 필드가 없는 경우 null으로 처리
        if (!processedReview.viewCount) {
          processedReview.viewCount = null;
        }
    
        // likeCount 필드가 없는 경우 null으로 처리
        if (!processedReview.likeCount) {
          processedReview.likeCount = null;
        }
    
        return processedReview;
      });
    
      return processedData;
    };
    
     // useEffect를 사용하여 컴포넌트가 마운트되었을 때 백엔드 API 호출
  /*   useEffect(() => {
      // 여기서 실제 백엔드 API 호출 및 데이터를 받아오는 로직을 작성해야 합니다.
      // API 호출 후 받아온 데이터를 setReviews를 사용하여 업데이트합니다.
      // 아래는 가상의 데이터를 설정하는 예시입니다.
      const fetchDataFromBackend = async () => {
        try {
            const response = await fetch("URL_TO_YOUR_BACKEND_API");
            const data = await response.json();
            const processedData = processReviewData(data); // Process the data
            setReviews(processedData); // Update the reviews state
        } catch (error) {
            console.error("Error fetching data from API:", error);
        }
    };
    

      fetchDataFromBackend();
  }, []); // 마운트 시 한 번만 실행되도록 빈 배열 전달
*/

    // 검색 결과 개수를 담는 상태
    const [searchResultCount, setSearchResultCount] = useState(0);
    // 리뷰 타입별 결과 개수를 계산하는 함수
  const countReviewsByType = (type) => {
    return dummyReviews.filter((review) => review.type === type).length;
  };
  // 전체 리뷰 개수를 계산하는 함수
  const countTotalReviews = () => {
    return dummyReviews.length;
  };
    const filteredReviews = () => {
        switch (activeButton) {
          case 'view':
            return dummyReviews.filter((review) => review.type === '정보보기');
          case 'share':
            return dummyReviews.filter((review) => review.type === '정보공유');
          case 'review':
            return dummyReviews.filter((review) => review.type === '후기');
          case 'ticket':
            return dummyReviews.filter((review) => review.type === '티켓팅');
          case 'together':
            return dummyReviews.filter((review) => review.type === '같이가요');
          default:
            return dummyReviews; // '전체' 버튼일 때 모든 리뷰를 보여줍니다.
        }
      };
    
  const handleEntireClick = () => {
    setShowCategoriesBtn(true);
    setEntireButtons([]);
    setFestivalButtons([]);
    setConcertButtons([]);
    setReviewButtons([]);
    setTicketButtons([]);
    setTogetherButtons([]);
    setActiveButton('entire');
  };
  
  const handleFestivalClick = () => {
    setShowCategoriesBtn(false);
    setEntireButtons([]);
    setFestivalButtons([]);
    setConcertButtons([]);
    setReviewButtons([]);
    setTicketButtons([]);
    setTogetherButtons([]);
    setActiveButton('view');
  };
  
  const handleConcertClick = () => {
    setShowCategoriesBtn(true);
    setEntireButtons([]);
    setFestivalButtons([]);    
    setReviewButtons([]);
    setConcertButtons([]);
    setTicketButtons([]);
    setTogetherButtons([]);
    setActiveButton('share');
  };
  const handleReviewClick = () => {
    setShowCategoriesBtn(true);
    setEntireButtons([]);
    setFestivalButtons([]);    
    setReviewButtons([]);
    setConcertButtons([]);
    setTicketButtons([]);
    setTogetherButtons([]);
    setActiveButton('review');
  };
  
  const handleTicketClick = () => {
    setShowCategoriesBtn(false);
    setEntireButtons([]);
    setFestivalButtons([]);
    setReviewButtons([]);
    setConcertButtons([]);
    setTicketButtons([]);
    setTogetherButtons([]);
    setActiveButton('ticket');
  };

  const handleTogetherClick = () => {
    setShowCategoriesBtn(false);
    setEntireButtons([]);
    setFestivalButtons([]);
    setConcertButtons([]);
    setReviewButtons([]);
    setTicketButtons([]);
    setTogetherButtons([]);
    setActiveButton('together');
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
        <span>홈</span> &gt; <span>통합검색</span> &gt; <span>검색결과</span>
      </div>
      <div className="banner3">
      <img src={image7} alt="이미지 7" />
        <h1 className="banner-txt">통합검색</h1>
        <h2 className="banner-txt">현재 진행중인 국내 곳곳의 공연 정보를 조회할 수 있습니다.</h2>
      </div>
      <div className="categories">
        <CategoryButton
            button="전체" 
            isSelected={activeButton === 'entire'}
            onClick={handleEntireClick}
        />
        <CategoryButton
          button="정보보기"
          isSelected={activeButton === 'view'}
          onClick={handleFestivalClick}
        />
        <CategoryButton
          button="정보공유"
          isSelected={activeButton === 'share'}
          onClick={handleConcertClick}
        />
        <CategoryButton
          button="후기"
          isSelected={activeButton === 'review'}
          onClick={handleReviewClick}
        />
        <CategoryButton
          button="티켓팅"
          isSelected={activeButton === 'ticket'}
          onClick={handleTicketClick}
        />
        <CategoryButton
          button="같이가요"
          isSelected={activeButton === 'together'}
          onClick={handleTogetherClick}
        />
      </div>
      <div className="result-container">
        <div className="serch-box3">
          <SelectBox options={OPTIONS} className="custom-select" />
      </div>
      <div className="result-counts">
      {activeButton === "entire" && (
          <p>전체 {countTotalReviews()}건</p>
        )}
        {activeButton === "festival" && (
          <p>정보보기 {countReviewsByType("정보보기")}건</p>
        )}
        {activeButton === "concert" && (
          <p>정보공유 {countReviewsByType("정보공유")}건</p>
        )}
        {activeButton === "review" && (
          <p>후기 {countReviewsByType("후기")}건</p>
        )}
        {activeButton === "ticket" && (
          <p>티켓팅 {countReviewsByType("티켓팅")}건</p>
        )}
        {activeButton === "together" && (
          <p>같이가요 {countReviewsByType("같이가요")}건</p>
        )}
      </div>
        <div className="main-pagetxt">
          {/* 임의로 작성한 dummyReview에서 받아오게함 API연동 후 밑에코드 삭제 */}
          {filteredReviews().map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}

          {/* {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
          ))} 백엔드에서 받아오는 데이터*/}
        </div>
    </div>
    </div>
  );
}

export default ConcertMain;
