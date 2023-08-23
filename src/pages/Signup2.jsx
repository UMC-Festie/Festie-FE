import React, { useState } from 'react';
import './Signup2.css';
import alertredIcon from '../assets/alert_circle_red.svg';
import { commonAxios } from "../common/commonAxios";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup2Form = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [gender, setSelectedSex] = useState(null);
  const [isNicknameTaken, setIsNicknameTaken] = useState(false);
  const [birthday, setBirthday] = useState(""); // 생년월일 입력값
  const [isSignupButtonEnabled, setIsSignupButtonEnabled] = useState(false);

  const [nickname, setNickname] = useState('');
  const email = state.email;
  const password = state.password;
  const checkPassword = state.checkPassword;

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSexClick = (sex) => {
    console.log(`Clicked gender button with value: ${sex}`);
    setSelectedSex(sex);
    checkAllFields();
  };
  
  const handleBlur = (event) => {
    const inputNickname = event.target.value; // 입력한 닉네임
    // 여기에서 닉네임 중복 여부를 확인하는 로직을 추가
    // 만약 중복된 닉네임이라면 setIsNicknameTaken(true)로 설정
    const existingNicknames = ['포디', '히동', '쥬쥬']; // 기존에 가입된 닉네임 리스트(프론트엔드파트원들로 임의로 설정)
    setIsNicknameTaken(existingNicknames.includes(inputNickname));
    checkAllFields();
  };

  const handleBirthChange = (event) => {
    const inputBirthDate = event.target.value; // 입력한 생년월일

    // YYYY-MM-DD인지 확인하는 정규식
    const birthDatePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
    

    if (birthDatePattern.test(inputBirthDate)) {
      setBirthday(inputBirthDate);
      checkAllFields();
    } else {
      setBirthday(""); // 입력이 올바르지 않으면 생년월일 초기화
      setIsSignupButtonEnabled(false); // 버튼 비활성화
    }
  };

  const checkAllFields = () => {
    // 모든 필드가 입력되었는지 확인
    setIsSignupButtonEnabled(gender !== null && birthday !== "" && !isNicknameTaken);
  };

  // const handleSubmit = () => {
  //   // 완료 버튼 클릭 시 동작
  //   if (isSignupButtonEnabled) {
  //     console.log("가입 완료!");
  //   }
  // };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
  };

  // const onClickSignup = () => {
  //   axios({
  //     url: '/user/signup',
  //     method: 'POST',
  //     body: { email, password, passwordCheck, nickName, birthday, gender },
  //   })
  //     .then((res) => {
  //       localStorage.setItem('accessToken', res.data.accessToken);
  //       alert('회원가입 성공.');
  //       window.location.replace('/login');
  //     })
  //     .catch((err) => {
  //       alert('회원가입 실패');
  //     });
  // };

  const handleSignup = () => {
    const requestData = {
      email,
      password,
      checkPassword,
      nickname,
      birthday,
      gender,
    };

    console.log(requestData);
    axios
    .post('/api/user/signup', requestData)
    .then((res) => {
      if (res.status === 200) {
        // localStorage.setItem('accessToken', res.data.accessToken);
        alert('회원가입 성공.');
        navigate('/login');
      } else {
        alert('회원가입 실패');
      }
    })
    .catch((error) => {
      if (error.response) {
        console.error('API Error:', error.response.data);
        alert('회원가입 실패: ' + error.response.data.message);
      } else if (error.request) {
        console.error('No response from server:', error.request);
        alert('서버 응답 없음');
      } else {
        console.error('Request Error:', error.message);
        alert('오류 발생');
      }
    });

    // axios
    //   .post('/api/user/signup', requestData)
    //   .then((res) => {
    //     localStorage.setItem('accessToken', res.data.accessToken);
    //     alert('회원가입 성공.');
    //     navigate('/login');
    //   })
    //   .catch((err) => {
    //     alert('회원가입 실패');
    //   });
  };


  return (
    <div className="signup2Form">
      <h2>
        Festie에 오신걸
        <br />
        환영합니다!
      </h2>
      <div className="page2">2/2</div>
      <p>
        같이가요 서비스를 위해서 닉네임, 성별, 나이를 입력해주세요.
        <br />
        닉네임을 제외한 성별과 나이는 수정이 불가합니다.
      </p>
      <form>
        <div>
          <span className="text">닉네임</span>
          <input
            type="text"
            className="nicknameText"
            placeholder="닉네임을 입력해주세요"
            onBlur={handleBlur}
            onChange={handleNicknameChange}
          />
          {isNicknameTaken && <span><img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="nicknamealert">이미 가입된 닉네임입니다</p></span>}
          {!isNicknameTaken && <span><p className="emptyalertform" style={{ marginLeft: '469px', verticalAlign: 'sub' }}>에러메시지공간</p></span>}
        </div>
        <div>
          <span className="text">생년월일</span>
          <span className="textSex">성별</span>
        </div>
        <div className="inputBirthsex">
          <input type="text" className="birthText" placeholder="YYYY-MM-DD" onChange={handleBirthChange} maxLength="10"/>
          <span
            className={`sexBtn ${gender === 'M' ? 'clicked' : ''}`}
            style={{ marginLeft: '40px' }}
            onClick={() => handleSexClick('M')}
          >
            남자
          </span>
          <span
            className={`sexBtn ${gender === 'F' ? 'clicked' : ''}`}
            style={{ marginLeft: '12px' }}
            onClick={() => handleSexClick('F')}
          >
            여자
          </span>
        </div>
        {/* <NavLink to="/login" style={{ textDecoration: "none" }}> */}
            <div
              className={`signup2doneBtn ${isSignupButtonEnabled ? "enabled" : "disabled"}`}
              onClick={handleSignup}
              // onClick={handleScrollToTop}
              // onClick={(e) => {
              //   if (isSignupButtonEnabled) {
              //     e.preventDefault(); // 클릭 이벤트를 막음
              //     return;
              //   }
              //   // 클릭 가능한 상태일 때의 동작 수행
              //   handleSignup();
              // }}
              disabled={isSignupButtonEnabled}
            >
              완료
            </div>
        {/* </NavLink> */}
      </form>
    </div>
  );
};

export default Signup2Form;
