import React, { useState, useEffect } from 'react';
import './Mypage.css';
import Poster from './Mainposter';
import posterImage from '../assets/poster_5.png';

function MyPage() {
    const [activeTab, setActiveTab] = useState("정보공유"); // 외부 탭 메뉴 상태, 기본값 설정
    const [innerActiveTab, setInnerActiveTab] = useState("축제"); // 내부 탭 메뉴 상태, 기본값 설정
    const handleTabClick = (index) => {
      setActiveTab(index); // 외부 탭 메뉴 상태 업데이트
    };
    const handleInnerTabClick = (index) => {
      setInnerActiveTab(index); // 내부 탭 메뉴 상태 업데이트
    };


    const DropdownSelect = () => {
      const [isDropdownOpen, setDropdownOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState("Option 1");
    };
    
      const OPTIONS = [
        { value: "최신순", name: "최신순" },
        { value: "오래된순", name: "오래된순" },
        { value: "조회많은순", name: "조회많은순" },
        { value: "조회적은순", name: "조회적은순" },
        { value: "좋아요많은순", name: "좋아요많은순" },
        { value: "좋아요적은순", name: "좋아요적은순" },
      ];
    
      // const handleDropdownToggle = () => {
      //   setDropdownOpen(!isDropdownOpen);
      // };
    
      // const handleOptionSelect = (option) => {
      //   setSelectedOption(option);
      //   setDropdownOpen(false); // 선택 후 선택 상자를 닫습니다.
      // };
    
  
    const SelectBox = (props) => (
      <select>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    );

    const [posterInfo, setPosterInfo] = useState(null);
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then((response) => response.json())
          .then((data) => {
            //posterInfo 상태 업데이트
            const { userId } = data;
            setPosterInfo({
              concertName: '부산푸드필름페스타',
            //   concertName: `Concert by User ${userId}`,
              place: '부산광역시 해운대구',
              date: '2023.5.30 - 2023.8.20',
              imageUrl: posterImage,
            });
          })
          .catch((error) => {
            console.log('Error fetching data:', error);
          });
      }, []);

      const nickname = '페스티';
      const email = 'festie2023@gmail.com';
      const birth = '2023. 7. 12';
      const sex = '여성';
  
  return (
    <div className="mypageForm">
      <div className="breadCrumb">
        <span>홈</span> &gt; <span>마이페이지</span>
      </div>
      <p className="welcome">오늘 하루도 Festie하세요, 페스티님!</p>
      <div className="myinfoForm">
        <span>
        <span className='mypageNickname' style={{ marginRight: '16px' }}>닉네임</span>
        <span className='mypageData'>{nickname}</span>
        <span className='mypageEmail' style={{ marginRight: '16px' }}>이메일</span>
        <span className='mypageData'>{email}</span>
        <span className='mypageEmail' style={{ marginRight: '16px' }}>생년월일</span>
        <span className='mypageData'>{birth}</span>
        <span className='mypageEmail' style={{ marginRight: '16px' }}>성별</span>
        <span className='mypageData'>{sex}</span>
          {/* <span className='mypageNickname'>닉네임</span>
          <span className='mypageEmail'>이메일</span>
          <span className='mypageBirth'>생년월일</span>
          <span className='mypageSex'>성별</span> */}
        </span>
        <span className="logoutBtn">로그아웃</span>
        <span className="resetpwBtn">비밀번호 수정하기</span>
      </div>
      <div className="tabMenu">
        <button
          className={activeTab === "정보공유" ? 'active' : ''}
          onClick={() => handleTabClick("정보공유")}
        >
          정보공유
        </button>
        <button
          className={activeTab === "정보보기" ? 'active' : ''}
          onClick={() => handleTabClick("정보보기")}
        >
          정보보기
        </button>
        <button
          className={activeTab === "같이가요" ? 'active' : ''}
          onClick={() => handleTabClick("같이가요")}
        >
          같이가요
        </button>
      </div>
      <div className='horizontalLine'>
        <svg width="1280" height="24">
          <line x1="0" y1="12" x2="1100" y2="12" stroke="#e8e8e8" strokeWidth="2" />
        </svg>
      </div>
      <div className="tabmenuContent">
        {activeTab === "정보공유" && (
          <div>
            <div className='tabShare'> 
              <button
                className={innerActiveTab === "축제" ? 'active' : ''}
                onClick={() => handleInnerTabClick("축제")}
              >
                축제
              </button>
              <button
                className={innerActiveTab === "공연" ? 'active' : ''}
                onClick={() => handleInnerTabClick("공연")}
              >
                공연
              </button>
            </div>
          </div>
        )}
        {activeTab === "정보보기" && (
          <div>
            <div className='tabShare'> 
            <button
                className={innerActiveTab === "축제" ? 'active' : ''}
                onClick={() => handleInnerTabClick("축제")}
              >
                축제
              </button>
              <button
                className={innerActiveTab === "공연" ? 'active' : ''}
                onClick={() => handleInnerTabClick("공연")}
              >
                공연
              </button>
              <button
                className={innerActiveTab === "후기" ? 'active' : ''}
                onClick={() => handleInnerTabClick("후기")}
              >
                후기
              </button>
              <button
                className={innerActiveTab === "티켓팅" ? 'active' : ''}
                onClick={() => handleInnerTabClick("티켓팅")}
              >
                티켓팅
              </button>
            </div>
          </div>
        )}
        {activeTab === "같이가요" && (
          <div>
            <div className='tabShare'> 
              <button
                className={innerActiveTab === "같이가요 매칭 이력" ? 'active' : ''}
                onClick={() => handleInnerTabClick("같이가요 매칭 이력")}
              >
                같이가요 매칭 이력
              </button>
            </div>
          </div>
        )}
      </div>
      <div className='horizontalLine'>
        <svg width="1280" height="24">
          <line x1="0" y1="12" x2="1100" y2="12" stroke="#e8e8e8" strokeWidth="2" />
        </svg>
      </div>
      <div className="mypageContent">
      {innerActiveTab === "축제" && (
            <div className="poster_wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {posterInfo && <Poster posterInfo={posterInfo} />}
                    {posterInfo && <Poster posterInfo={posterInfo} />}
                    {posterInfo && <Poster posterInfo={posterInfo} />}
                    {posterInfo && <Poster posterInfo={posterInfo} />}
                    {posterInfo && <Poster posterInfo={posterInfo} />}
                    {posterInfo && <Poster posterInfo={posterInfo} />}
                    {posterInfo && <Poster posterInfo={posterInfo} />}
                    {posterInfo && <Poster posterInfo={posterInfo} />}
            </div>
        )}
      </div>

    </div>
  );
}

export default MyPage;
