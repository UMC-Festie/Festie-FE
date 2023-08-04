//티켓팅 일정 추가하기 버튼을 눌렀을때 뜨는 박스
import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜로 초기화
  const [showDateModal, setShowDateModal] = useState(false); // 날짜 모달 상태 관리
  const [showTimeModal, setShowTimeModal] = useState(false); // 시간 모달 상태 관리
  const [selectedTitle, setSelectedTitle] = useState(""); // 선택된 공연 제목 상태 관리
  const [searchQuery, setSearchQuery] = useState(""); // 검색 쿼리 상태 관리

  const handleModalClose = () => {
    onClose(); // 모달 닫기 이벤트를 부모 컴포넌트로 전달합니다.
  };

  const handleDateClick = () => {
    setShowDateModal((prev) => !prev); // "날짜 선택" 클릭 시 날짜 모달 열고 닫기
  };

  const handleTimeClick = () => {
    setShowTimeModal((prev) => !prev); // "시간 선택" 클릭 시 시간 모달 열고 닫기
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
  };

  return (
    <div className="modal">
      <h1>티켓팅 일정 추가</h1>
      <div className="serch1">
        <input
          type="text"
          className="search-input"
          placeholder="공연/축제를 검색해보세요"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="#555555"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M17.4961 17.5L13.8711 13.875" stroke="#555555" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="line1">
        <svg xmlns="http://www.w3.org/2000/svg" width="490" height="2" viewBox="0 0 490 2" fill="none">
          <path d="M0 1L490 1.00004" stroke="#E8E8E8" />
        </svg>
      </div>
      <div className="modal-content">
        <div className="input1">
          <input
            type="text"
            className="search-input"
            placeholder="공연 제목을 입력해주세요"
            value={selectedTitle}
            onChange={handleTitleChange}
          />
          <svg
            className="modal-close-btn"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={handleModalClose} // 이미지 클릭 시 모달 닫기 이벤트 호출
          >
            <path d="M18 6L6 18M6 6L18 18" stroke="#6F6F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="dateBtn">
          <button className="date-select-btn" onClick={handleDateClick}>
            날짜 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#3A3A3A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {showDateModal && (
            <div className="date-select">
              {/* 날짜 선택 옵션 */}
              <select
                value={selectedDate ? selectedDate.getFullYear() : currentDate.getFullYear()}
                onChange={(e) =>
                  setSelectedDate(
                    new Date(
                      e.target.value,
                      selectedDate ? selectedDate.getMonth() : currentDate.getMonth(),
                      selectedDate ? selectedDate.getDate() : currentDate.getDate()
                    )
                  )
                }
              >
                {/* 년도 옵션 */}
                {Array.from({ length: 21 }, (_, i) => (
                  <option key={i} value={currentDate.getFullYear() - 5 + i}>
                    {currentDate.getFullYear() - 5 + i}
                  </option>
                ))}
              </select>
              {/* 월 옵션 */}
              <select
                value={selectedDate ? selectedDate.getMonth() : currentDate.getMonth()}
                onChange={(e) =>
                  setSelectedDate(
                    new Date(
                      selectedDate ? selectedDate.getFullYear() : currentDate.getFullYear(),
                      e.target.value,
                      selectedDate ? selectedDate.getDate() : currentDate.getDate()
                    )
                  )
                }
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {i + 1}월
                  </option>
                ))}
              </select>
              {/* 일 옵션 */}
              <select
                value={selectedDate ? selectedDate.getDate() : currentDate.getDate()}
                onChange={(e) =>
                  setSelectedDate(
                    new Date(
                      selectedDate ? selectedDate.getFullYear() : currentDate.getFullYear(),
                      selectedDate ? selectedDate.getMonth() : currentDate.getMonth(),
                      e.target.value
                    )
                  )
                }
              >
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}일
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="timeBtn">
          <button className="time-select-btn" onClick={handleTimeClick}>
            시간 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#3A3A3A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {showTimeModal && (
            <div className="time-select">
              {/* 시간 선택 옵션 */}
              <select
                value={selectedTime ? selectedTime.split(":")[0] : currentDate.getHours()}
                onChange={(e) =>
                  setSelectedTime(
                    selectedTime
                      ? e.target.value + `:${selectedTime.split(":")[1]}`
                      : `${e.target.value.toString().padStart(2, "0")}:${currentDate.getMinutes().toString().padStart(2, "0")}`
                  )
                }
              >
                {/* 시간 옵션 */}
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {`${i.toString().padStart(2, "0")}시`}
                  </option>
                ))}
              </select>
              {/* 분 옵션 */}
              <select
                value={selectedTime ? selectedTime.split(":")[1] : currentDate.getMinutes()}
                onChange={(e) =>
                  setSelectedTime(
                    selectedTime
                      ? selectedTime.split(":")[0] + `:${e.target.value.toString().padStart(2, "0")}`
                      : `${currentDate.getHours().toString().padStart(2, "0")}:${e.target.value.toString().padStart(2, "0")}`
                  )
                }
              >
                {/* 분 옵션 */}
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={i}>
                    {`${i.toString().padStart(2, "0")}분`}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="modal-buttons">
          <button onClick={onClose}>일정 등록하기</button>
        </div>
      </div>
      {(showDateModal || showTimeModal) && <div className="modal-backdrop" onClick={handleModalClose} />}
    </div>
  );
};

export default Modal;
