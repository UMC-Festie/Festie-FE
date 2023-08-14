//정보 공유_티켓팅 메인페이지
import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Calendar.css";
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ReviewCard, dummyReviews } from "../components/ReviewCard";
import Modal from "../components/Modal"; 
const Calendar = () => {
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const [selectedOption, setSelectedOption] = useState("최신순"); // 기본값을 첫 번째 옵션으로 설정
  const [selectedTitle, setSelectedTitle] = useState(""); 
  const addEvent = (event) => {
    setScheduledEvents([...scheduledEvents, event]);
  };
  const [selectedEvents, setSelectedEvents] = useState([]); // useState를 통해 selectedEvents를 정의
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleAddSchedule = (event) => {
  setSelectedDate(event.date);
  setSelectedTime(event.time);
  setSelectedTitle(event.title);
  setShowModal(true);
};

useEffect(() => {
  console.log("Selected Date:", selectedDate);
  console.log("Selected Time:", selectedTime);
  console.log("Selected Title:", selectedTitle);
}, [selectedDate, selectedTime, selectedTitle]);


  const handleModalClose = () => {
    setShowModal(false);
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
  useEffect(() => {
    // 페이지가 로드될 때 모든 후기 데이터를 가져옵니다.
    setAllReviews(dummyReviews);
  }, []);

  useEffect(() => {
    // 현재 페이지 번호에 해당하는 데이터를 가져옵니다.
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    setReviews(allReviews.slice(startIndex, endIndex));
  }, [allReviews, currentPage]);

  // 전체 페이지 개수를 계산하는 함수
  const getTotalPages = () => {
    const totalReviews = allReviews.length; // 전체 후기 개수
    const reviewsPerPage = 5; // 한 페이지에 보여지는 후기 개수

    // 한 페이지에 보여줄 후기 개수가 5개 이상인 경우만 새로운 페이지를 생성하도록 설정
    if (totalReviews > 5) {
      return Math.ceil(totalReviews / reviewsPerPage);
    } else {
      return 1; // 5개 이하의 후기가 있을 때는 한 페이지로 처리
    }
  };

  // 특정 페이지로 이동하는 함수
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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

  const getHeader = () => {
    const dateFormat = "yyyy년";
    return format(currentMonth, dateFormat);
  };

  const getDaysOfWeek = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days.map((day, index) => (
      <div className={`day ${index === 0 || index === 6 ? "weekend" : ""}`} key={day}>
        {day}
      </div>
    ));
  };

  const getDays = () => {
    const monthStart = startOfWeek(startOfMonth(currentMonth));
    const monthEnd = endOfWeek(endOfMonth(currentMonth));
    const startDate = new Date(monthStart);
    const endDate = new Date(monthEnd);
    const dateFormat = "d";
    const days = [];

    let day = startDate;
    while (day <= endDate) {
      const isToday = isSameDay(day, today);
      days.push(
        <div
          className={`day ${!isSameMonth(day, currentMonth) ? "faded" : ""} 
          ${isToday ? "today" : ""} 
          ${day.getDay() === 0 || day.getDay() === 6 ? "weekend" : ""} 
          ${day === startDate || day === endDate ? "start-end" : ""}`}
          key={day.toString()}
          style={{ position: "relative" }}
        >
          {format(day, dateFormat)}
          {isToday && <div className="orange-circle"></div>}
        </div>
      );
      
      day = addDays(day, 1);
    }
    return days;
  };

  const handleMonthChange = (e) => {
    const selectedMonth = new Date(currentMonth);
    selectedMonth.setMonth(parseInt(e.target.value));
    setCurrentMonth(selectedMonth);
  };

  return (
    <div className="Ticketing">
      <div className="breadcrumb">
        <span>홈</span> &gt; <span>정보공유</span> &gt; <span>티켓팅</span>
      </div>
      <div className="banner">
        <h1 className="banner-txt">나만 아는 티켓팅 꿀팁이 있나요? </h1>
        <h2 className="banner-txt">Bestie들과 함께 정보를 공유해요!</h2>
        <button className="breadcrumb-button">
          티켓팅 정보 공유하기
          <span className="arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
      <div className="calendar">
        <div className="header">
          <h2>{getHeader()}</h2>
          <select value={currentMonth.getMonth()} onChange={handleMonthChange}>
            {Array.from({ length: 12 }, (_, i) => {
              const monthDate = new Date(today.getFullYear(), i, 1);
              return (
                <option key={i} value={i}>
                  {format(monthDate, "M월")}
                </option>
              );
            })}
          </select>
          <button className="addTk-btn" onClick={handleAddSchedule}>
        <FontAwesomeIcon icon={faPlus} />
        {' '}
        티켓팅 일정 추가하기
      </button>
      {showModal && (
        <Modal
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        selectedTitle={selectedTitle}  // 이 부분 추가
        setSelectedTitle={setSelectedTitle}  // 이 부분 추가
        onClose={handleModalClose}
        onAddSchedule={(event) => {
          handleAddSchedule(event);
          handleModalClose(); // 일정 등록 후 모달 닫기
        }}
        />
      )}
      
        </div>
        <div className="days-of-week">{getDaysOfWeek()}</div>
        <div className="days">
  {getDays().map((day) => (
    <div key={day.toString()} className="day-cell">
      <div className="day-number">{day}</div>
      <div className="event-content">
        {scheduledEvents.map((event) => {
          if (isSameDay(event.date, new Date(day))) {
            return (
              <div key={event.date} className="event">
                {event.title} - {event.time}
              </div>
            );
          }
          return null;
        })}
        {selectedEvents.map((event, index) => (
            <div key={`${event.date}-${event.time}-${index}`}>
            {event.title} - {event.time}
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

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
        <button className="addBtn">
          <FontAwesomeIcon icon={faPlus} />
          {' '}
          정보 공유하기
        </button>
      )}
      <div className="selectbtn">
        <SelectBox options={OPTIONS} onChange={handleOptionChange} />
      </div>
      <div className="main-page">
      <div className="main-pagetxt">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
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
      <div className="footer">
        {/* footer 내용 */}
      </div>
    </div>
  );
};

export default Calendar;
