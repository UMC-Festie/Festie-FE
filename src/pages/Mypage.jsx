import React, { useState, useEffect, useContext } from 'react';
import './Mypage.css';
import Poster from '../components/Mainposter';
import posterImage from '../assets/poster_5.png';
import posterImageBlur from '../assets/poster_9.png';
import MypagePoster from '../components/MypagePoster';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';
import { removeCookie } from '../Cookies';
import { getCookie } from '../Cookies'
import axios from "axios";

function MyPage() {
    const [activeTab, setActiveTab] = useState("정보보기"); // 외부 탭 메뉴 상태, 기본값 설정
    const [innerActiveTab, setInnerActiveTab] = useState("정보보기축제"); // 내부 탭 메뉴 상태, 기본값 설정
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);
    const [openFestivalData, setOpenFestivalData] = useState([]);
    const [togetherMatchData, setTogetherMatchData] = useState([]);
    const accessToken = getCookie('accessToken');

    const [posterRecentOpenFestivals1, setPosterRecentOpenFestivals1] = useState(null);
    const [posterRecentOpenFestivals2, setPosterRecentOpenFestivals2] = useState(null);
    const [posterRecentOpenFestivals3, setPosterRecentOpenFestivals3] = useState(null);
    const [posterRecentOpenFestivals4, setPosterRecentOpenFestivals4] = useState(null);  
    const [posterRecentOpenFestivals5, setPosterRecentOpenFestivals5] = useState(null);
    const [posterRecentOpenFestivals6, setPosterRecentOpenFestivals6] = useState(null);
    const [posterRecentOpenFestivals7, setPosterRecentOpenFestivals7] = useState(null);
    const [posterRecentOpenFestivals8, setPosterRecentOpenFestivals8] = useState(null); 
    
    const [posterRecentOpenPerformances1, setPosterRecentOpenPerformances1] = useState(null);
    const [posterRecentOpenPerformances2, setPosterRecentOpenPerformances2] = useState(null);
    const [posterRecentOpenPerformances3, setPosterRecentOpenPerformances3] = useState(null);
    const [posterRecentOpenPerformances4, setPosterRecentOpenPerformances4] = useState(null);  
    const [posterRecentOpenPerformances5, setPosterRecentOpenPerformances5] = useState(null);
    const [posterRecentOpenPerformances6, setPosterRecentOpenPerformances6] = useState(null);
    const [posterRecentOpenPerformances7, setPosterRecentOpenPerformances7] = useState(null);
    const [posterRecentOpenPerformances8, setPosterRecentOpenPerformances8] = useState(null);  

    const [posterRecentFestivals1, setPosterRecentFestivals1] = useState(null);
    const [posterRecentFestivals2, setPosterRecentFestivals2] = useState(null);
    const [posterRecentFestivals3, setPosterRecentFestivals3] = useState(null);
    const [posterRecentFestivals4, setPosterRecentFestivals4] = useState(null); 
    const [posterRecentFestivals5, setPosterRecentFestivals5] = useState(null);
    const [posterRecentFestivals6, setPosterRecentFestivals6] = useState(null);
    const [posterRecentFestivals7, setPosterRecentFestivals7] = useState(null);
    const [posterRecentFestivals8, setPosterRecentFestivals8] = useState(null); 

    const [posterRecentPerformances1, setPosterRecentPerformances1] = useState(null);
    const [posterRecentPerformances2, setPosterRecentPerformances2] = useState(null);
    const [posterRecentPerformances3, setPosterRecentPerformances3] = useState(null);
    const [posterRecentPerformances4, setPosterRecentPerformances4] = useState(null); 
    const [posterRecentPerformances5, setPosterRecentPerformances5] = useState(null);
    const [posterRecentPerformances6, setPosterRecentPerformances6] = useState(null);
    const [posterRecentPerformances7, setPosterRecentPerformances7] = useState(null);
    const [posterRecentPerformances8, setPosterRecentPerformances8] = useState(null); 


    const [togetherMatchData1, setTogetherMatchData1] = useState(null);
    const [togetherMatchData2, setTogetherMatchData2] = useState(null);
    const [togetherMatchData3, setTogetherMatchData3] = useState(null);
    const [togetherMatchData4, setTogetherMatchData4] = useState(null);  

    const [userInfo, setUserInfo] = useState({
      nickname: '',
      email: '',
      birth: '',
      gender: ''
  });

  useEffect(() => {
    const accessToken = getCookie('accessToken');

    // 첫 번째 API 호출: 유저 정보 가져오기
    axios.get(`/api/mypage`, {
      headers: {
        "X-AUTH-TOKEN": accessToken
      }
    })
    .then(response => {
      // API 호출 결과를 userInfo 상태에 저장
      const data = response.data;
      setUserInfo(data);
      console.log(accessToken);

      if (innerActiveTab === "정보보기축제") {
        // 두 번째 API 호출: 정보보기 축제 포스터 정보 가져오기
        axios.get("/api/getRecentOpenFestivals", {
          headers: {
            "X-AUTH-TOKEN": accessToken,
          },
        })
        .then((response) => {
          console.log("API 호출 성공", response);
          const posterRecentOpenFestivals = response.data;

          if (posterRecentOpenFestivals && posterRecentOpenFestivals.length >=1) {
            const festival1 = posterRecentOpenFestivals[0];
            setPosterRecentOpenFestivals1({
              duration: festival1.duration,
              title: festival1.openFestivalTitle,
              location: festival1.location,
              date: festival1.festivalDate,
              imageUrl: festival1.thumbnailUrl,
            });
          }
          if (posterRecentOpenFestivals && posterRecentOpenFestivals.length >=2) {
            const festival2 = posterRecentOpenFestivals[1];
            setPosterRecentOpenFestivals2({
              duration: festival2.duration,
              title: festival2.openFestivalTitle,
              location: festival2.location,
              date: festival2.festivalDate,
              imageUrl: festival2.thumbnailUrl,
            });
          }
          if (posterRecentOpenFestivals && posterRecentOpenFestivals.length >=3) {
            const festival3 = posterRecentOpenFestivals[2];
            setPosterRecentOpenFestivals3({
              duration: festival3.duration,
              title: festival3.openFestivalTitle,
              location: festival3.location,
              date: festival3.festivalDate,
              imageUrl: festival3.thumbnailUrl,
            });
          }
          if (posterRecentOpenFestivals && posterRecentOpenFestivals.length >=4) {
            const festival4 = posterRecentOpenFestivals[3];
            setPosterRecentOpenFestivals4({
              duration: festival4.duration,
              title: festival4.openFestivalTitle,
              location: festival4.location,
              date: festival4.festivalDate,
              imageUrl: festival4.thumbnailUrl,
            });
          }
          if (posterRecentOpenFestivals && posterRecentOpenFestivals.length >=5) {
            const festival5 = posterRecentOpenFestivals[4];
            setPosterRecentOpenFestivals5({
              duration: festival5.duration,
              title: festival5.openFestivalTitle,
              location: festival5.location,
              date: festival5.festivalDate,
              imageUrl: festival5.thumbnailUrl,
            });
          }
          if (posterRecentOpenFestivals && posterRecentOpenFestivals.length >=6) {
            const festival6 = posterRecentOpenFestivals[5];
            setPosterRecentOpenFestivals6({
              duration: festival6.duration,
              title: festival6.openFestivalTitle,
              location: festival6.location,
              date: festival6.festivalDate,
              imageUrl: festival6.thumbnailUrl,
            });
          }
          if (posterRecentOpenFestivals && posterRecentOpenFestivals.length >=7) {
            const festival7 = posterRecentOpenFestivals[6];
            setPosterRecentOpenFestivals7({
              duration: festival7.duration,
              title: festival7.openFestivalTitle,
              location: festival7.location,
              date: festival7.festivalDate,
              imageUrl: festival7.thumbnailUrl,
            });
          }
          if (posterRecentOpenFestivals && posterRecentOpenFestivals.length >=8) {
            const festival8 = posterRecentOpenFestivals[7];
            setPosterRecentOpenFestivals8({
              duration: festival8.duration,
              title: festival8.openFestivalTitle,
              location: festival8.location,
              date: festival8.festivalDate,
              imageUrl: festival8.thumbnailUrl,
            });
          }
          else {
            console.log('No Data', response);
          }
        })
        .catch((error) => {
          console.error("error:", error);
        });
      }

      if (innerActiveTab === "정보보기공연") {
        // 세 번째 API 호출: 정보보기 공연 포스터 정보 가져오기
        axios.get("/api/getRecentOpenPerformances", {
          headers: {
            "X-AUTH-TOKEN": accessToken,
          },
        })
        .then((response) => {
          console.log("API 호출 성공", response);
          const posterRecentOpenPerformances = response.data;

          if (posterRecentOpenPerformances && posterRecentOpenPerformances.length >=1) {
            const festival1 = posterRecentOpenPerformances[0];
            setPosterRecentOpenPerformances1({
              duration: festival1.duration,
              title: festival1.openPerformanceTitle,
              location: festival1.location,
              date: festival1.festivalDate,
              imageUrl: festival1.thumbnailUrl,
            });
          }
          if (posterRecentOpenPerformances && posterRecentOpenPerformances.length >=2) {
            const festival2 = posterRecentOpenPerformances[1];
            setPosterRecentOpenPerformances2({
              duration: festival2.duration,
              title: festival2.openPerformanceTitle,
              location: festival2.location,
              date: festival2.festivalDate,
              imageUrl: festival2.thumbnailUrl,
            });
          }
          if (posterRecentOpenPerformances && posterRecentOpenPerformances.length >=3) {
            const festival3 = posterRecentOpenPerformances[2];
            setPosterRecentOpenPerformances3({
              duration: festival3.duration,
              title: festival3.openPerformanceTitle,
              location: festival3.location,
              date: festival3.festivalDate,
              imageUrl: festival3.thumbnailUrl,
            });
          }
          if (posterRecentOpenPerformances && posterRecentOpenPerformances.length >=4) {
            const festival4 = posterRecentOpenPerformances[3];
            setPosterRecentOpenPerformances4({
              duration: festival4.duration,
              title: festival4.openPerformanceTitle,
              location: festival4.location,
              date: festival4.festivalDate,
              imageUrl: festival4.thumbnailUrl,
            });
          }
          if (posterRecentOpenPerformances && posterRecentOpenPerformances.length >=5) {
            const festival5 = posterRecentOpenPerformances[4];
            setPosterRecentOpenPerformances5({
              duration: festival5.duration,
              title: festival5.openPerformanceTitle,
              location: festival5.location,
              date: festival5.festivalDate,
              imageUrl: festival5.thumbnailUrl,
            });
          }
          if (posterRecentOpenPerformances && posterRecentOpenPerformances.length >=6) {
            const festival6 = posterRecentOpenPerformances[5];
            setPosterRecentOpenPerformances6({
              duration: festival6.duration,
              title: festival6.openPerformanceTitle,
              location: festival6.location,
              date: festival6.festivalDate,
              imageUrl: festival6.thumbnailUrl,
            });
          }
          if (posterRecentOpenPerformances && posterRecentOpenPerformances.length >=7) {
            const festival7 = posterRecentOpenPerformances[6];
            setPosterRecentOpenPerformances7({
              duration: festival7.duration,
              title: festival7.openPerformanceTitle,
              location: festival7.location,
              date: festival7.festivalDate,
              imageUrl: festival7.thumbnailUrl,
            });
          }
          if (posterRecentOpenPerformances && posterRecentOpenPerformances.length >=8) {
            const festival8 = posterRecentOpenPerformances[7];
            setPosterRecentOpenPerformances8({
              duration: festival8.duration,
              title: festival8.openPerformanceTitle,
              location: festival8.location,
              date: festival8.festivalDate,
              imageUrl: festival8.thumbnailUrl,
            });
          }
          else {
            console.log('No Data', response);
          }
        })
        .catch((error) => {
          console.error("error:", error);
        });
      }

      if (innerActiveTab === "정보공유축제") {
        // 네 번째 API 호출: 정보공유 축제 포스터 정보 가져오기
        axios.get("/api/getRecentFestivals", {
          headers: {
            "X-AUTH-TOKEN": accessToken,
          },
        })
        .then((response) => {
          console.log("API 호출 성공", response);
          const posterRecentFestivals = response.data;

          if (posterRecentFestivals && posterRecentFestivals.length >=1) {
            const festival1 = posterRecentFestivals[0];
            setPosterRecentFestivals1({
              duration: festival1.duration,
              title: festival1.festivalTitle,
              location: festival1.location,
              date: festival1.festivalDate,
              imageUrl: festival1.thumbnailUrl,
            });
          }
          if (posterRecentFestivals && posterRecentFestivals.length >=2) {
            const festival2 = posterRecentFestivals[1];
            setPosterRecentFestivals2({
              duration: festival2.duration,
              title: festival2.festivalTitle,
              location: festival2.location,
              date: festival2.festivalDate,
              imageUrl: festival2.thumbnailUrl,
            });
          }
          if (posterRecentFestivals && posterRecentFestivals.length >=3) {
            const festival3 = posterRecentFestivals[2];
            setPosterRecentFestivals3({
              duration: festival3.duration,
              title: festival3.festivalTitle,
              location: festival3.location,
              date: festival3.festivalDate,
              imageUrl: festival3.thumbnailUrl,
            });
          }
          if (posterRecentFestivals && posterRecentFestivals.length >=4) {
            const festival4 = posterRecentFestivals[3];
            setPosterRecentFestivals4({
              duration: festival4.duration,
              title: festival4.festivalTitle,
              location: festival4.location,
              date: festival4.festivalDate,
              imageUrl: festival4.thumbnailUrl,
            });
          }
          if (posterRecentFestivals && posterRecentFestivals.length >=5) {
            const festival5 = posterRecentFestivals[4];
            setPosterRecentFestivals5({
              duration: festival5.duration,
              title: festival5.festivalTitle,
              location: festival5.location,
              date: festival5.festivalDate,
              imageUrl: festival5.thumbnailUrl,
            });
          }
          if (posterRecentFestivals && posterRecentFestivals.length >=6) {
            const festival6 = posterRecentFestivals[5];
            setPosterRecentFestivals6({
              duration: festival6.duration,
              title: festival6.festivalTitle,
              location: festival6.location,
              date: festival6.festivalDate,
              imageUrl: festival6.thumbnailUrl,
            });
          }
          if (posterRecentFestivals && posterRecentFestivals.length >=7) {
            const festival7 = posterRecentFestivals[6];
            setPosterRecentFestivals7({
              duration: festival7.duration,
              title: festival7.festivalTitle,
              location: festival7.location,
              date: festival7.festivalDate,
              imageUrl: festival7.thumbnailUrl,
            });
          }
          if (posterRecentFestivals && posterRecentFestivals.length >=8) {
            const festival8 = posterRecentFestivals[7];
            setPosterRecentFestivals8({
              duration: festival8.duration,
              title: festival8.festivalTitle,
              location: festival8.location,
              date: festival8.festivalDate,
              imageUrl: festival8.thumbnailUrl,
            });
          }
          else {
            console.log('No Data', response);
          }
        })
        .catch((error) => {
          console.error("error:", error);
        });
      }

      if (innerActiveTab === "정보공유공연") {
        // 다섯 번째 API 호출: 정보공유 공연 포스터 정보 가져오기
        axios.get("/api/getRecentPerformances", {
          headers: {
            "X-AUTH-TOKEN": accessToken,
          },
        })
        .then((response) => {
          console.log("API 호출 성공", response);
          const posterRecentPerformances = response.data;

          if (posterRecentPerformances && posterRecentPerformances.length >=1) {
            const festival1 = posterRecentPerformances[0];
            setPosterRecentPerformances1({
              duration: festival1.duration,
              title: festival1.performanceTitle,
              location: festival1.location,
              date: festival1.performanceDate,
              imageUrl: festival1.thumbnailUrl,
            });
          }
          if (posterRecentPerformances && posterRecentPerformances.length >=2) {
            const festival2 = posterRecentPerformances[1];
            setPosterRecentPerformances2({
              duration: festival2.duration,
              title: festival2.performanceTitle,
              location: festival2.location,
              date: festival2.performanceDate,
              imageUrl: festival2.thumbnailUrl,
            });
          }
          if (posterRecentPerformances && posterRecentPerformances.length >=3) {
            const festival3 = posterRecentPerformances[2];
            setPosterRecentPerformances3({
              duration: festival3.duration,
              title: festival3.performanceTitle,
              location: festival3.location,
              date: festival3.performanceDate,
              imageUrl: festival3.thumbnailUrl,
            });
          }
          if (posterRecentPerformances && posterRecentPerformances.length >=4) {
            const festival4 = posterRecentPerformances[3];
            setPosterRecentPerformances4({
              duration: festival4.duration,
              title: festival4.performanceTitle,
              location: festival4.location,
              date: festival4.performanceDate,
              imageUrl: festival4.thumbnailUrl,
            });
          }
          if (posterRecentPerformances && posterRecentPerformances.length >=5) {
            const festival5 = posterRecentPerformances[4];
            setPosterRecentPerformances5({
              duration: festival5.duration,
              title: festival5.performanceTitle,
              location: festival5.location,
              date: festival5.performanceDate,
              imageUrl: festival5.thumbnailUrl,
            });
          }
          if (posterRecentPerformances && posterRecentPerformances.length >=6) {
            const festival6 = posterRecentPerformances[5];
            setPosterRecentPerformances6({
              duration: festival6.duration,
              title: festival6.performanceTitle,
              location: festival6.location,
              date: festival6.performanceDate,
              imageUrl: festival6.thumbnailUrl,
            });
          }
          if (posterRecentPerformances && posterRecentPerformances.length >=7) {
            const festival7 = posterRecentPerformances[6];
            setPosterRecentPerformances7({
              duration: festival7.duration,
              title: festival7.performanceTitle,
              location: festival7.location,
              date: festival7.performanceDate,
              imageUrl: festival7.thumbnailUrl,
            });
          }
          if (posterRecentPerformances && posterRecentPerformances.length >=8) {
            const festival8 = posterRecentPerformances[7];
            setPosterRecentPerformances8({
              duration: festival8.duration,
              title: festival8.performanceTitle,
              location: festival8.location,
              date: festival8.performanceDate,
              imageUrl: festival8.thumbnailUrl,
            });
          }
          else {
            console.log('No Data', response);
          }
        })
        .catch((error) => {
          console.error("error:", error);
        });
      }

      if (innerActiveTab === "매칭이력") {
        // 여섯 번째 API 호출: 같이가요 매칭이력 포스터 정보 가져오기
        axios.get("/api/bestie?page=0", {
          headers: {
            "X-AUTH-TOKEN": accessToken,
          },
        })
        .then((response) => {
          console.log("API 호출 성공", response);
          const togetherMatchData = response.data.data;

          if (togetherMatchData && togetherMatchData.length >= 1) {
            const together1 = togetherMatchData[0];
            setTogetherMatchData1({
              status: together1.isApplicationSuccess,
              title: together1.title,
              location: together1.writerNickname,
              date: together1.updatedAt,
              imageUrl: together1.thumbnailUrl,
            });
          }
          if (togetherMatchData && togetherMatchData.length >= 2) {
            const together2 = togetherMatchData[1];
            setTogetherMatchData2({
              status: together2.isApplicationSuccess,
              title: together2.title,
              location: together2.writerNickname,
              date: together2.updatedAt,
              imageUrl: together2.thumbnailUrl,
            });
          }
          if (togetherMatchData && togetherMatchData.length >= 3) {
            const together3 = togetherMatchData[2];
            setTogetherMatchData3({
              status: together3.isApplicationSuccess,
              title: together3.title,
              location: together3.writerNickname,
              date: together3.updatedAt,
              imageUrl: together3.thumbnailUrl,
            });
          }
          if (togetherMatchData && togetherMatchData.length >= 4) {
            const together4 = togetherMatchData[3];
            setTogetherMatchData4({
              status: together4.isApplicationSuccess,
              title: together4.title,
              location: together4.writerNickname,
              date: together4.updatedAt,
              imageUrl: together4.thumbnailUrl,
            });
          }
          else {
            console.log('No Data', response);
          }
        })
        .catch((error) => {
          console.error("error:", error);
        });
      }
    })
    .catch(error => {
      console.error('API 호출 실패:', error);
    });
  }, [innerActiveTab, accessToken]);

    const logout = () => {
      removeCookie('accessToken', { path : '/'});
      setIsLoggedIn(false);
      localStorage.setItem('isLoggedIn', false);

      // alert('로그아웃되었습니다!')
      navigate('/');
    } // 로그아웃 쿠키에서 토큰 삭제

    const handleTabClick = (index) => {
      setActiveTab(index); // 외부 탭 메뉴 상태 업데이트
    };
    // const handleInnerTabClick = (index) => {
    //   setInnerActiveTab(index); // 내부 탭 메뉴 상태 업데이트
    // };
    const handleInnerTabClick = (tabName) => {
      setInnerActiveTab(tabName);
    };

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
    };

    const DropdownSelect = () => {
      const [isDropdownOpen, setDropdownOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState("Option 1");
    };

    const [selectedOption, setSelectedOption] = useState(""); // 선택된 옵션을 저장하는 상태

    const handleOptionChange = (event) => {
      // 셀렉트박스에서 옵션을 선택했을 때 호출되는 함수
      setSelectedOption(event.target.value);
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
  
  return (
    <div className="mypageForm">
      <div className="breadCrumb">
        <span>홈</span> &gt; <span>마이페이지</span>
      </div>
      <p className="welcome">오늘 하루도 Festie하세요, {userInfo.nickname}님!</p>
      <div className="myinfoForm">
        <span className='mypageNickname' style={{ marginRight: '16px' }}>닉네임</span>
        <span className='mypageData'>{userInfo.nickname}</span>
        <span className='mypageEmail' style={{ marginRight: '16px' }}>이메일</span>
        <span className='mypageData'>{userInfo.email}</span>
        <span className='mypageEmail' style={{ marginRight: '16px' }}>생년월일</span>
        <span className='mypageData'>{userInfo.birth}</span>
        <span className='mypageEmail' style={{ marginRight: '16px' }}>성별</span>
        <span className='mypageData'>{userInfo.gender}</span>
        <span className="logoutBtn" onClick={logout}>로그아웃</span>
        <NavLink to="/resetPw" style={{ textDecoration: "none" }}>
          <span className="resetpwBtn" onClick={handleScrollToTop}>비밀번호 수정하기</span>
        </NavLink>
      </div>
      <div className="tabMenu">
        <button
          className={activeTab === "정보보기" ? 'active' : ''}
          onClick={() => handleTabClick("정보보기")}
        >
          정보보기
        </button>
        <button
          className={activeTab === "정보공유" ? 'active' : ''}
          onClick={() => handleTabClick("정보공유")}
        >
          정보공유
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
        {activeTab === "정보보기" && (
          <div>
            <div className='tabShare'> 
              <button
                className={innerActiveTab === "정보보기축제" ? 'active' : ''}
                onClick={() => handleInnerTabClick("정보보기축제")}
              >
                축제
              </button>
              <button
                className={innerActiveTab === "정보보기공연" ? 'active' : ''}
                onClick={() => handleInnerTabClick("정보보기공연")}
              >
                공연
              </button>
              </div>
           </div>
        )}
        {activeTab === "정보공유" && (
          <div>
            <div className='tabShare'> 
            <button
                className={innerActiveTab === "정보공유축제" ? 'active' : ''}
                onClick={() => handleInnerTabClick("정보공유축제")}
              >
                축제
              </button>
              <button
                className={innerActiveTab === "정보공유공연" ? 'active' : ''}
                onClick={() => handleInnerTabClick("정보공유공연")}
              >
                공연
              </button>
              {/* <button
                className={innerActiveTab === "정보보기후기" ? 'active' : ''}
                onClick={() => handleInnerTabClick("정보보기후기")}
              >
                후기
              </button>
              <button
                className={innerActiveTab === "정보보기티켓팅" ? 'active' : ''}
                onClick={() => handleInnerTabClick("정보보기티켓팅")}
              >
                티켓팅
              </button> */}
            </div>
          </div>
        )}
        {activeTab === "같이가요" && (
          <div>
            <div className='tabShare'> 
              <button
                className={innerActiveTab === "매칭이력" ? 'active' : ''}
                onClick={() => handleInnerTabClick("매칭이력")}
              >
                매칭이력
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
      <div className='mypagePoster'>
        <span className="recentCheck">최근 조회</span>
        <span className="recentMaxEight">8건</span>
        <span className="mypageSelectbox">
          <SelectBox options={OPTIONS} value={selectedOption} onChange={handleOptionChange} className="custom-select" />
        </span>
      </div>
      <div className="mypageContent">
        {innerActiveTab === "정보보기축제" && (
            <div className="mypage_poster_wrap" style={{ display: 'flex', flexWrap: 'wrap'}}>
              {posterRecentOpenFestivals1 && <MypagePoster posterInfo={posterRecentOpenFestivals1} className="PosterSize" />}
              {posterRecentOpenFestivals2 && <MypagePoster posterInfo={posterRecentOpenFestivals2} className="PosterSize" />}
              {posterRecentOpenFestivals3 && <MypagePoster posterInfo={posterRecentOpenFestivals3} className="PosterSize" />}
              {posterRecentOpenFestivals4 && <MypagePoster posterInfo={posterRecentOpenFestivals4} className="PosterSize" />}
              {posterRecentOpenFestivals5 && <MypagePoster posterInfo={posterRecentOpenFestivals5} className="PosterSize" />}
              {posterRecentOpenFestivals6 && <MypagePoster posterInfo={posterRecentOpenFestivals6} className="PosterSize" />}
              {posterRecentOpenFestivals7 && <MypagePoster posterInfo={posterRecentOpenFestivals7} className="PosterSize" />}
              {posterRecentOpenFestivals8 && <MypagePoster posterInfo={posterRecentOpenFestivals8} className="PosterSize" />}
            </div>
          )}
          {innerActiveTab === "정보보기공연" && (
            <div className="mypage_poster_wrap" style={{ display: 'flex', flexWrap: 'wrap'}}>
              {posterRecentOpenPerformances1 && <MypagePoster posterInfo={posterRecentOpenPerformances1} className="PosterSize" />}
              {posterRecentOpenPerformances2 && <MypagePoster posterInfo={posterRecentOpenPerformances2} className="PosterSize" />}
              {posterRecentOpenPerformances3 && <MypagePoster posterInfo={posterRecentOpenPerformances3} className="PosterSize" />}
              {posterRecentOpenPerformances4 && <MypagePoster posterInfo={posterRecentOpenPerformances4} className="PosterSize" />}
              {posterRecentOpenPerformances5 && <MypagePoster posterInfo={posterRecentOpenPerformances5} className="PosterSize" />}
              {posterRecentOpenPerformances6 && <MypagePoster posterInfo={posterRecentOpenPerformances6} className="PosterSize" />}
              {posterRecentOpenPerformances7 && <MypagePoster posterInfo={posterRecentOpenPerformances7} className="PosterSize" />}
              {posterRecentOpenPerformances8 && <MypagePoster posterInfo={posterRecentOpenPerformances8} className="PosterSize" />}
            </div>
          )}
        {innerActiveTab === "정보공유축제" && (
            <div className="mypage_poster_wrap" style={{ display: 'flex', flexWrap: 'wrap'}}>
              {posterRecentFestivals1 && <MypagePoster posterInfo={posterRecentFestivals1} className="PosterSize" />}
              {posterRecentFestivals2 && <MypagePoster posterInfo={posterRecentFestivals2} className="PosterSize" />}
              {posterRecentFestivals3 && <MypagePoster posterInfo={posterRecentFestivals3} className="PosterSize" />}
              {posterRecentFestivals4 && <MypagePoster posterInfo={posterRecentFestivals4} className="PosterSize" />}
              {posterRecentFestivals5 && <MypagePoster posterInfo={posterRecentFestivals5} className="PosterSize" />}
              {posterRecentFestivals6 && <MypagePoster posterInfo={posterRecentFestivals6} className="PosterSize" />}
              {posterRecentFestivals7 && <MypagePoster posterInfo={posterRecentFestivals7} className="PosterSize" />}
              {posterRecentFestivals8 && <MypagePoster posterInfo={posterRecentFestivals8} className="PosterSize" />}
          </div>
        )}
        {innerActiveTab === "정보공유공연" && (
            <div className="mypage_poster_wrap" style={{ display: 'flex', flexWrap: 'wrap'}}>
              {posterRecentPerformances1 && <MypagePoster posterInfo={posterRecentPerformances1} className="PosterSize" />}
              {posterRecentPerformances2 && <MypagePoster posterInfo={posterRecentPerformances2} className="PosterSize" />}
              {posterRecentPerformances3 && <MypagePoster posterInfo={posterRecentPerformances3} className="PosterSize" />}
              {posterRecentPerformances4 && <MypagePoster posterInfo={posterRecentPerformances4} className="PosterSize" />}
              {posterRecentPerformances5 && <MypagePoster posterInfo={posterRecentPerformances5} className="PosterSize" />}
              {posterRecentPerformances6 && <MypagePoster posterInfo={posterRecentPerformances6} className="PosterSize" />}
              {posterRecentPerformances7 && <MypagePoster posterInfo={posterRecentPerformances7} className="PosterSize" />}
              {posterRecentPerformances8 && <MypagePoster posterInfo={posterRecentPerformances8} className="PosterSize" />}
            </div>
          )}
        {innerActiveTab === "매칭이력" && (
            <div className="mypage_poster_wrap" style={{ display: 'flex', flexWrap: 'wrap'}}>
              {togetherMatchData1 && <MypagePoster posterInfo={togetherMatchData1} className="PosterSize" />}
              {togetherMatchData2 && <MypagePoster posterInfo={togetherMatchData2} className="PosterSize" />}
              {togetherMatchData3 && <MypagePoster posterInfo={togetherMatchData3} className="PosterSize" />}
              {togetherMatchData4 && <MypagePoster posterInfo={togetherMatchData4} className="PosterSize" />}
          </div>
        )}
      </div>

    </div>
  );
}

export default MyPage;
