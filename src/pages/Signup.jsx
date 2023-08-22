import React, { useEffect, useState } from 'react';
import './Signup.css';
import alertredIcon from '../assets/alert_circle_red.svg';
import alertgrayIcon from '../assets/alert_circle_gray.svg';
import axios from "axios";
import Signup2Form from './Signup2';
import { NavLink, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const [isSpecialCharIncluded, setIsSpecialCharIncluded] = useState(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleChangeCheckPassword = (e) => {
    const { value } = e.target;
    setCheckPassword(value);
  };

  const handleBlurEmail = () => {
    // 이메일 유효성 검사를 위한 정규식
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setIsValidEmail(emailPattern.test(email));
  };

  const handleBlurPassword = () => {
    // 비밀번호 유효성 검사를 위한 정규식
    // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,}$/;
    const passwordPattern = /^(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{11,}$/;
    setIsValidPassword(passwordPattern.test(password));
    setIsSpecialCharIncluded(passwordPattern.test(password) && /[@$!%*?&]/.test(password));
  };

  const handleBlurCheckPassword = () => {
    // 비밀번호와 비밀번호 재확인 일치 여부 검사
    setIsPasswordMatch(password === checkPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출됨!");
  };

  const isSubmitDisabled = !isValidEmail || !isValidPassword || !isSpecialCharIncluded || !isPasswordMatch;

  const handleSignupNext = () => {
    //email, password, and checkPassword 데이터를 Signup2로 전달
    const props = {
      email,
      password,
      checkPassword,
    };
    console.log('Props passed to Signup2:', props);
    navigate('/signUp/next', props);
  };

  // axios.get('/api/hello')
  // .then((Response) => {
  //     console.log(Response); 
  // })
  // .catch((Error) => {
  //     console.log(Error);
  // });

  // const onClickSignupNext = () => {
  //   axios({
  //     url: '/api/user/signup',
  //     method: 'POST',
  //     body: { email, password, passwordCheck, nickName, birthday, gender },
  //   })
  //     .then((res) => {
  //       localStorage.setItem('accessToken', res.data.accessToken);
  //       alert('정보저장 성공.');
  //       window.location.replace('/signUp/next');
  //     })
  //     .catch((err) => {
  //       alert('정보저장 실패');
  //     });
  // };

  return (
    <div className="signupForm">
      <h2>Festie에 오신걸<br />환영합니다!</h2>
      <div className="page1">1/2</div>

      <form onSubmit={handleSubmit}>
        <ul>
          <li><strong>이메일</strong></li>
          <li></li>
          <input
            type="text"
            className={`emailText ${isValidEmail !== null ? "error" : ""}`}
            placeholder="아이디가 될 이메일을 입력해주세요"
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
          />
          {isValidEmail == false && <span><img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="emailalert">올바른 형식의 이메일을 입력해주세요.</p></span>}
          {isValidEmail !== false && <span><p className="emptyalertform" style={{ marginLeft: '469px', verticalAlign: 'sub' }}>에러메시지공간</p></span>}
          <li><strong>비밀번호</strong></li>
          <li></li>
          <input
            type="password"
            className={`passwordText ${isValidPassword !== null ? "error" : ""}`}
            placeholder="(주의사항을 확인하고) 비밀번호를 입력해주세요"
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
          />        
          {isValidPassword == false && isSpecialCharIncluded == false && <span><img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="pwalert">특수문자를 포함해주세요.</p></span>}
          {isValidPassword == null && isSpecialCharIncluded == null && <span><img src={alertgrayIcon} className="alertgrayIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="pwform">영어 대/소문자, 특수문자 포함 11자 이상</p></span>}
          {isValidPassword == true && isSpecialCharIncluded == true && <span><p className="emptyalertform" style={{ marginLeft: '469px', verticalAlign: 'sub' }}>에러메시지공간</p></span>}
          {/* {isValidPassword !== false && isSpecialCharIncluded == true && <span><p className="emptyalertform" style={{ marginLeft: '469px', verticalAlign: 'sub' }}>에러메시지공간</p></span>} */}
          <li><strong>비밀번호 재확인</strong></li>
          <li></li>
          <input
            type="password"
            className={`passwordcheckText ${isPasswordMatch !== null? "error" : ""}`}
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChangeCheckPassword}
            onBlur={handleBlurCheckPassword}
          />
          {isPasswordMatch == false && <span><img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="pwcheckalert">비밀번호가 일치하지 않아요.</p></span>}
          {isPasswordMatch !== false && <span><p className="emptyalertform" style={{ marginLeft: '469px', verticalAlign: 'sub' }}>에러메시지공간</p></span>}
          {/* <NavLink to="/signUp/next" style={{ textDecoration: "none" }}> */}
            <div
              className={`signupnextBtn ${isSubmitDisabled ? "disabled" : "enabled"}`}
              onClick={(e) => {
                if (isSubmitDisabled) {
                  e.preventDefault(); // 클릭 이벤트를 막음
                  return;
                }
                // 클릭 가능한 상태일 때의 동작 수행
                handleSignupNext();
              }}
              disabled={isSubmitDisabled}
            >
              다음
            </div>
          {/* </NavLink> */}
        </ul>
      </form>
    </div>
  );
};

export default SignupForm;

