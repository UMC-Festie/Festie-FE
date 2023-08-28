import React, { useState, useEffect, useContext } from 'react';
import './Mypage.css';
import Poster from '../components/Mainposter';
import posterImage from '../assets/poster_5.png';
import posterImageBlur from '../assets/poster_9.png';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';
import { removeCookie } from '../Cookies';

function MyPage() {
    const [activeTab, setActiveTab] = useState("정보공유"); // 외부 탭 메뉴 상태, 기본값 설정
    const [innerActiveTab, setInnerActiveTab] = useState("정보공유축제"); // 내부 탭 메뉴 상태, 기본값 설정
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);

    const logout = () => {
      removeCookie('accessToken', { path : '/'});
      setIsLoggedIn(false);
      localStorage.setItem('isLoggedIn', false);

      alert('로그아웃되었습니다!')
      navigate('/');
    } // 로그아웃 쿠키에서 토큰 삭제

    const handleTabClick = (index) => {
      setActiveTab(index); // 외부 탭 메뉴 상태 업데이트
    };
    const handleInnerTabClick = (index) => {
      setInnerActiveTab(index); // 내부 탭 메뉴 상태 업데이트
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

    const [posterInfo, setPosterInfo] = useState(null);
    const [filteredPosters, setFilteredPosters] = useState([]);
    const [posters, setPosters] = useState([]);
    const [userInfo, setUserInfo] = useState(null);

    // useEffect(() => {
    //   const cookieValue = document.cookie.replace(
    //     /(?:(?:^|.*;\s*)yourCookieName\s*\=\s*([^;]*).*$)|^.*$/,
    //     '$1'
    //   );

    //   axios.get('/api/mypage', {
    //     headers: {
    //       Cookie: `yourCookieName=${cookieValue}`
    //     }
    //   })
    //   .then(response => {
    //     // 회원정보 불러오기 성공
    //     setUserInfo(response.data);
    //   })
    //   .catch(error => {
    //     // 에러 처리
    //     console.error('Error fetching user info:', error);
    //   });
    // }, []);

      // useEffect(() => {
      //   fetch('https://jsonplaceholder.typicode.com/posts/1')
      //     .then((response) => response.json())
      //     .then((data) => {
      //       //posterInfo 상태 업데이트
      //       const { userId } = data;
      //       setPosterInfo({
      //         postertxt: 'Day',
      //         concertName: '부산푸드필름페스타',
      //       //   concertName: `Concert by User ${userId}`,
      //         place: '부산광역시 해운대구',
      //         date: '2023.5.30 - 2023.8.20',
      //         imageUrl: posterImage,
      //       });
      //     })
      //     .catch((error) => {
      //       console.log('Error fetching data:', error);
      //     });
      // }, []);

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts') // Fetch all posters
          .then((response) => response.json())
          .then((data) => {
            const postersData = data.slice(0, 8).map((item) => ({
              id: item.id,
              postertxt: 'Day',
              concertName: `부산푸드필름페스타`,
              place: '부산광역시 해운대구',
              date: '2023.5.30 - 2023.8.20',
              imageUrl: posterImageBlur,
            }));
            setPosters(postersData);
            setFilteredPosters(postersData); // Also, update the filteredPosters state
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
        <span className="logoutBtn" onClick={logout}>로그아웃</span>
        <NavLink to="/resetPw" style={{ textDecoration: "none" }}>
          <span className="resetpwBtn" onClick={handleScrollToTop}>비밀번호 수정하기</span>
        </NavLink>
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
            </div>
          </div>
        )}
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
              <button
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
              </button>
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
        <span className="recentEight">8건</span>
        <span className="mypageSelectbox">
          <SelectBox options={OPTIONS} value={selectedOption} onChange={handleOptionChange} className="custom-select" />
        </span>
      </div>
      <div className="mypageContent">
      {innerActiveTab === "정보공유축제" && (
            // <div className="poster_wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            // </div>
            <div className="poster-wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filteredPosters.length > 0
              ? filteredPosters.map((poster) => <Poster key={poster.id} posterInfo={poster} />)
              : posters.map((poster) => <Poster key={poster.id} posterInfo={poster} />)}
          </div>
        )}
        {innerActiveTab === "매칭이력" && (
            // <div className="poster_wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            //         {posterInfo && <Poster posterInfo={posterInfo} />}
            // </div>
            <div className="poster-wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filteredPosters.length > 0
              ? filteredPosters.map((poster) => <Poster key={poster.id} posterInfo={poster} />)
              : posters.map((poster) => <Poster key={poster.id} posterInfo={poster} />)}
          </div>
        )}
      </div>

    </div>
  );
}

export default MyPage;
